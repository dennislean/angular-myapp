import { Component, Input } from '@angular/core';

/**
 *
 */
export interface MenuItem {
  title: string;
  callback?: Function;
  active?: boolean;
  disabled?: boolean;
  hidden?: boolean;
}

/**
 *
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  /**
   *
   */
  @Input() mainMenuList: MenuItem[] = [];

  /**
   *
   */
  @Input() subMenuList: MenuItem[] = [];
}
