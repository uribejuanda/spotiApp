import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    public term = '';
    public artists: any = [];

    constructor( public spotifyService: SpotifyService ) {
    }

    ngOnInit() {
    }

    search() {
        if (this.term) {
            this.spotifyService.getArtists(this.term).subscribe( data => {
                console.log(data);
                this.artists = data;
            }, err => {
                console.error('Something went wrong! -> ' + err.error);
            });
        } else {
            this.artists = [];
        }

    }

}
