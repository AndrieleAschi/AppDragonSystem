import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Dragon } from '../dragons/dragon';
import { ErrorService } from './error.service';
import { Dragons } from 'src/app/dragons/dragons';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  private dragonsApiUrl = 'https://dragons-api.herokuapp.com/api/dragons';

  getDragons(): Observable<Dragons> {
    return this.http.get<Dragons>(this.dragonsApiUrl + '?page=2&size=200').pipe(
      map( result => {
        const sortedItems = result.items.sort(this.nameCompare);
        result.items = result.items.sort(this.nameCompare);
        return result; }),
      catchError(this.handleError('getDragons', new Dragons())),
    );
  }

  getDragon(dragon: Dragon | string): Observable<Dragon> {
    const slug = typeof dragon === 'string' ? dragon : dragon.slug;
    return this.http.get<Dragon>(this.dragonsApiUrl + '/' + slug).pipe(
      catchError(this.handleError('getDragon', new Dragon()))
    );
  }

  addDragon (dragon: Dragon): Observable<Dragon> {
    return this.http.post<Dragon>(this.dragonsApiUrl, dragon, httpOptions).pipe(
      catchError(this.handleError<Dragon>('addDragon'))
    );
  }

  deleteDragon (dragon: Dragon | string): Observable<boolean> {
    const slug = typeof dragon === 'string' ? dragon : dragon.slug;
    const url = `${this.dragonsApiUrl}/${slug}`;

    return this.http.delete<boolean>(url, httpOptions).pipe(
      catchError(this.handleError<boolean>('deleteDragon'))
    );
  }

  updateDragon (dragon: Dragon): Observable<Dragon> {
    const url = `${this.dragonsApiUrl}/${dragon.slug}`;

    return this.http.put<Dragon>(url, dragon, httpOptions).pipe(
      catchError(this.handleError<Dragon>('deleteDragon'))
    );
  }

  private nameCompare(a: Dragon, b: Dragon) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      console.error(error); 

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(error: string) {
    this.errorService.add('Ocorreu um erro! Tente novamente ...');
  }

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }
}
