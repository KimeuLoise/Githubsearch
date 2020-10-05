import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent,
    SearchFormComponent,
    UserDetailsComponent,
    UserReposComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
