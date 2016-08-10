/// <reference path="../typings/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Type, enableProdMode } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

enableProdMode();

import { AppComponent } from "./components/app.component";
import { APP_ROUTER_PROVIDERS } from "./routes";
import {provideForms, disableDeprecatedForms} from "@angular/forms";
import {SpotifyService} from "./service/spotifyservice";

bootstrap(<Type>AppComponent, [
	APP_ROUTER_PROVIDERS,
	disableDeprecatedForms(),
	SpotifyService,
	provideForms,

	HTTP_PROVIDERS
]);
