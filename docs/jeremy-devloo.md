---
outline: deep
---

# Revue du code de Hugo Larochelle pour la semaine du 15 au 21.

## Qualité du code 

### Lisibilité du code

La fonction fight de GameView est assée chargé tu pourrait séparer les deux switch case en deux fonction différente.

::: details
```ts
function fight() {
    playerAttack();
    enemyAttack();
}

function playerAttack() {
    let playerAttack: number = getRndNbr(0, 100);
    switch (playerRank.value) {
        case Ranks.BEGINER:
            if (playerAttack < 20) {
                damageEnemy()
            }
            break;
        case Ranks.CONFIRMED:
            if (playerAttack < 35) {
                damageEnemy()
            }
            break;
        case Ranks.EXPERT:
            if (playerAttack < 50) {
                damageEnemy()
            }
            break;
        case Ranks.MASTER:
            if (playerAttack < 70) {
                damageEnemy()
            }
            break;
    
        default:
            break;
    }
}

function enemyAttack() {
    let enemyAttack: number = getRndNbr(0, 100);
    switch (enemyRank.value) {
        case Ranks.BEGINER:
            if (enemyAttack < 20) {
                damagePlayer()
            }
            break;
        case Ranks.CONFIRMED:
            if (enemyAttack < 35) {
                damagePlayer()
            }
            break;
        case Ranks.EXPERT:
            if (enemyAttack < 50) {
                damagePlayer()
            }
            break;
        case Ranks.MASTER:
            if (enemyAttack < 70) {
                damagePlayer()
            }
            break;
    
        default:
            break;
    }
}
```
:::

### Respect des bonnes pratiques de programmation

::: Warning
N'oublie pas d'enlever tes console.log dans Enemy quand tu n'en a plus besoin.
:::

### Respect des normes et standards de programmation

Bon respect des normes et standards Good job !
