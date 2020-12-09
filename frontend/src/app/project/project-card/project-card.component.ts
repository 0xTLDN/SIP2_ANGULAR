import { Component, Input } from '@angular/core';
import { IProject } from '../IProject.interface';

@Component({
  /*Name to be called in code*/
  selector: 'app-project-card',
  /* HTML CODE */
  //template: `<h1>Test card</h1>`,
  templateUrl: 'project-card.component.html',
  /* STYLE */
  //styles: ['h1 {font-weight:normal}']
  styleUrls: ['project-card.component.css']
})
export class ProjectCardComponent {

  @Input() project : IProject

}
