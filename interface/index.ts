export interface ISignInWithKey {
  key: string;
}

export interface ISendToken {
  pubKey: string;
  amount: number;
}


export interface IRequestAirdrop {
  lamport: number;
}