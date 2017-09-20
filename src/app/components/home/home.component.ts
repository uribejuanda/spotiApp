import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    term = '';

    constructor( private spotifyService: SpotifyService) {
    }

    ngOnInit() {
        let param = 'metallica';
        this.spotifyService.getArtist(param).subscribe( data => {
            console.log(data);
        }, err => {
            console.error('Something went wrong! -> ' + err.error);
        });
    }

}
