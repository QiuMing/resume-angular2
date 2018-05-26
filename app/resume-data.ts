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
    "email": "631663525@qq.com",
    "qq": "",
    "weixin": "",
    "phone": "15626139118",
    "nickName": "xqMing",
    "applyJob": "java开发工程师",
    "userBaseInfo": "1993年9月23日/男",
    "educationInfo": "本科/广财大学信息学院/2016年毕业",
    "githubUrl": "https://github.com/QiuMing",
    "blogUrl": "",
    "levelOfEnglish": "CET-6",
    "selfIntroduction": "string",
    "signature": "Write the Code. Change the World.",
    "pcResume": "http://www.lming.xyz/",
    "mobileResume":"",
}

export var SKILLS: Skill[] = [
    {
        "type": "服务端",
        "skillItems": [
            {
                "name": "语言",
                "descriptions": [
                    "熟悉Java流行技术栈：spring-boot、mybatis、shiro、spring data jpa、elasticsearch， dubbo 框架，分布式配置 disconf，分布式作业 elastic job，java 爬虫框架 webmagic。",
                    "能够使用过dubbo、zookeeper 搭建 SOA 应用。",
                    "了解 Spring Cloud 微服务技术栈，了解 RxJava，jersey。"
                ]
            }, {
                "name": "系统工具",
                "descriptions": [
                    "熟悉 Linux 操作，日常 Linux 办公半年，使用过腾讯|阿里云。",
                    "熟悉 eclipse、idea 、Navicat Premium、git 等工具。",
                    "熟悉 mysql 、redis、mongodb。",
                    "了解 docker 常用命令，可以使用docker 构建发布镜像。"
                ]
            } 
        ]
    }, {
        "type": "Web前端",
        "skillItems": [
            {
                "name": "HTML / CSS / JS",
                "descriptions": [
                    "能够编写语义化的 HTML，模块化的 CSS，完成较简单的布局。",
                    "熟悉bootstrap，能够使用它编写简单的应用，能够驾驭常见 bootstrap 后台模板。",
                    "会使用 vuejs,并能够使用它们编写简单的应用。",
                    "了解 Yeoman 、Bower、 Grunt 、Gulp、webpack 前端自动化工具。",
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
		"name": "JHipster 中文文档翻译与维护",
		"time": "",
		"descriptions": [
			"JHipster 是一个国外开源，集 JavaEE 最佳实践与代码生成于一体到开源项目。",
            "本人组织并参与了 JHipster 官方文档到翻译，详见：https://github.com/jhipster-cn。",
        ],
		"images": [],
		"codeUrl": "https://github.com/jhipster-cn",
		"demoUrl": ""
	},{
		"name": "知乎爬虫",
		"time": "",
		"descriptions": [
			"大学时学习爬虫编写，使用到webmagic、spring-boot、redis 等技术，使用echart做数据可视化。"
		],
		"images": [
			"img/zhihu2.png",
		],
		"codeUrl": "https://github.com/QiuMing/zhihuWebSpider",
		"demoUrl": ""
	}
]

export var COMPANYPROJECT: CompanyProject[] = [
	{
	   "companyName": "cooka 网络科技有限公司(2015.1 - 2016.5)",
	    "time": "",
		"project": [
            {
                "name": "cooka B2B跨境商场系统 PC | 微信 商城服务端开发",
                "descriptions": [
                    "全程参与负责了系统用户、购物车、风控、运费、权限、统计、安全中心几个模块的后台设计与开发。",
                    "涉及技术栈：spring boot、mybatis、shiro、velocity、redis、fastdfs。"
                ],
                "images": [
                    "img/cooka1.png",
                    "img/cooka3.png" 
                ],
                "codeUrl": "",
                "demoUrl": ""
            } 
        ]
	},{
	   "companyName": "雅特网络科技有限公司(2016.5 - 2917.5)",
	    "time": "",
		"project": [
            {
                "name": "叮叮医生 APP | 微信 | PC端 后台系统维护与开发",
                "descriptions": [
                    "负责系统的日常维护，新版本迭代开发，涉及微信支付，聊天，搜索等模块。",
                    "涉及技术栈：spring boot（在内部分享后，在新项目引入） 、mybatis、mongodb、redis 集群、阿里云mq 和 oss、elasticsearch、rpc 用 rmi、Quartz、环信 IM、vue.js。"
                ]
            }
        ]
	},{
	   "companyName": "广州市贝聊信息科技有限公司(2017.5 - 至今)",
	    "time": "",
		"project": [
            {
                "name": "支撑组基础研发工作",
                "descriptions": [
                    "参与 app 端接口重构，日常功能迭代开发工作；独立负责服务端 SaaS 核心业务工作；负责招生小程序接口开发、运营抽奖活动接口开发。",
                    "涉及技术栈：spring-boot（在内部分享后，在新项目引入） ，dubbo，disconf，elastic-job，redis，cat ,elk 等 。"
                ],
                "images": [
                    "img/cooka1.png",
                    "img/cooka3.png" 
                ],
                "codeUrl": "",
                "demoUrl": ""
            } 
        ]
	}
]

export var MAINDES: string[] = [
    "专注于服务端开发 3.5年，熟悉 java，爱折腾，爱开源。",
    "熟悉电商系统、app、微信后台开发,，能够独立完成中小型到系统应用架构，能够使用 dubbo 搭建 SOA 架构应用，了解 Spring Cloud 微服务技术栈"。,
    "未来想成为一个架构师，目前在努力加深拓宽自己的技术栈，渴望结识更多志同道合到人。",
]

export var OTHERDES: string[] = [
    "踏实、稳重、积极、进取，我是新时代优秀攻城狮。",
    "爱coding，爱生活，爱开源，技术控、伪全栈。",
    "梦想着成为一个架构师，目前在努力加深拓宽自己的技术栈。",
    "热爱运动，喜欢羽毛球，关注健康。",
]

export var ASIDE: Aside[] = [
	{
		"name": "源代码",
        "url": "https://github.com/QiuMing/resume-angular2"
	}, {
        "name": "PDF 下载",
		"url": "廖明-java后台开发工程师.pdf"
	}, {
		"name": "github",
		"url": "https://github.com/QiuMing"
	}
]

