import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS}  from '@angular/router';

import {PrintComponent} from './print.component';
import { 
    PROFILE,
    SKILLS,
    TECHS,
    PERSONALPROJECTS,
    COMPANYPROJECT,
    MAINDES,
    OTHERDES,
    ASIDE  
} from './resume-data';

@Component({
    selector: 'my-app',
    templateUrl: 'app/resume.html',
    styleUrls: ['app/style.css', 'app/fontello.css'] ,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS 
    ]
})
@Routes([
{
    path: '/dashboard',
    component: PrintComponent,  
}
])
export class ResumeComponent  {
    profile = PROFILE;
    techs = TECHS;
    otherDes = OTHERDES;
    mainDes = MAINDES;
    skills = SKILLS;
    aside = ASIDE;
    personalProjects = PERSONALPROJECTS;  
    companyProjects = COMPANYPROJECT;
}

