import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Api {

  private readonly URL = 'http://localhost:3000/';

  constructor(public http: Http) {}

  public get(url_path: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url_path))
      .map((response: Response) => response.json());
  }

  public post(url_path: string = '', data: any = {}): Observable<any> {
    return this.http.post(this.getUrl(url_path), data)
      .map((response: Response) => response.json());
  }

  public put(url_path: string = '', data: any = {}): Observable<any> {
    return this.http.put(this.getUrl(url_path), data)
      .map((response: Response) => response.json());
  }

  public delete(url_path: string = ''): Observable<any> {
    return this.http.delete(this.getUrl(url_path))
      .map((response: Response) => response.json());
  }

  private getUrl(url_path: string = ''): string {
    return this.URL + url_path;
  }

}
