import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { MenuItem } from 'src/app/shared/components/header/header.component';

/**
 *
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  /**
   *
   */
  constructor(public authService: AuthService) { }

  /**
   *
   */
  mainMenuList: MenuItem[] = [
    {
      title: 'Home',
      callback: () => console.log('test'),
      hidden: !this.authService.isLoggedIn,
    },
    {
      title: 'Coming soon...',
      hidden: !this.authService.isLoggedIn,
      disabled: true,
    },
  ];

  /**
   *
   */
  subMenuList: MenuItem[] = [
    {
      title: 'Logout',
      callback: () => this.authService.logout(),
      hidden: !this.authService.isLoggedIn,
    },
  ];
}
