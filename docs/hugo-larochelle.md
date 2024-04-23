# Revue du TP1 de Jérémy Devloo

Ceci est la revue de code du tp1 de Jérémy Devloo, fait par Hugo Larochelle.

## Le code

### Lisibilité et clarté

Je ne trouve rien à changer dans le code à propos de sa clarté.

::: details
Le code est bien séparé en différentes parties ayant chacune leur utilité précise. L'indentation et les espacements sont réguliers et permet une bonne lisibilité.

Les noms des composantes ainsi que ceux des fonctions et des variables sont claires, simples et représentatifs de leur utilité.
:::

### Bonnes pratiques

Une fonction dans le composant *NavBar* est vide et inutilisé

```js{5,6}
// src/components/NavBar.vue
<script setup lang="ts">
    import {RouterLink} from 'vue-router'

    function goToGame() {
    }
</script>
```

Deux *imports* inutiles.

```js{5,6}
// src/components/NavBar.vue
<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {getShips} from '../scripts/dbUtils'
import {} from 'vue-router';
import { RouterLink } from 'vue-router';
import router from '@/router';

...

</script>
```

Pour le reste la quantité de code est gardé à son minimum (pas de fonctions trop longues).

### Normes et standards

Les normes et standards sont bien respectés. Bravo!

## Tests

***Encore non présent***

## Autres

Le reste est bon.
