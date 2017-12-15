import {API_URL, UserSearchService} from './user-search.service';

export const SearchServiceInjectables: Array<any> = [
  {provide: API_URL, useValue: API_URL}
  // {provide: UserSearchService, useValue: UserSearchService}
];
