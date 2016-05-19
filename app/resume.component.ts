import {Component} from '@angular/core';
import { Resume } from './resume';
@Component({
    selector: 'my-app',
    templateUrl: 'app/resume.html',
    styleUrls: ['app/style.min.css', 'app/fontello.min.css']
   
})
export class ResumeComponent  {
    data = DATA;
    techs = TECHS;
    otherDes = OTHERDES;

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

var OTHERDES: string[] = [
    "是一个有趣的人，博客日均浏览量 1000+，GitHub Followers 550+，微博粉丝 780+，微信公众号关注用户 460+",
    "严重强迫症，不能忍受界面一个像素的偏差，同样不能忍受代码格式一个空格的偏差",
    "学习能力强，以上绝大多数的技能都是大三转专业之后自学修得的 ",
    "掌握 Vim Git 等开发工具的使用",
    "能够熟练使用 Markdown 进行写作",
]