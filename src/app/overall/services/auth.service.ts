export class AuthService {
  private authenticated = false;

  login(): void {
    this.authenticated = true;
  }

  logout(): void {
    this.authenticated = false;
    window.localStorage.clear();
  }

  loggedUser(): boolean {
    return this.authenticated;
  }
}
