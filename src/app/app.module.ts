import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { PostPreviewTileComponent } from './PostPreviewTile/PostPreviewTile.component';
import { HeroPostComponent } from './HeroPost/HeroPost.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostPreviewTileComponent,
    HeroPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
