import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event/event.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayerComponent } from './player/player.component';
import { ProfileComponent } from './profile/profile.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './login/login.component'; // added this and signup routes\
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'profile/:id', component: ProfileComponent },
  { path: 'profile/:id/favourites', component: FavouritesComponent },
  { path: 'player/:id', component: PlayerComponent },
  { path: 'team/:id', component: TeamComponent },
  { path: 'event/:id', component: EventComponent },
  { path: 'match/:id', component: MatchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'team_list', component: TeamListComponent },
  { path: 'event_list', component: EventListComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
