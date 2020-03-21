interface HelpRequest {
    id: string;
    name: string;
    // required skills, location etc...
}

interface Skill {
    id: number;
    name: string;
}

interface AvailableSkill {
    skill: Skill;
    count: number;
}

interface HelpRequestHelpers {
    count: number;
    skills: AvailableSkill[];
}

