import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginCredential } from 'src/app/shared/auth/auth.service';

/**
 *
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  /**
   *
   */
  loginForm: FormGroup;

  /**
   *
   */
  errorMessage: string = '';

  /**
   *
   */
  isLoading: boolean = false;

  /**
   * NOTE: For demo purpose only.
   */
  credential: LoginCredential = AuthService.credential;

  /**
   *
   */
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });

    if (this.authService.isLoggedIn) {
      this.router.navigate(['home']);
    }
  }

  /**
   *
   */
  ngOnInit() { }

  /**
   *
   */
  async loginUser() {
    this.errorMessage = '';
    this.isLoading = true;

    const loginSuccessful: boolean = await this.authService.login(this.loginForm.value);

    this.isLoading = false;

    if (!loginSuccessful) {
      this.errorMessage = 'Login failed. Please try again.';
    }
  }
}
