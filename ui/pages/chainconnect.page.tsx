import { useEffect, useState } from "react";
import './reactCOIServiceWorker';

import ZkappWorkerClient from './rankedWorkerClient';

import {
    PublicKey,
    PrivateKey,
    Field,
    CircuitString,
    Poseidon,
} from 'snarkyjs'

let transactionFee = 0.1;

export default function App() {

    let [state, setState] = useState({
        zkappWorkerClient: null as null | ZkappWorkerClient,
        hasWallet: null as null | boolean,
        hasBeenSetup: false,
        accountExists: false,
        currentNum: null as null | Field,
        publicKey: null as null | PublicKey,
        zkappPublicKey: null as null | PublicKey,
        creatingTransaction: false,
        input: ""
    });

    // -------------------------------------------------------
    // Do Setup

    useEffect(() => {
        (async () => {
            if (!state.hasBeenSetup) {
                const zkappWorkerClient = new ZkappWorkerClient();

                console.log('Loading SnarkyJS...');
                await zkappWorkerClient.loadSnarkyJS();
                console.log('done');

                await zkappWorkerClient.setActiveInstanceToBerkeley();

                const mina = (window as any).mina;

                if (mina == null) {
                    setState({ ...state, hasWallet: false });
                    return;
                }

                const publicKeyBase58: string = (await mina.requestAccounts())[0];
                const publicKey = PublicKey.fromBase58(publicKeyBase58);

                console.log('using key', publicKey.toBase58());

                console.log('checking if account exists...');
                const res = await zkappWorkerClient.fetchAccount({ publicKey: publicKey! });
                const accountExists = res.error == null;

                await zkappWorkerClient.loadContract();

                console.log('compiling zkApp');
                await zkappWorkerClient.compileContract();
                console.log('zkApp compiled');

                const zkappPublicKey = PublicKey.fromBase58('B62qiijS17F93uaP4EGAXPgXKwm9B9YoqUuYRfuMrnoCSGnQ23Y4NBG');
                await zkappWorkerClient.initZkappInstance(zkappPublicKey);

                console.log('getting zkApp state...');
                await zkappWorkerClient.fetchAccount({ publicKey: zkappPublicKey })
                const currentNum = await zkappWorkerClient.getIbjjf();
                console.log('current ibjjf:', currentNum.toString());
                const currentInstructor = await zkappWorkerClient.getInstructor();
                console.log('current instructor: ', currentInstructor.toBase58());

                setState({
                    ...state,
                    zkappWorkerClient,
                    hasWallet: true,
                    hasBeenSetup: true,
                    publicKey,
                    zkappPublicKey,
                    accountExists,
                    currentNum
                });
            }
        })();
    }, []);

    // -------------------------------------------------------
    // Wait for account to exist, if it didn't

    useEffect(() => {
        (async () => {
            if (state.hasBeenSetup && !state.accountExists) {
                for (; ;) {
                    console.log('checking if account exists...');
                    const res = await state.zkappWorkerClient!.fetchAccount({ publicKey: state.publicKey! })
                    const accountExists = res.error == null;
                    if (accountExists) {
                        break;
                    }
                    await new Promise((resolve) => setTimeout(resolve, 5000));
                }
                setState({ ...state, accountExists: true });
            }
        })();
    }, [state.hasBeenSetup]);

    // -------------------------------------------------------
    // Send a transaction
    const onUpdateInstructor = async () => {
        //setState({ ...state, creatingTransaction: true });
        console.log('sending a transaction...');

        await state.zkappWorkerClient!.fetchAccount({ publicKey: state.publicKey! });
        const blackbelt = PublicKey.fromBase58("B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR");
        console.log("sending blackbelt as: ", blackbelt.toBase58());
        await state.zkappWorkerClient!.createUpdateBlackBeltTransaction(blackbelt);

        console.log('creating proof...');
        await state.zkappWorkerClient!.proveUpdateTransaction();

        console.log('getting Transaction JSON...');
        const transactionJSON = await state.zkappWorkerClient!.getTransactionJSON()

        console.log('requesting send transaction...');
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

        setState({ ...state, creatingTransaction: false });
    }


    const onSendTransaction = async () => {
        //setState({ ...state, creatingTransaction: true });
        console.log('sending a transaction...');

        await state.zkappWorkerClient!.fetchAccount({ publicKey: state.publicKey! });
        //const certifier = PublicKey.fromBase58("B62qiijS17F93uaP4EGAXPgXKwm9B9YoqUuYRfuMrnoCSGnQ23Y4NBG");
        const blackbelt = PublicKey.fromBase58("B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR");
        const intialState = Field(0);//await state.zkappWorkerClient!.getIbjjf();
        console.log("sending initial state as: ", intialState.toString());
        console.log("sending blackbelt state as: ", blackbelt.toBase58());
        const promotion1 = {
            address: "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR", 
            rank: "blue belt"
        }
        console.log("sending rank state as: ", promotion1.rank);
        const promotion1stringData = CircuitString.fromString(JSON.stringify(promotion1));
        const promotion1fields = promotion1stringData.toFields();
        const promotion1Data = Poseidon.hash(promotion1fields);
        console.log("sending promotion data as: ", promotion1Data.toString());

        await state.zkappWorkerClient!.createCertifyTransaction("ibjjf", blackbelt, intialState, promotion1Data);

        console.log('creating proof...');
        await state.zkappWorkerClient!.proveUpdateTransaction();

        console.log('getting Transaction JSON...');
        const transactionJSON = await state.zkappWorkerClient!.getTransactionJSON()

        console.log('requesting send transaction...');
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

        setState({ ...state, creatingTransaction: false });
    }

    // -------------------------------------------------------
    // Refresh the current state

    const onRefreshCurrentNum = async () => {
        console.log('getting zkApp state...');
        await state.zkappWorkerClient!.fetchAccount({ publicKey: state.zkappPublicKey! })
        const currentNum = await state.zkappWorkerClient!.getIbjjf();
        console.log('current state:', currentNum.toString());

        const currentInstructor = await state.zkappWorkerClient!.getInstructor();
        console.log('current instructor: ', currentInstructor.toBase58());
        setState({ ...state, currentNum });
    }

    const handleJsonChange = function(e:any) {
        setState({  ...state, input: e.target.value });
    }

    const verifyRank = async () => {
        console.log('verifying rank...');
        var input = JSON.parse(state.input);
        const promotion1stringData = CircuitString.fromString(JSON.stringify(input));
        const promotion1fields = promotion1stringData.toFields();
        const promotion1Data = Poseidon.hash(promotion1fields);

        await state.zkappWorkerClient!.fetchAccount({ publicKey: state.zkappPublicKey! })
        const currentNum = await state.zkappWorkerClient!.getRank(input.martialArt);
        console.log('current state:', currentNum.toString());
        console.log('new state:', promotion1Data.toString());
        
        console.log("Valid?: ", promotion1Data.toString() == currentNum.toString());
    }

    const promotetoJson = async () => {
        console.log('promoting rank...');
        const blackbelt = PublicKey.fromBase58("B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR");
        let json = {
            "address": "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR", 
            "rank": "blue belt"
        };
        const originalstringData = CircuitString.fromString(JSON.stringify(json));
        const originalfields = originalstringData.toFields();
        const originalData = Poseidon.hash(originalfields);
        

        const promo = JSON.parse(state.input);
        const promotion1stringData = CircuitString.fromString(JSON.stringify(promo));
        const promotion1fields = promotion1stringData.toFields();
        const promotion1Data = Poseidon.hash(promotion1fields);
        await state.zkappWorkerClient!.fetchAccount({ publicKey: state.zkappPublicKey! })
        let intialState = await state.zkappWorkerClient!.getRank(promo.martialArt);
        console.log("from contract: ", intialState.toString());
        intialState = originalData;
        console.log("from json: ", originalData.toString());
        console.log("from rank: ", promotion1Data.toString());
        console.log("state zkapp key: ", state.zkappPublicKey!.toBase58());

        await state.zkappWorkerClient!.fetchAccount({ publicKey: state.zkappPublicKey! })
        await state.zkappWorkerClient!.createCertifyTransaction("ibjjf", blackbelt, intialState, promotion1Data);
        console.log('creating proof...');
        await state.zkappWorkerClient!.proveUpdateTransaction();

        console.log('getting Transaction JSON...');
        const transactionJSON = await state.zkappWorkerClient!.getTransactionJSON()

        console.log('requesting send transaction...');
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
    }

    // -------------------------------------------------------
    // Create UI elements

    let hasWallet;
    if (state.hasWallet != null && !state.hasWallet) {
        const auroLink = 'https://www.aurowallet.com/';
        const auroLinkElem = <a href={auroLink} target="_blank" rel="noreferrer"> [Link] </a>
        hasWallet = <div> Could not find a wallet. Install Auro wallet here: {auroLinkElem}</div>
    }

    let setupText = state.hasBeenSetup ? 'SnarkyJS Ready' : 'Setting up SnarkyJS...';
    let setup = <div> {setupText} {hasWallet}</div>

    let accountDoesNotExist;
    if (state.hasBeenSetup && !state.accountExists) {
        const faucetLink = "https://faucet.minaprotocol.com/?address=" + state.publicKey!.toBase58();
        accountDoesNotExist = <div>
            Account does not exist. Please visit the faucet to fund this account
            <a href={faucetLink} target="_blank" rel="noreferrer"> [Link] </a>
        </div>
    }

    let mainContent;
    if (state.hasBeenSetup && state.accountExists) {
        mainContent = <div>
            <button onClick={onSendTransaction} disabled={state.creatingTransaction}> Send Transaction </button>
            <div>
            <button onClick={onUpdateInstructor}> Update Black Belt </button>

            </div>
            <div> Current Number in zkApp: {state.currentNum!.toString()} </div>
            <button onClick={onRefreshCurrentNum}> Get Latest State </button>

            <hr></hr>
            <textarea id="json" onChange={handleJsonChange}></textarea><br/>
            <button onClick={verifyRank}> Verify Rank </button>
             <button onClick={promotetoJson}> Promote to Rank </button>


        </div>
    }

    return <div>
        {setup}
        {accountDoesNotExist}
        {mainContent}
    </div>
}
