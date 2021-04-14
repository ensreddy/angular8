import { HttpService } from './../http.service';
import { COURSES } from '../mock-courses';
import { Component, OnInit } from '@angular/core';
import {Course} from '../course';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  clcikcounter: number=0;
  name: string ;

courses:Course[];
selectedCourse:Course;

onSelect(course:Course):void{
  this.selectedCourse=course;
}
  

  constructor(private courseService:HttpService) { }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses():void{
    this.courseService.getCoures().subscribe(courses=>this.courses=courses)
  }

  countClick(){
    this.clcikcounter += 1;
  }

  menuscount(){
    this.clcikcounter -= 1;
  }
  setClasses(){
    let myclass ={
      active : this.clcikcounter > 4,
      nonactive : this.clcikcounter <= 4,
    }
 return myclass;
  }
}
