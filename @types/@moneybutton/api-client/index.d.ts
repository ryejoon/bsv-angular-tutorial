export interface UserProfile {
  createdAt: string;
  name: string;
  defaultCurrency: string; // USD
  defaultLanguage: string; // en
  bio: string;
  avatarUrl: string;
  id: string;
  primaryPaymail: string;
}

/**
 * https://docs.moneybutton.com/docs/api-oauth-jsclient.html
 *
 * https://htmlpreview.github.io/?https://raw.githubusercontent.com/moneybutton/api-client/master/docs/MoneyButtonClient.html
 */
export class MoneyButtonClient {
  constructor(clientIdentifierOrOAuthIdentifier: string, clientSecret?: string);

  /**
   * @param permission ex> 'auth.user_identity:read'
   * @param oAuthRedirectUrl
   */
  public requestAuthorization(permission: string, oAuthRedirectUrl: string);

  public getRefreshToken(): any;

  public getUserProfile(userId: string): Promise<UserProfile>;

  public logInAsApp(): Promise<any>;

  public changePassword(password: string, encryptedMnemonic: any, xpub: any, language: any): Promise<any>;

  public clearAccessToken();

  public clearExpirationTime();

  public clearRefreshToken();

  public createUserClient(userId: string, attributes: any): Promise<any>;

  public getBalance(userId: string): Promise<any>;

  public getClientByIdentifier(clientIdentifier: any): Promise<any>;

  public getIdentity(): Promise<{id: string, name: string}>;

  public getMaxWithdrawal(userId: string): Promise<any>;

  public getReceiveAddress(userId: string, walletId: string): Promise<any>;

  public getUser(userId: string): Promise<any>;

  //

  public getUserTransactionHistory(userId: string, query: any): Promise<any>;

  public getUserWallet(userId: string, walletId: string): Promise<any>;

  public getUserWithdrawal(userId: string, withdrawalId: string): Promise<any>;

  public getUserWallets(userId: string): Promise<any>;

  public getValidAccessToken(): Promise<string | null>;

  public getWalletBalance(userId: string, walletId: string): Promise<any>;

  public handleAuthorizationResponse(): Promise<any>;

  public isLoggedIn(): Promise<boolean>;

  public logIn(email: string, password: string);

  public logOut();

  //

  public signUp(email: string, password: string): Promise<any>;

  public updateUser(userId: string, attributes: any): Promise<any>;

  //

  public updateUserWithdrawalWithTransaction(userId: string, withdrawalId: string, attributes: any, transaction: any): Promise<any>;

  public updateWallet(userId: string, walletId: string, attributes: any): Promise<any>;

  public verifyEmail(accessToken: string): Promise<any>;

  public whoAmI(): Promise<any>;

}
