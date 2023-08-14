import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 *
 */
export class ReqresUserResponse {
  constructor(
    public page: number = 0,
    public per_page: number = 0,
    public total: number = 0,
    public total_pages: number = 0,
    public data: ReqresUser[] = [],
  ) { }
}

/**
 *
 */
export interface ReqresUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

/**
 *
 */
@Injectable({ providedIn: 'root' })
export class ReqresUserService {
  /**
   *
   */
  constructor(private http: HttpClient) { }

  /**
   *
   */
  getUsers(page: number) {
    return this.http.get<ReqresUserResponse>(`https://reqres.in/api/users?page=${page}`);
  }
}
