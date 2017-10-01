import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Reported } from './Reported';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DashboardService {

private headers = new Headers({'Content-Type': 'application/json'});
private reportedUrl = 'http://127.0.0.1:5000/reported';  // URL to web api

constructor(private http: Http) { }

getReported(): Promise<Reported[]> {
  return this.http.get(this.reportedUrl, {headers: this.headers})
             .toPromise()
             .then(response => response.json().data as Reported[])
             .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}


}
