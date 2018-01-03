import {getTestBed, inject, TestBed} from '@angular/core/testing';
import {API_URL, UserSearchService} from './user-search.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {UserSearchResult} from './user-search-result';

describe('User service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserSearchService,
        {provide: API_URL, useValue: 'api/url'}
      ]
    });
  });

  it('should get users',
    inject([HttpTestingController, UserSearchService], (httpMock: HttpTestingController, userService: UserSearchService) => {

      const mockUsers = [
        {id: 1, name: 'user 1'},
        {id: 2, name: 'user 2'}
      ];

      userService.getUsers().subscribe((user: UserSearchResult[]) => {
        console.log('user', JSON.stringify(user));
        expect(JSON.stringify(user)).toEqual(JSON.stringify(mockUsers));
      });

      const mockReq = httpMock.expectOne('api/url');

      mockReq.flush(mockUsers);
      httpMock.verify();
    }));

  // afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
  //   httpMock.verify();
  // }));


  it('returns users with an id <= 5',
    inject([HttpTestingController], (httpMock: HttpTestingController) => {
      const mockResponse = [
        {id: 5, name: 'Test5'},
        {id: 6, name: 'Test6'}
      ];

      const userService = getTestBed().get(UserSearchService);
      userService.getUsers().subscribe(
        actualUsers => {
          expect(actualUsers.length).toBe(2);
          expect(actualUsers[0].id).toEqual(5);
        }
      );

      const req = httpMock.expectOne(userService.apiUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(mockResponse);
      httpMock.verify();
    }));

});
