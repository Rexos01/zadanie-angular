import { UserModel } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserResponseModel } from 'src/app/models/user-response.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public getUsers(): Observable<UserModel[]> {
    const url = 'https://reqres.in/api/users';
    return this.http.get<UserResponseModel>(url).pipe(
      map(result => {
        return result.data;
      })
    );
  }

  public editUser(user: UserModel): Observable<any> {
    const url = 'https://reqres.in/api/users/' + user.id;
    return this.http.put(url, { name: user.first_name, job: user.last_name });
  }

  public addUser(user: UserModel): Observable<any> {
    const url = 'https://reqres.in/api/users';
    return this.http.post(url, { name: user.first_name, job: user.last_name });
  }

  public deleteUser(user: UserModel): Observable<null> {
    const url = 'https://reqres.in/api/users' + user.id;
    return this.http.delete<null>(url);
  }
}
