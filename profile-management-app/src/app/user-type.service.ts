import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserType } from './user-type';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private baseUrl = 'http://localhost:8080/api/usertypes';

  constructor(private http: HttpClient) { }

  getUserTypesList(): Observable<UserType[]> {
    return this.http.get<UserType[]>(`${this.baseUrl}`);
  }

  getUserType(id: number): Observable<UserType> {
    return this.http.get<UserType>(`${this.baseUrl}/${id}`);
  }

  createUserType(userType: UserType): Observable<UserType> {
    return this.http.post<UserType>(this.baseUrl, userType, { responseType: 'text' as "json" });
  }

  updateUserType(id: number, userType: UserType): Observable<UserType> {
    return this.http.put<UserType>(`${this.baseUrl}/${id}`, userType);
  }

  deleteUserType(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
