export interface Skill {
    name: string;
    icon: string;
    level: number; // 1-5
    category: 'frontend' | 'backend' | 'design' | 'other';
}