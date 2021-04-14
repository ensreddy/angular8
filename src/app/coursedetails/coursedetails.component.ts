import { Course } from './../course';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  @Input() course:Course;
  constructor() { }

  ngOnInit(): void {
  }

}
