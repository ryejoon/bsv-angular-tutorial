import {Network, PublicKey} from '@moneybutton/client';

declare module 'moneyButton' {
  export class PrivateKey {
    bn: any; // BN
    compressed: boolean;
    publicKey: PublicKey;
    network: Network;

    toAddress(): Address;
  }

  export class PublicKey {
    compressed: boolean;
    network: Network;

    toAddress(): Address;
  }

  export class Network {
    // 'livenet'
    name: string;

    // 'mainnet'
    alias: string;

    pubkeyhash: number;
    privatekey: number;
    // ...
  }

  export class Address {
    hashBuffer: Uint8Array;
    network: Network;
    type: string;

    toString(): string;
  }

}
