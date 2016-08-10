import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../service/spotifyservice";
import {Album} from "../album";
import {Artist} from "../artist";
import {ActivatedRoute, ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'my-artist',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './client/components/artist/artist.component.html'
})
export class ArtistComponent implements OnInit {
    id:string;
    artist: Artist[];
    albums: Album[];
    constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                    })

                this._spotifyService.getAlbums(id)
                    .subscribe(albums => {
                        this.albums = albums.items;
                    })

            })
    }

}
