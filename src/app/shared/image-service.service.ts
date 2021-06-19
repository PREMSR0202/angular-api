import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  private API_KEY: string = environment.PEXELS_API_KEY;
  private API_URL: string = environment.PEXELS_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';

  constructor(private http: HttpClient) { }

  getData(search:string):Observable<any>{
    return this.http.get(this.URL + search)
  }

}
