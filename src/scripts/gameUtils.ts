export enum PlayerActions {FIGHT, RETREAT, REPARE, WAIT}
export enum Ranks {BEGINER, CONFIRMED, EXPERT, MASTER}

export function actionToString(action:PlayerActions) {
    switch (action) {
        case PlayerActions.FIGHT:
            return "Fight"
        case PlayerActions.RETREAT:
            return "Retreat"
        case PlayerActions.REPARE:
            return "Repare"
        case PlayerActions.WAIT:
            return "Wait"
        default:
            break;
    }
}

export function stringToAction(stringAction:string) {
    switch (stringAction) {
        case "Fight":
            return PlayerActions.FIGHT
        case "Retreat":
            return PlayerActions.RETREAT
        case "Repare":
            return PlayerActions.REPARE
        case "Wait":
            return PlayerActions.WAIT
        default:
            break;
    }
}