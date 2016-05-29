import {Component} from '@angular/core';
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
    templateUrl: 'app/print.html',
    styleUrls: ['app/print.css', 'app/fontello.min.css']
   
})
export class PrintComponent {
    profile = PROFILE;
    techs = TECHS;
    otherDes = OTHERDES;
    mainDes = MAINDES;
    skills = SKILLS;
    aside = ASIDE;
    personalProjects = PERSONALPROJECTS;
    companyProjects = COMPANYPROJECT;
}
