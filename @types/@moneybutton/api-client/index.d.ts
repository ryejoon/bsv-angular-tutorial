/**
 * https://docs.moneybutton.com/docs/api-oauth-jsclient.html
 */
export class MoneyButtonClient {
  constructor(clientIdentifierOrOAuthIdentifier: string, clientSecret?: string);

  /**
   * @param permission ex> 'auth.user_identity:read'
   * @param oAuthRedirectUrl
   */
  public requestAuthorization(permission: string, oAuthRedirectUrl: string);

  public handleAuthorizationResponse(): Promise<any>;

  public getRefreshToken(): any;
}
