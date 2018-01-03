import {fakeAsync, getTestBed, inject, TestBed} from "@angular/core/testing";
import {UserSearchService} from "./user-search.service";
import {MockBackend} from "@angular/http/testing";
import {BaseRequestOptions, ConnectionBackend} from "@angular/http";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('User service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserSearchService,
      ]
    });
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));


  /* This works if HttpClient is the only parameter of the constructor
  it('returns users with an id <= 5',
    inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
    const mockResponse = [
      {
        id: 5,
        name: 'Test5',
      },
      {
        id: 6,
        name: 'Test6',
      }
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

*/

  /*

  it ('call service',
    inject([UserSearchService, HttpTestingController, HttpClient], fakeAsync((userService, httpMock: HttpTestingController, httpClient: HttpClient) => {

    const mockResponse = [{id: 1}];
    const userService2 = getTestBed().get(UserSearchService);

    userService2.getUsers().subscribe( actualUsers => {
      expect(actualUsers.length).toBe(1);
    });
    }))

    // userService.getUsers().subscribe((ev) => {
    //   expect(ev.body).toEqual('body');
    // });
    // mockBackend.connections.subscribe(c => {
    //   expect(c.request.url).toBe('http://abc');
    // });

    // expect('true').toEqual('true');
  ); */

});
