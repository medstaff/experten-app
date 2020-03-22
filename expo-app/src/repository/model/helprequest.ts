interface HelpRequest {
    id: number;
    name: string;
    created_at: string;
    date_start: string;
    roles: Skill[];
    skills: Skill[];
    helpers: Helper[];
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

