import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any>('https://randomuser.me/api/?results=20')
      .pipe(
        tap(data => data),
        catchError(err => err)
      );
  }
}
