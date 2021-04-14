import { Course } from './course';
import { COURSES } from './mock-courses';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import { MessageService } from './message.service'


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private http:HttpClient,private messageService :MessageService) { }
  getBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }

  getCoures():Observable<Course[]>{
    this.messageService.add('HttpService fatch courses details');
    return of (COURSES) ;
  }
}
