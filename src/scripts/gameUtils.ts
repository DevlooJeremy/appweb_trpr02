export enum PlayerActions {FIGHT, RETREAT, REPARE, WAIT}

export function getRankWithExperience(experience:number) {
    switch (experience) {
        case 1:
            return "Débutant"
        case 2:
            return "Confirmé"
        case 3:
            return "Expert"
        case 4:
            return "Maitre"
            
        default:
            return "Débutant"
    }
}