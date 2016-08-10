import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {SpotifyService} from "../../service/spotifyservice";
import {Album} from "../album";

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "my-album",
    templateUrl: "./client/components/album/album.component.html"
})
export class AlbumComponent implements OnInit{
    id:string;
    album: Album[];
    constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    })
            })
    }

}
