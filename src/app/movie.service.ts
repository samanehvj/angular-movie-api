import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  readonly apikey = 'f8dbbb3d';
  readonly api = `https://www.omdbapi.com/?apikey=${this.apikey}&type=movie&r=json`;

  constructor(private http:HttpClient) {}

  public getMovies<T>(keyword: string): Observable<T>{
    return this.http.get<T>(`${this.api}&s=${keyword}`)
  }
  public getMovieDetail<T>(id: string): Observable<T>{
    return this.http.get<T>(`${this.api}&i=${id}`)
}
}
