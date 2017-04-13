import {Component, ViewEncapsulation}  from '@angular/core'; 
import {
    Routes,
    ROUTER_DIRECTIVES
} from '@angular/router';
import {PrintComponent} from './print.component';
import {ResumeComponent} from './resume.component';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
 @Routes([
    { path: '/', component: PrintComponent } 
])
export class AppComponent { }
