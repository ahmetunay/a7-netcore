import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { log } from './log.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit { 
  users$:log[];
  data:string;
  posData:log;
  
  constructor(private dataService:DataService){}
ngOnInit(){
  
  return this.dataService.getlogs().subscribe(data=>this.users$=data);
  }

addPost() {
  this.posData = new log();
  this.posData.message = "test mesaj";
  this.dataService.addPostService(this.posData)
    .subscribe(data => {
      console.log(data)
    })      
}

}
