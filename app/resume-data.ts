import {
	Profile,
	Skill, 
	SkillItem, 
	Tech,
	PersonalProject,
	CompanyProject,
	Aside
} from './resume';

export var PROFILE: Profile = {
    "name": "廖明",
    "email": "liaoming.lxm@gmail.com",
    "qq": "631663525",
    "weixin": "",
    "phone": "15626139118",
    "nickName": "小丘明",
    "applyJob": "java 后台开发攻城师",
    "userBaseInfo": "1993年9月23日/男/处女座",
    "educationInfo": "本科/广财大学信息学院/2016年应届生",
    "githubUrl": "https://github.com/QiuMing",
    "blogUrl": "",
    "levelOfEnglish": "CET-6",
    "selfIntroduction": "string",
    "signature": "Write the Code. Change the World."
}

export var SKILLS: Skill[] = [
    {
        "type": "后端",
        "skillItems": [
            {
                "name": "语言",
                "descriptions": [
                    "熟悉Java流行技术栈：spring-boot、mybatis、shiro、spring data jpa",
                    "使用过dubbo、active mq、zookeeper 中间",
                    "了解android 技术栈，能够完成简单app应用及其后台搭建",
                    "了解php，曾用php对国外开源电商系统cscart进行二次开发",
                    "了解 Python，使用过scrapy写过爬虫"
                ]
            }, {
                "name": "系统工具",
                "descriptions": [
                    "熟悉Linux 及 服务器环境搭建部署，使用过阿里云，会使用nginx、apache",
                    "熟悉eclipse、idea 、Navicat Premium、git 、sublime 等工具 "
                ]
            }
        ]
    }, {
        "type": "Web前端",
        "skillItems": [
            {
                "name": "HTML / CSS / JS",
                "descriptions": [
                    "能够编写语义化的 HTML，模块化的 CSS，完成较简单的布局",
                    "熟悉bootstrap，能够使用它编写简单的应用",
                    "会使用AngularJS2.0,并能够使用它们编写简单的应用",
                    "了解 Yeoman 、Bower、 Grunt 、Gulp、webpack 前端自动化工具",
                ]
            }  
        ]
    }
]

export var TECHS: Tech[] = [
    {
        "name": "Java",
        "width": 80
    }, {
        "name": "php",
        "width": 60
    }, {
        "name": "python",
        "width": 50
    }, {
        "name": "TypeScript",
        "width": 40
    }
]

export var PERSONALPROJECTS: PersonalProject[] = [
    {
		"name": "知乎爬虫",
		"time": "",
		"descriptions": [
			"空闲时学习爬虫编写，使用到webmagic、spring-boot、redis 等技术，使用echart做数据可视化"
		],
		"images": [
			"img/zhihu2.png",
		],
		"codeUrl": "https://github.com/QiuMing/zhihuWebSpider",
		"demoUrl": ""
	}, {
		"name": "晨曦androi app 应用",
		"time": "",
		"descriptions": [
			"一款以关注私人健康为目标的app，一个学校团队的合作项目，涵盖登陆注册、带三方登陆、新 闻资讯、计步器等功能模块，使用jwt进行身份认证与数据传输"
		],
		"images": [
			"img/chenxi.png",
		],
		"codeUrl": "https://github.com/QiuMing/ChenXi",
		"demoUrl": ""
	}, {
		"name": "java 屏幕监控软件",
		"time": "",
		"descriptions": [
			"一款局域网内屏幕监控软件，分为客户端和服务端，服务端可以监控多个客户端，实现了远程控制、文件发送、举手提问等功能"
		],
		"images": [
			"img/pmjk.png",
		],
		"codeUrl": "",
		"demoUrl": ""
	}, {
		"name": "jee-boot-site",
		"time": "",
		"descriptions": [
			"个人发起的一个jee开源项目，和网友在维护，计划boot话jeesite 项目，使用spring-boot、thymeleaf、bower 等技术"],
		"images": [],
		"codeUrl": "https://github.com/jee-boot-site/jee-boot-site",
		"demoUrl": ""
	}
]

export var COMPANYPROJECT: CompanyProject[] = [
	{
		"companyName": "cooka 网络科技有限公司(2015.1 - 2016.5.19)",
	    "time": "",
		"project": [
            {
                "name": "cooka商场系统",
                "descriptions": [
                    "一个B2B跨境电商项目，涵了pc端，移动web app ，微信商场",
                    "我全程参与负责了系统用户、购物车、风控、运费、权限、统计、安全中心几个模块的后台设计与开发",
                    "主要用到spring boot、mybatis、shiro、velocity、fastdfs、solr、kafaka、reactjs等技术"
                ],
                "images": [
                    "img/cooka1.png",
                    "img/cooka3.png" 
                ],
                "codeUrl": "",
                "demoUrl": "",
            } 
        ]
	}
]

export var MAINDES: string[] = [
    "目前的我，有信心亦有能力完成一个中小型系统的架构与实现"，
    "如果我是你正在要寻找的人，如果你希望与我共事，那就快把我找到碗里去吧^_^"，
    "如果想和我有进一步沟通，那就动手描二维码加微信吧"
]

export var OTHERDES: string[] = [
    "踏实、稳重、积极、进取，我是新时代优秀攻城狮",
    "爱小丘，爱coding，爱生活，爱开源，技术控、伪全栈",
    "梦想着成为一个架构师，目前在努力加深拓宽自己的技术栈",
    "热爱运动，喜欢羽毛球，关注健康",
]

export var ASIDE: Aside[] = [
	{
		"name": "源代码",
		"url": "https://github.com/DIYgod/Resume"
	}, {
		"name": "PDF 下载",
		"url": "[routerLink]="['Dashboard']
	}, {
		"name": "打印版预览",
		"url": "string"
	}, {
		"name": "github",
		"url": "https://github.com/QiuMing"
	}
]


