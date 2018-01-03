import {UserSearchService} from './user-search.service';
import {Observable} from 'rxjs';

describe('User Service', () => {
  it('get', () => {
    let mockHttp = jasmine.createSpyObj('mockHttp', ['get']);

    let expectedUsers = [{id: 1}];
    mockHttp.get.and.returnValue(Observable.of(false));

    let userService = new UserSearchService(mockHttp, 'abc');
  });

  it('should call http.get with the correct URL', () => {

    const expectedUrl = 'api/users';
    let mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    let sut = new UserSearchService(mockHttp, expectedUrl);
    sut.getUsers();

    expect(mockHttp.get).toHaveBeenCalledWith(expectedUrl);

    });

});
