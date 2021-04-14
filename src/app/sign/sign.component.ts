import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  brews:any =Object;
  constructor(private _http:HttpService) { }

  ngOnInit(): void {
    this._http.getBeer().subscribe(data =>{
      this.brews = data;
      console.log(this.brews);
    });
  }

}
