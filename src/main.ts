import "@angular/compiler";
import "zone.js";
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgZone} from "@angular/core";
import {appRouting} from "./app.routing";

import './styles.scss'

bootstrapApplication(AppComponent, {
    providers: [
        {
            provide: NgZone,
            useValue: new NgZone({ shouldCoalesceEventChangeDetection: false })
        },
        ...appRouting
    ]
});