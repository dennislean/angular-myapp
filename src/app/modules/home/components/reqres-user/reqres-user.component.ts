import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ReqresUser, ReqresUserResponse, ReqresUserService } from './reqres-user.service';

/**
 *
 */
@Component({
  selector: 'app-reqres-user',
  templateUrl: './reqres-user.component.html',
})
export class ReqresUserComponent implements OnInit {
  /**
   *
   */
  reqresUserService = inject(ReqresUserService);

  /**
   *
   */
  currentPage: number = 1;

  /**
   *
   */
  isLoading: boolean = false;

  /**
   *
   */
  private reqresUserResponse: ReqresUserResponse = new ReqresUserResponse();

  /**
   *
   */
  get reqresUsers(): ReqresUser[] {
    return this.reqresUserResponse.data;
  }

  /**
   *
   */
  get isFirstPage(): boolean {
    return this.currentPage <= 1;
  }

  /**
   *
   */
  get isLastPage(): boolean {
    return this.currentPage >= this.reqresUserResponse.total_pages;
  }

  /**
   *
   */
  get totalPage(): number | null {
    return this.reqresUserResponse?.total_pages;
  }

  /**
   *
   */
  constructor(private http: HttpClient) {
  }

  /**
   *
   */
  ngOnInit() {
    this.loadData();
  }

  /**
   *
   */
  loadData() {
    this.isLoading = true;

    return this.reqresUserService
      .getUsers(this.currentPage)
      .subscribe({
        next: (response: ReqresUserResponse) => {
          this.reqresUserResponse = response;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  /**
   *
   */
  gotoPrevious() {
    this.currentPage = Math.max(1, this.currentPage - 1);
    this.loadData();
  }

  /**
   *
   */
  gotoNext() {
    this.currentPage = Math.min(this.reqresUserResponse.total_pages ?? 1, this.currentPage + 1);
    this.loadData();
  }
}
