import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {UserResultModel} from "./user-result.model";

export const API_URL = 'http://localhost:64884/api/users';

@Injectable()
export class UserService {
  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {
  }

  getUsers(): Observable<UserResultModel[]> {
    return this.http.get<UserResultModel[]>(this.apiUrl);
  }
}
