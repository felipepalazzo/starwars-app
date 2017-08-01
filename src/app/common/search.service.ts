import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const API_URL: string = 'https://swapi.co/api/';

@Injectable()
export class SearchService {
  constructor(private http: Http) { }

  getPeople(term): Observable<any> {
    return this.http
      .get(`${API_URL}people/?format=json&search=${term}`)
      .map((response: Response) => response.json().results);
  }
}
