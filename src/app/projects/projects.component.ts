import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../services/search/search.service';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  username: string = 'daneden'

  repositories: any[] = [];

  constructor(private searchService: SearchService, private http:HttpClient) { }
  getPublicRepositories(){
    this.searchService.getUsers(this.username).subscribe((response:any)=> {
      //console.log(response)
      this.repositories = response;
    })
  }
  ngOnInit() {
    this.getPublicRepositories();
  }

}
