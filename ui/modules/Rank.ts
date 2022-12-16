import {
    PublicKey,
  } from 'snarkyjs'
  
export interface ContractVerifier {
    verify: (rank: Rank) => boolean;
}
export class Rank {
    address: PublicKey;
    rank: string;
    martialArt: string;
}

