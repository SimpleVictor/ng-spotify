import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "my-about",
    templateUrl: "./client/components/about/about.component.html"
})
export class AboutComponent {}
