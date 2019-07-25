import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class MensajeService {
  quoteUrl='http://quotes.stormconsultancy.co.uk/random.json';
  constructor(private http: HttpClient) { }
  getMensaje():Observable<any>{
    return this.http.get(this.quoteUrl);
  }
}
