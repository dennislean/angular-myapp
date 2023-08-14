import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, LoginCredential } from './../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
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
    console.log('Running loginUser');
    this.errorMessage = 'Logging in...';

    const loginSuccessful: boolean = await this.authService.login(this.loginForm.value);

    if (!loginSuccessful) {
      this.errorMessage = 'Login unsuccessful.';
    }
  }
}
