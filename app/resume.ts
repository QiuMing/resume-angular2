export class Profile {
    name: string;			
	nickName: string;
    email: string;
    qq: string;
    weixin: string;
    phone: string;
	applyJob: string;
    userBaseInfo: string;  
    educationInfo: string;
    githubUrl: string;
    blogUrl: string;
    levelOfEnglish: string;
	selfIntroduction: string;
	signature: string;
}

export class Skill {
	type: string;
	skillItems: SkillItem[];
}

export class SkillItem {
	name: string;
	descriptions: string[];
}


export class Tech {
	name: string;
	width: number;
}


export class PersonalProject {
	name: string;
	time: string;
	descriptions: string[];
	images: string[];    
	codeUrl: string;
	demoUrl: string;
}

export class CompanyProject {
	companyName: string;
	time: string;
	project: Project[];
}

export class Experience {
	name: string;
	time: string;
	project: Project[];
}

export class Project {
	name: string;
	descriptions: string[];
	images: string[];
	codeUrl: string;
	demoUrl: string;
}

export class Aside{
	name: string;
	url: string;
}