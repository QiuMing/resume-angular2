import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {ROUTER_PROVIDERS } from '@angular/router';
import {AppComponent} from './app';
import {provide} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
enableProdMode();

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	provide(APP_BASE_HREF, { useValue: '/' })
]); 