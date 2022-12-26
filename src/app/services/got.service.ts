import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GotService {
  getCharacters() {
    throw new Error('Method not implemented.');
  }

  urlAPI = 'https://thronesapi.com/api/v2/Characters';

  constructor(private http:HttpClient) { }

  
    getGot():Observable<any>{
      return this.http.get(this.urlAPI);
    }
   
}
