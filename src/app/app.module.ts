import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Routes
import { APP_ROUTING } from './app.routes';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SpotifyService } from './services/spotify.service';
import { NoimagePipe } from './pipes/noimage.pipe';
import { ArtistComponent } from './components/artist/artist.component';
import { SecureDomPipe } from './pipes/secure-dom.pipe';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        NavbarComponent,
        CarouselComponent,
        NoimagePipe,
        ArtistComponent,
        SecureDomPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        APP_ROUTING
    ],
    providers: [
        SpotifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
