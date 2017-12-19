import {Response} from '@angular/http';
// import {HttpClient} from '@angular/common/http';

import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserSearchResult} from './user-search-result';
import {HttpClient} from '@angular/common/http';

export const API_URL = 'http://localhost:64884/api/users';

@Injectable()
export class UserSearchService {

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {
  }

  // Add return type
   getUsers() {
    return this.http.get(this.apiUrl).subscribe(response => {
      return (<any>response).map(item => {
        return new UserSearchResult({
          id: item.id,
          name: item.name,
          email: item.email
        });
      });

    });


    // return this.http.get(this.apiUrl)
    //   .map((response: Response) => {
    //     return (<any>response.json()).items.map(item => {
    //       return new UserSearchResult({
    //         id: item.id,
    //         name: item.name,
    //         email: item.email
    //       });
    //     });
    //   });
  }
}
