import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import {SpotifyService} from "../../service/spotifyservice";
import {Artist} from "../artist";

@Component({
    directives: [ROUTER_DIRECTIVES],
    providers: [SpotifyService],
    selector: "my-search",
    templateUrl: "./client/components/search/search.component.html"
})
export class SearchComponent {

    searchStr:string;
    searchRes: Artist[];

    constructor(private _spotifyService: SpotifyService){

    }

    searchMusic(mystr: string){
        this.searchStr = mystr;
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                return this.searchRes = res.artists.items;
            });
    }

}
