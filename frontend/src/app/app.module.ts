import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ProjectCardComponent } from './project/project-card/project-card.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { NavBarComponent } from './project/nav-bar/nav-bar.component';
import { ProjectService } from './services/project.service';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { DetailsProjectComponent } from './project/details-project/details-project.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';





/* Maps routes with their component */
const appRoutes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'add-worker', component: AddProjectComponent },
  { path: 'details-project/:id', component: DetailsProjectComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  // Error path
  { path: '**', component: ProjectListComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProjectListComponent,
    NavBarComponent,
    AddProjectComponent,
    DetailsProjectComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
    ProjectService,
    UserService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
