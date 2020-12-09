import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent implements OnInit {

  public projectId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //Both way to convert string to number
    //this.projectId = Number(this.route.snapshot.params['id']);
    this.projectId = +this.route.snapshot.params['id'];

    // Subscribe is used to call the function when the parameter of the route is being change (see navigation buttons)
    // This is used to reload the component since Angular does not reload the component if we are already in.
    this.route.params.subscribe(
      (params) => {
        this.projectId = +params['id'];
      }
    )
  }

  onNextProject() {
    this.projectId += 1;
    this.router.navigate(['details-project', this.projectId])
  }

}
