import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from '../user';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  user:User 

 

  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
      name:string;
      
    }
    this.http.get<ApiResponse>('https://api.github.com/users/daneden').subscribe(data=>{
      this.user = new User(data.name)
    })
  }

}
