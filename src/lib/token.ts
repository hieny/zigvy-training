class Token {
  private tokenKey = "jwt-token";
  private refreshTokenKey = "refresh-jwt-token";

  getTokenKey(): string {
    return this.tokenKey;
  }
  getRefreshTokenKey(): string {
    return this.refreshTokenKey;
  }
  public getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  public setToken(token: string) {
    return localStorage.setItem(this.tokenKey, token);
  }

  public removeToken() {
    return localStorage.removeItem(this.tokenKey);
  }

  public getRefreshToken() {
    return localStorage.getItem(this.refreshTokenKey);
  }

  public setRefreshToken(token: string) {
    return localStorage.setItem(this.refreshTokenKey, token);
  }
  
  public removeRefreshToken() {
    return localStorage.removeItem(this.refreshTokenKey);
  }
}

export default new Token();
