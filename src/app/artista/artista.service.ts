import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ArtistService {
  API_URL: String;
  httpOptions: any = {};

  constructor(private http: HttpClient) {
    this.API_URL = `${environment.host}/${environment.api}`;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.token}`
      })
    };
  }
  buscarArtistas(token: string) {
    // now returns an Observable of Config
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    //return this.http.get<any[]>(`${this.API_URL}/new-releases/${search}`, this.httpOptions);
    return this.http.get<any[]>(`${this.API_URL}/browse/new-releases/`, this.httpOptions);
  }
  /*getPropertysLimit(search: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/propertys/${search}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }*/
  buscarArtista(search: string){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
      })
    };
    return this.http.get<any[]>(`${this.API_URL}/artists/${search}`, this.httpOptions);
  }

  buscarAlbum(search: string){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
      })
    };
    return this.http.get<any[]>(`https://api.spotify.com/v1/artists/${search}/top-tracks?country=SE`, this.httpOptions);
  }
  

}
