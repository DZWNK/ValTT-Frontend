import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { EventComponent } from './event/event.component';
import { MatchComponent } from './match/match.component';
import { TeamListComponent } from './team-list/team-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    FavouritesComponent,
    PlayerComponent,
    TeamComponent,
    EventComponent,
    MatchComponent,
    TeamListComponent,
    EventListComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
