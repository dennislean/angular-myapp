import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 *
 */
export interface LoginCredential {
  username: String;
  password: String;
}

/**
 *
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  /**
   *
   */
  constructor(public router: Router) { }

  /**
   *
   */
  private readonly LOCAL_STORAGE_AUTH_TOKEN: string = 'auth_token';

  /**
   * NOTE: For demo purpose.
   */
  public static readonly credential: LoginCredential = {
    username: 'user123',
    password: 'StrongPassword!456',
  };

  /**
   *
   */
  async login(loginCredential: LoginCredential): Promise<boolean> {
    const timer = (ms: number) => new Promise((_) => setTimeout(_, ms));

    // Sleep for 1 second to pretend calling API.
    await timer(1000);

    if (
      loginCredential.username === AuthService.credential.username &&
      loginCredential.password === AuthService.credential.password
    ) {
      localStorage.setItem(this.LOCAL_STORAGE_AUTH_TOKEN, '----access-token-value-from-auth-api-reponse----');
      this.handleLoginSuccessful();

      return true;
    }

    return false;
  }

  /**
   *
   */
  async handleLoginSuccessful(): Promise<void> {
    this.router.navigate(['home']);
  }

  /**
   *
   */
  get authToken(): string | null {
    return localStorage.getItem(this.LOCAL_STORAGE_AUTH_TOKEN);
  }

  /**
   *
   */
  get isLoggedIn(): boolean {
    return this.authToken !== null;
  }

  /**
   *
   */
  logout() {
    localStorage.removeItem(this.LOCAL_STORAGE_AUTH_TOKEN);
    this.router.navigate(['login']);
  }
}
