import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/resume.html',
    styleUrls: ['app/style.min.css', 'app/fontello.min.css']
   
})
export class ResumeComponent  {
    items: Array<String>

    constructor() {
        this.items = [
            "Hillary Clinton",
            "Martin O'Malley",
            "Bernie Sanders"
        ]
    }
} 
