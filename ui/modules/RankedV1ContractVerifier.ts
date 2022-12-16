import { Rank, ContractVerifier } from './Rank';
import { CircuitString, Field, Poseidon, PublicKey } from 'snarkyjs';

import { app, database } from './firestore';
import { doc, getDoc } from 'firebase/firestore';
import Authentication from './Authentication';
import UserApiClient from './UserApiClient';
export class RankedV1ContractVerifier {
    zkClient: any;

    constructor(zkClient: any) {
        this.zkClient = zkClient;
    }

    verify = async (rank: Rank) => {
        const rankField = this.getHashFromRank(rank);
        console.log("rank from verify", rank.martialArt, rankField.toString())
        const verify = false;
        console.log("contract adddress: ", Authentication.contractAddress);
        let martialArtHash: Field = await this.getCurrentRankHash(rank);

        return rankField.toString() == martialArtHash!.toString();
    }


    async promote(certifier: PublicKey, newRank: Rank) {
        let result = { successful: false, message: null };
        try {
            const currentField = await this.getCurrentRankHash(newRank);
            const newField = this.getHashFromRank(newRank);
            await this.zkClient!.fetchAccount({ publicKey: PublicKey.fromBase58(Authentication.contractAddress) })
            await this.zkClient!.createCertifyTransaction(newRank.martialArt, certifier, currentField, newField);
            console.log("current rank hash:", currentField.toString());
            console.log("new rank hash:", newField.toString());
            // proof etc
            console.log('creating proof...');
            await this.zkClient!.proveUpdateTransaction();

            console.log('getting Transaction JSON...');
            const transactionJSON = await this.zkClient!.getTransactionJSON()

            console.log('requesting send transaction...');
            let transactionFee = 0.1;

            const { hash } = await (window as any).mina.sendTransaction({
                transaction: transactionJSON,
                feePayer: {
                    fee: transactionFee,
                    memo: '',
                },
            });

            console.log(
                'See transaction at https://berkeley.minaexplorer.com/transaction/' + hash
            );
            // update DB with Rank
            let martialArtsDictionary: any = {
                "ibjjf": "Brazilian Jiu Jitsu",
                "itf": "Taekwon-Do",
                "wkf": "Karate"
            };
            const maLongName = martialArtsDictionary[newRank.martialArt];
            console.log("on the way to firebase");
            return await UserApiClient().promoteStudent(newRank.address.toBase58(), maLongName, newRank.martialArt, newRank.rank);
        }
        catch (e: any) {
            result.successful = false;
            result.message = e.message;
        }
    }

    private async getCurrentRankHash(rank: Rank) {
        await this.zkClient!.fetchAccount({ publicKey: PublicKey.fromBase58(Authentication.contractAddress) });

        let martialArtHash: Field = Field(0);
        martialArtHash = await this.zkClient!.getRank(rank.martialArt);
        console.log("from current hash:", martialArtHash.toString());
        return martialArtHash;
    }


    private async getCurrentRank(address: PublicKey, martialArt: string) {
        const docRef = doc(database, "users", address.toBase58());
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const ma = docSnap.data().martialArts;
            for (var i = 0; i < ma.length; i++) {
                let one = ma[i];
                if (one.martialArtShortName == martialArt) {
                    let rank = new Rank();
                    rank.address = address;
                    rank.martialArt = one.martialArtShortName;
                    rank.rank = one.martialArtShortName;

                    return rank;
                }
            }
        }
        return new Rank();
    }

    private getHashFromRank(rank: Rank) {
        console.log(JSON.stringify(rank));
        const stringData = CircuitString.fromString(JSON.stringify(rank));
        const fields = stringData.toFields();
        const data = Poseidon.hash(fields);
        return data;
    }
}
