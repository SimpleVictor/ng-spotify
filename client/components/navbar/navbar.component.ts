import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "my-navbar",
    templateUrl: "./client/components/navbar/navbar.component.html"
})
export class NavbarComponent {}
