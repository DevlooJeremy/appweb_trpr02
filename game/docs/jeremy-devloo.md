---
outline: deep
---

# Revue du code de Hugo par Jérémy


## Le code


### Lisibilité
Bonne lisibilité, good job Hugo!

### respect des bonnes pratiques de programmation

:::warning
Dans App.vue la constante **songId** n'est pas utilisé,
elle devrait être enlevé.
:::

:::tip
Tu pourrais utiliser un object song et un objet artiste pour transporter leurs informations dans les vues au lieu de créer une variable pour chaque informations et passée l'informations à ceux qui en on besoin. Parce que App.vue ne devrait pas savoir ce que ses sous-composant on besoins.
:::

### respect des normes et standards de programmation

Bon respect des normes et standards de programmation.

:::details
Toute tes variables et fonctions sont en camelCase et le nom des composant en PascalCase. Le nom des variables, des fonctions et des composants sont significatifs. Le code est unilangue. L'affichage et les commentaires sont en français.
:::


## Autres

### Optimisation
Tes fonctions sont simples et bien optimisé good job !

### Clarté pour utilisateurs
:::warning
Il n'y a pas de message d'avertissement lorsque le site n'est pas capable d'accéder à la bd ou lorsque l'utilisateur essaye de jouer une chanson, mais qu'aucune n'est sélectionné.
:::