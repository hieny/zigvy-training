class Token {
    private tokenKey = "jwt-token";

    getTokenKey(): string {
        return this.tokenKey
    }

    public getToken(key: string) {
        return localStorage.getItem(key);
    }
    public setToken(key: string, token: string) {
        return localStorage.setItem(key,token);
    }
    public removeToken(key: string) {
        return localStorage.removeItem(key);
    }
}

export default new Token()