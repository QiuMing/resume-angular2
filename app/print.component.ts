import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS}  from '@angular/router';
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
    selector: 'print-app',
    templateUrl: 'app/print.html',
    styleUrls: ['app/print.css', 'app/fontello.css']
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
