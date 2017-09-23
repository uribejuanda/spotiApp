import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

    artists: any = [];
    urlBase = 'https://api.spotify.com/v1/';
    private authToken = 'BQDo4xaHXfgrtHs7Kcjji75vDJ7Suqfg6Sb-3TxjMCpajPL7tmAq_LnZE0AREBVnIkiQ00oIRDvkCAXZ75VjcZsJc4OVBrd-peP97u_xo2KOZWbJGCeT97eUuvWwcJ8Acv7AYwLRh8HLLMxA';

    constructor( private http: HttpClient) {
    }

    getArtists(query: string, itemType: string = 'artist') {
        const headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authToken});
        const querySearch = this.urlBase + `search?q=${query}&type=${itemType}`;
        return this.http.get(querySearch, { headers })
            .map(res => {
                this.artists = res['artists'].items;
                return this.artists;
            });
    }

    getArtist(artistId: string) {
        const headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authToken});
        const url = this.urlBase + `artists/${artistId}`;
        return this.http.get(url, { headers })
            .map(res => {
                console.log(res);
                return res;
            });
    }

    getArtistTopTracks(artistId: string, country: string = 'US') {
        const headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authToken});
        const url = this.urlBase + `artists/${artistId}/top-tracks?country=${country}`;
        return this.http.get(url, { headers })
            .map(res => {
                console.log(res);
                return res;
            });
    }
}
