import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { IProject } from '../IProject.interface';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  /* Array of object named project */
  /* Any is the type that accept everything */
  projectsArray: Array<IProject>;

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(
      data => {
        this.projectsArray = data;
      }, error => {
        console.log(error);
      }
    )
  }

}
