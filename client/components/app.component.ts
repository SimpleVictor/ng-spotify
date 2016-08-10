import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {AboutComponent} from "./about/about.component";
import {SearchComponent} from "./search/search.component";
import {AlbumComponent} from "./album/album.component";

@Component({
    directives: [ROUTER_DIRECTIVES, NavbarComponent],
    selector: "app",
    templateUrl: "./client/components/app.component.html",
    precompile: [SearchComponent, AboutComponent, AlbumComponent]
})
export class AppComponent {}
