import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

    artists: any = [];
    urlSpotify = 'https://api.spotify.com/v1/search';
    private authToken = 'BQCCl5S_sH3rII-8mmWF7DDiScEVMNEe7T2Re-MQbHF3vckbDU4PtG4jbJX1rlzr7jKXkl-mZHjg5AYSB_OMOSTUkEw69XtZ9XtKDX__54dc_hMASOePoySY2FADmeA5sO0hQZYCgF-Bgoko';

    constructor( private http: HttpClient) {
    }

    getArtist(query: string, itemType: string = 'artist') {
        const headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authToken});
        const querySearch = this.urlSpotify + `?q=${query}&type=${itemType}`;
        return this.http.get(querySearch, { headers })
            .map(res => {
                this.artists = res['artists'].items;
                return this.artists;
            });
    }
}
