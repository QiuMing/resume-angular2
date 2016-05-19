export class Resume {
    name: string;			
	nickName: string;
    email: string;
    qq: string;
    weixin: string;
	applyJob: string;
    userBaseInfo: string;  
    educationInfo: string;
    githubUrl: string;
    blogUrl: string;
    levelOfEnglish: string;
	selfIntroduction: string;
	signature: string;
	skills: skill[];
}

export class skill {
	type: string;
	name: string;
	description: string;
}


export class tech {
	name: string;
	width: number;
}

export class PersonalProject {
	projectName: string;
	time: string;
	description: string;
	image: string;   //应该是一个数组
	codeUrl: string;
	demoUrl: string;
}