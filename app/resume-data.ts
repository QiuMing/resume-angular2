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
    "name": "xqMing",
    "email": "liaoming.lxm@gmail.com",
    "qq": "631663525",
    "weixin": "",
    "nickName": "小丘明",
    "applyJob": "java 后台开发攻城师",
    "userBaseInfo": "1993年9月23日/男/处女座",
    "educationInfo": "本科/广东财经大学信息学院/2016年应届生",
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
                    "熟悉Java及现今其流行技术栈：spring - boot、spring mvc 、mybatis、shiro、spring data jpa使用过dubbo、active mq、zookeeper <",
                    "熟悉android 技术栈，能够完成简单app应用机器后台搭建",
                    "了解php，曾用php对国外开源电商系统cscart进行二次开发",
                    "了解 Python，使用过scrapy爬虫框架编写爬虫"
                ]
            }, {
                "name": "环境",
                "descriptions": [
                    "熟悉Linux 开发环境、 Linux 服务器环境搭建部署，两年 Linux 日常使用经验",
                    "了解 Apache Nginx web服务器，一年多建站经验"
                ]
            }
        ]
    }, {
        "type": "Web前端",
        "skillItems": [
            {
                "name": "HTML / CSS",
                "descriptions": [
                    "能够编写语义化的 HTML，模块化的 CSS，完成较复杂的布局",
                    "了解 Less / Sass  等CSS预处理和后处理方法、工具"
                ]
            }, {
                "name": "JavaScript",
                "descriptions": [
                    "熟悉原生Javascript，能脱离jQuery等类库编码",
                    "能运用模块化、面向对象的方式编程",
                    "了解 RequireJS jQuery AngularJS 的使用"
                ]
            }, {
                "name": "其它",
                "descriptions": [
                    "了解 Yeoman Bower Grunt Gulp 前端自动化工具",
                    "了解前端安全、性能优化方面的一些知识 ",
                    "熟悉 Git ",
                    "能够熟练使用 Markdown 进行写作"
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
        "name": "C",
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
			"空闲时为学习爬虫时所编写，使用到webmagic、spring-boot、百度echart、redis 等技术，做的数据抓取并且 用图表可视化显示"
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
			"一款以关注私人健康为目标的app，一个学校团队的合作项目，团队唯一编码人，涵盖登陆注册、带三方登陆、新 闻资讯、计步器等功能模块，使用jwt进行身份认证与数据传输"
		],
		"images": [
			"img/chenxi.png",
		],
		"codeUrl": "https://github.com/QiuMing/ChenXi",
		"demoUrl": ""
	}, {
		"name": "java 远程监控软件",
		"time": "",
		"descriptions": [
			"这是一个有趣的java GUI 软件，是大学期间模拟实验室屏幕监控软件所做。分为客户端和服务端，服务端可以监控多个客户端，并实现了远程控制、文件发送、举手提问等功能"
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
			"近期个人发起的一个jee开源项目，和网友在维护，计划boot话jeesite 项目，使用spring-boot、thymeleaf、bower 等技术"],
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
                    "这是我和小伙伴从零开始的项目，去年完成了cooka 跨境电商项目(B2B项目)，之后，在此商城的基础上，开发了移动web app ，微信商场应用",
                    "我全程负责了系统用户模块、购物车模块、风控模块、运费模块、权限模块、统计模块、安全中心模块的后台设计与开发。主要用到spring boot、mybatis、shiro、velocity等技术。",
                    "对于系统用到的其它技术，如搜索用到的spring-data-solr，分布式文件系统FastDFS，也有所了解",
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
    "从创业公司走出来，我经历了一个从零到真正上线的电商项目我了解其运作模式，亦熟悉其系统架构",
    "我酷爱技术,热衷开源,有能力架构并完成一个中小型系统的搭建"，
    "我目前正在寻找后端开发工程师岗位，希望借此机会为贵司献上我的一点绵薄之力，快招我到碗里来吧！"
]

export var OTHERDES: string[] = [
    "踏实、稳重型攻城狮，爱小丘，爱coding，爱生活",
    "梦想着成为一个架构师，目前在努力加深拓宽自己的技术栈",
    "热爱运动，喜欢羽毛球",
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
		"url": "https://www.github.com/DIYgod"
	}
]


