import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {ROUTER_PROVIDERS } from '@angular/router';
import {ResumeComponent} from './resume.component';
import {PrintComponent} from './print.component';
 
 
import {provide} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
enableProdMode();

bootstrap(ResumeComponent, [
	ROUTER_PROVIDERS,
	provide(APP_BASE_HREF, { useValue: '/' });
]); 