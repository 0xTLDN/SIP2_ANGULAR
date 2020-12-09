import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { IProject } from '../project/IProject.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getAllProject(): Observable<IProject[]> {
    return this.http.get("data/projects.json").pipe(
      map(data => {
        const propertiesArray: Array<IProject> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            propertiesArray.push(data[id]);
           }
        }
        return propertiesArray;
      })
    );
  }
}
