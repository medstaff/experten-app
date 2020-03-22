interface HelpRequest {
    id: number;
    name: string;
    roles: Skill[];
    skills: Skill[];
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

