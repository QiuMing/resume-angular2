import {Component} from '@angular/core';
import { Resume } from './resume';

@Component({
    selector: 'my-app',
    templateUrl: 'app/print.html',
    styleUrls: ['app/print.min.css', 'app/fontello.min.css']
   
})
export class PrintComponent {
    data = DATA;
    techs = TECHS;
    otherDes = OTHERDES;
    mainDes = MAINDES;
}


var DATA: Resume = {
    "name": "xqMing",           
    "email": "liaoming.lxm@gmail.com",
    "qq": "631663525",
    "weixin": "",
    "nickName": "小丘明",
    "applyJob": "web 前端工程师",
    "userBaseInfo": "1993年9月23日/男/处女座",  
    "educationInfo": "本科/广东财经大学信息学院/2016年应届生",
    "githubUrl": "https://github.com/QiuMing",
    "blogUrl":"",
    "levelOfEnglish": "CET-6",
    "selfIntroduction": "string",
    "signature": "Write the Code. Change the World.",
    "skills":[
        {
            "name": "string",
            "type": "string",
            "description"
             : "string"
        }
    ]
}

var TECHS: tech[] = [
    {
        "name": "Java",
        "width": 80
    },{
        "name": "C",
        "width": 60
    },{
        "name": "python",
        "width": 50
    },{
        "name": "TypeScript",
        "width": 40
    }
]

var MAINDES: string[]=[
    "从创业公司走出来，我经历了一个从零到真正上线的电商项目。我了解其运作模式，亦熟悉其系统架构",
    "我酷爱技术,热衷开源,有能力架构并完成一个中小型系统的搭建。"，
    "我目前正在寻找后端开发工程师岗位，希望借此机会为贵司献上我的一点绵薄之力，快招我到碗里来吧！"
]

var OTHERDES: string[] = [
    "梦想着成为一个架构师，目前在努力拓宽自己的技术栈，却又苦于技术不能够深入",
    "热爱运动，喜欢羽毛球",
    "掌握 Vim Git 等开发工具的使用",
    "能够熟练使用 Markdown 进行写作",
]