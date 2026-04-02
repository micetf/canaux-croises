# Contribuer à Canaux croisés

Merci de l'intérêt pour ce projet ! Les contributions sont bienvenues
sous toutes leurs formes.

## Types de contributions

### Retours d'usage terrain
La contribution la plus précieuse : signaler ce qui a fonctionné ou
posé problème lors d'une animation réelle. Ouvrir un ticket en
précisant le contexte (public, durée, variante utilisée).

### Proposer ou modifier une carte cas pratique
Les 12 cartes sont dans `src/data/cards-data.js`, objet `cards[]`.
Chaque carte suit la structure :
```js
{
  id: number,
  text: "J'ai besoin de...",
}
```
Les attendus pédagogiques associés sont dans `pedagogicalInfo.expectedAnswers[]`.
Une proposition de carte implique idéalement les deux.
**Aucune compétence React n'est nécessaire** pour modifier ce fichier.

### Corriger un bug ou améliorer l'interface
1. Forker le dépôt
2. Créer une branche : `git checkout -b fix/description-courte`
3. Appliquer la correction
4. Vérifier : `pnpm lint` puis `pnpm build` sans erreur
5. Vérifier l'impression dans Chrome (voir checklist du README)
6. Ouvrir une merge request avec une description claire

### Adapter le contenu à un autre contexte
Le contenu pédagogique est sous CC-BY-SA 4.0 : vous pouvez adapter
les cartes à d'autres cycles, d'autres thèmes, d'autres contextes
professionnels. Une mention d'attribution est demandée.

## Conventions de code

- Pas de TypeScript — JavaScript ESM uniquement
- Composants React en fonctions (pas de classes)
- Tailwind CSS pour les styles — pas de CSS inline sauf pour les
  dimensions en `mm` (impression) ou les couleurs dynamiques (palette)
- Caractères non-ASCII : UTF-8 direct dans les `.js`, séquences
  `\uXXXX` dans les `.jsx` (contrainte ESLint)
- Tout nouveau caractère non-ASCII dans un `.jsx` doit passer :
  `grep -Pn '[^\x00-\x7F]' fichier.jsx`

## Installation

Voir la section **Installation** du README.

## Contact

Signaler un problème pédagogique ou proposer une amélioration :
[webmaster@micetf.fr](mailto:webmaster@micetf.fr?subject=A%20propos%20de%20%2Fcanaux-croises)
ou via les tickets du dépôt.
```
```
git add CONTRIBUTING.md
git commit -m "docs: ajout CONTRIBUTING.md (usage terrain, cartes, code, conventions)"