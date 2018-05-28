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
    "applyJob": "Java研发工程师",
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
                    "熟悉Java流行技术栈：Spring Boot、Mybatis、Shiro、Spring Data Dpa、Elasticsearch、Dubbo、Disconf、Elastic-Job 以及爬虫框架 Webmagic。",
                    "能够使用Dubbo、Zookeeper 构建微服务应用，了解 Spring Cloud 微服务技术栈，了解 RxJava，Jersey。",
                    "会用 Python 编写简单的脚本以及爬虫，辅助日常的开发工作。"
                ]
            }, {
                "name": "系统工具",
                "descriptions": [
                    "熟悉 Linux 操作，日常 Linux 办公半年，使用过腾讯云和阿里云。",
                    "熟悉 Eclipse、Idea 、Navicat Premium、Git 等工具。",
                    "熟悉 Mysql 、Redis、Mongodb。",
                    "了解 Docker 常用命令，会用Docker 构建镜像。"
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
                    "熟悉Bootstrap，能够编写简单的应用，能够驾驭常见 Bootstrap 后台模板。",
                    "使用过 Vue.js，以及 Element UI，并能够编写简单的后台应用。",
                    "了解 Yeoman 、Bower、 Grunt 、Gulp、Webpack 前端自动化工具。",
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
			"JHipster 是一个国外开源，集 JavaEE 最佳实践，以及代码生成于一体的开源项目。",
            "本人组织并参与了 JHipster 官方文档的翻译，详见：https://github.com/jhipster-cn。",
        ],
		"images": [],
		"codeUrl": "https://github.com/jhipster-cn",
		"demoUrl": ""
	},{
		"name": "知乎爬虫",
		"time": "",
		"descriptions": [
			"在校学习爬虫时编写，使用到Webmagic、Spring Boot、Redis等技术，使用Echart做数据可视化。"
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
	   "companyName": "广州市贝聊信息科技有限公司(2017.5 - 至今)",
	    "time": "",
		"project": [
            {
                "name": "支撑组基础研发工作",
                "descriptions": [
                    "参与 Api 接口、底层Dubbo服务重构，及日常版本迭代开发工作；参与服务端VPC迁移；独立负责盈利的 SaaS 业务服务端工作；负责招生小程序接口开发、运营抽奖活动接口开发；引入Spring Boot 框架，负责部分新项目后台基础框架搭建。",
                    "涉及技术栈：Spring Boot，Dubbo，Disconf，Elastic-Job，Redis，Cat ，ELK 监控等 。"
                ],
                "images": [
                    "img/cooka1.png",
                    "img/cooka3.png" 
                ],
                "codeUrl": "",
                "demoUrl": ""
            } 
        ]
	},
    {
	   "companyName": "雅特网络科技有限公司(2016.5 - 2917.5)",
	    "time": "",
		"project": [
            {
                "name": "叮叮医生 APP | 微信 | PC端后台系统维护与开发",
                "descriptions": [
                    "负责叮叮医生 App 后台系统，以及Api 接口的日常维护与版本迭代开发工作，涉及微信支付，聊天，搜索，IM 等核心模块。",
                    "涉及技术栈：Spring Boot（内部分享后，在新项目引入） 、Mybatis、Mongodb、Redis 集群、阿里云MQ和OSS、Elasticsearch、RPC 用 RMI、Quartz、环信 IM、Vue.js。"
                ]
            }
        ]
	},
	{
	   "companyName": "Cooka 网络科技有限公司(2015.1 - 2016.5)",
	    "time": "",
		"project": [
            {
                "name": "Cooka B2B跨境商场系统 PC | 微信商城服务端开发",
                "descriptions": [
                    "项目从零开始，我参与负责了系统用户、购物车、运费、权限、统计、安全中心几个模块的后台设计与开发。",
                    "涉及技术栈：Spring Boot、Mybatis、Shiro、Velocity、Redis、Fastdfs。"
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
    "专注于服务端开发 3.5年，熟悉 Java，技术功底扎实，读过 Spring 源码，喜欢开源。",
    "熟悉电商系统、App、微信后台开发，能够独立完成中小型的系统搭建，能够使用 Dubbo 搭建微服务应用，了解 Spring Cloud技术栈。",
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

