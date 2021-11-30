import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = environment.baseUrl;
  private token = environment.gitAccessToken;
  
  constructor(private httpClient: HttpClient) { }
  
  getUsers(username: string){
    return this.httpClient.get<any[]>(`${this.baseUrl}/users/${username}?access_token=' + ${this.token}`, {
    }).toPromise()
  }
  
}
