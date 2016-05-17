export class resume {
    name: string;			

    email: string;
    qq: string;
    weixin: string;

	applyJob: string;

    userBaseInfo: string;    //  1993年9月23日 / 处女座  / 处女座
    gitHubUrl: string;
    levelOfEnglish: string;
	selfIntroduction: string;
	signature: string;
}

export class skill{
	type: string;
	name: string;
	description: string;
}
export class tech{
	name: string;
	witth: string;
}

export class PersonalProject{
	projectName: string;
	time: string;
	description: string;
	image: string;   //应该是一个数组
	codeUrl: string;
	demoUrl: string;
}