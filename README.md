# Canaux croisés — Débattre pour mieux choisir

Application web de génération de matériel pédagogique pour l'activité **Canaux croisés**, destinée aux formateurs et CPC Numérique animant des formations d'enseignants du 1er degré sur la pertinence des usages de l'IA générative.

---

## 🎯 Objectifs et publics

### Publics visés

- **Public principal** : Conseillers Pédagogiques de Circonscription (CPC), formateurs EAFC, référents numériques du 1er degré
- **Public secondaire** : Enseignants du cycle 2 et du cycle 3 souhaitant animer l'activité en autonomie
- **Participants** : Enseignants des cycles 1 à 3 en formation initiale ou continue

### Objectif principal

Fournir un générateur de matériel pédagogique clé en main (cartes à découper, règles, guide animateur) pour l'activité de tri collaboratif **Canaux croisés**, qui amène les enseignants à débattre du canal d'information le plus pertinent selon le besoin professionnel.

### Contexte pédagogique d'usage

- **Formation présentielle** : salle de formation, tables en îlots de 4 à 5 participants
- **Dispositif** : 30 à 50 minutes, selon variante choisie (tri express, World Café, jeu du déplacement)
- **Animateur** : imprime le matériel à l'avance depuis n'importe quel navigateur, sur son propre poste
- **Vidéoprojecteur** : mode présentation intégré pour la phase de mise en commun

### Contraintes

- **Navigateur recommandé** : Chrome ou Chromium (fidélité d'impression maximale)
- **Aucun compte** : pas d'authentification, pas de stockage distant — l'outil fonctionne entièrement en local
- **Données personnelles** : aucune donnée collectée, aucun cookie, aucun appel serveur — conformité RGPD native
- **Hors ligne** : utilisable sans connexion une fois la page chargée

---

## ✨ Fonctionnalités

- [x] Génération de **3 documents imprimables** distincts et combinables :
    - Matériel (4 pages A4 de cartes à découper)
    - Règles détaillées (4 pages : déroulement, conseils, erreurs, variantes)
    - Guide animateur complet (5+ pages : attendus par carte, messages-clés)
- [x] **Sélecteur granulaire** de pages à imprimer (case à cocher par page et par document)
- [x] **3 palettes de couleurs** : standard (rouge/vert/orange), accessible daltoniens rouge-vert (bleu/vert/orange), noir et blanc économique
- [x] **Mode édition inline** des textes des cartes pour contextualiser l'activité à la réalité de la circonscription
- [x] **Mode présentation plein écran** sur fond sombre pour vidéoprojecteur, avec navigation clavier (← →, Échap)
- [x] Lignes de découpe pointillées intégrées autour de chaque carte
- [x] Icônes sémantiques (lucide-react) dans les guides : `XCircle`, `CheckCircle`, `AlertTriangle`, `Lightbulb`, `Clock`...
- [x] Numérotation des cartes supprimée sur le matériel imprimé (évite le biais de classement)
- [x] **Pied de page d'attribution** sur chaque page imprimée : URL de l'outil et nom de l'auteur, collé en bas via une structure flex
- [x] Navbar MiCetF intégrée avec bouton de don et contact

### User stories

**En tant que CPC Numérique**, je peux sélectionner uniquement les pages "Matériel" et imprimer 4 pages A4 de cartes, afin de préparer le matériel pour 6 groupes en moins de 5 minutes.

**En tant que formateur**, je peux activer le mode édition et modifier le texte d'une carte cas pratique (ex. remplacer "DNB" par "évaluation de circonscription"), afin d'ancrer l'activité dans le contexte local de mes participants.

**En tant qu'animateur en salle**, je peux lancer le mode présentation depuis le panneau Paramètres, afin d'afficher les cartes cas pratiques une par une sur le vidéoprojecteur lors de la phase de mise en commun, en naviguant au clavier.

**En tant que formateur sensible à l'accessibilité**, je peux choisir la palette "Bleu/Vert/Orange" ou "Noir et blanc", afin que le matériel imprimé reste lisible pour des participants daltoniens ou sur une imprimante monochrome.

**En tant qu'enseignant souhaitant réutiliser l'activité**, je peux imprimer le guide animateur complet en un clic, afin de disposer des attendus détaillés par carte et des nuances pédagogiques sans avoir à les préparer manuellement.

---

## 🧱 Architecture & stack technique

### Stack

| Outil                                   | Version | Rôle                                                   |
| --------------------------------------- | ------- | ------------------------------------------------------ |
| [React](https://react.dev)              | 19      | UI déclarative et gestion d'état local                 |
| [Vite](https://vitejs.dev) + SWC        | 7       | Build ultra-rapide, HMR, bundling ESM                  |
| [Tailwind CSS](https://tailwindcss.com) | v3      | Styles utilitaires, classes `print:` pour l'impression |
| [lucide-react](https://lucide.dev)      | 0.575   | Icônes SVG cohérentes                                  |
| [pnpm](https://pnpm.io)                 | ≥ 8     | Gestion des dépendances                                |
| CSS `@media print`                      | —       | Génération PDF via `window.print()`                    |

### Choix techniques pertinents

**Pas de bibliothèque PDF.** La génération de PDF repose entièrement sur `window.print()` avec `@media print` et `print-color-adjust: exact`. Cela évite toute dépendance lourde (PDFKit, Puppeteer), fonctionne hors ligne, et délègue le rendu au moteur d'impression du navigateur — plus fiable que du canvas pour du texte et des bordures.

**Tailwind v3 via PostCSS** (et non le plugin `@tailwindcss/vite` de la v4). Le projet utilise `postcss.config.js` + `tailwind.config.js` pour rester sur la branche stable v3, mieux documentée et sans breaking changes.

**État global dans `App.jsx` uniquement.** Le projet n'utilise ni Context ni Zustand : l'état (`docs`, `pages`, `paletteKey`, `editable`, `cardTexts`) est centralisé dans `App.jsx` et descend par props. La faible profondeur de l'arbre et l'absence de mutations asynchrones rendent cette approche suffisante et lisible.

**Contenu découplé du code.** Tout le contenu pédagogique (cartes, phases, attendus, variantes) est dans `src/data/cards-data.js`. Modifier l'activité ne nécessite aucune connaissance React.

### Flux principal

```
Navigateur (Chrome)
  └── React App (Vite dev server ou build statique)
        ├── ControlPanel  →  état global (docs, pages, palette, mode édition)
        ├── Pages React   →  rendu HTML/CSS fidèle au format A4
        └── window.print()  →  boîte de dialogue impression Chrome
                                └── PDF enregistré localement
```

Aucun appel réseau, aucune base de données, aucun backend.

---

## 📝 Décisions techniques importantes

```
2026-02-27 – Migration depuis Node.js/PDFKit vers React/Vite : rendu navigateur
             plus fidèle, emojis natifs, prévisualisation écran intégrée.

2026-02-27 – Tailwind v3 retenu (vs v4) : stabilité, compatibilité classes
             `print:`, documentation exhaustive disponible.

2026-02-27 – Lignes de découpe implémentées via wrapper CSS (border dashed)
             plutôt que divs absolues à coordonnées négatives : les débordements
             négatifs sont clippés par certains moteurs print malgré overflow:visible.

2026-02-27 – Numérotation (#1 à #12) supprimée des cartes imprimées : évite le
             biais de classement séquentiel lors du tri collaboratif.

2026-02-27 – Tailles de texte des cartes en `pt` (points typographiques) plutôt
             qu'en classes Tailwind : garantit la cohérence écran/impression
             indépendamment du zoom navigateur.

2026-02-27 – onExitRef pattern pour le listener clavier de PresentationView :
             évite les dépendances instables dans useEffect sans useCallback
             dans le composant parent.

2026-02-27 – Séparation en 3 documents imprimables indépendants (matériel,
             règles, guide) : permet à l'animateur d'imprimer uniquement
             ce dont il a besoin selon le format de sa formation.

2026-02-27 – PrintPage structurée en colonne flex (display:flex + flex-direction:
             column) avec children dans un div flex:1 : garantit que le pied de
             page d'attribution est toujours collé en bas de chaque page A4,
             quelle que soit la densité du contenu.

2026-02-27 – Carte 2 remplacée (horaires déchetterie → calendrier temps forts
             nationaux) : la nouvelle carte introduit un cas IAG de type
             "agrégation/synthèse" manquant dans le jeu, plus ancré dans la
             réalité professionnelle des enseignants du 1er degré.
```

---

## 🚀 Installation

### Prérequis

- Node.js ≥ 18
- pnpm ≥ 8 (`npm install -g pnpm`)

### Commandes

```bash
# Cloner le dépôt
git clone https://github.com/micetf/canaux-croises.git
cd canaux-croises

# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev

# Builder pour la production
pnpm build

# Prévisualiser le build de production
pnpm preview
```

### Générer le PDF

1. Ouvrir l'application dans **Chrome**
2. Configurer les documents via le bouton **Paramètres** (bas gauche)
3. Cliquer sur **Générer le PDF** (bas droit)
4. Dans la boîte de dialogue Chrome :
    - Format : **A4**
    - Marges : **Aucune**
    - ✅ **Graphiques en arrière-plan** (indispensable pour les bordures colorées)
5. Enregistrer en PDF ou imprimer directement

---

## ⚙️ Configuration

Aucun fichier `.env` n'est requis. L'application ne fait aucun appel réseau et ne dépend d'aucun service externe.

La seule configuration à ajuster pour un déploiement est la propriété `base` dans `vite.config.js` :

```js
// vite.config.js
export default defineConfig({
    base: "/canaux-croises/", // à adapter selon le chemin de déploiement
    plugins: [react()],
});
```

Pour un déploiement à la racine d'un domaine, utiliser `base: "/"`.

---

## ✅ Tests

> Le projet ne dispose pas encore de suite de tests automatisés. Les vérifications sont manuelles.

### Checklist avant mise en production

- [ ] `pnpm lint` — aucune erreur ESLint (notamment règles `react-hooks/exhaustive-deps`)
- [ ] `pnpm build` — build sans erreur ni warning critique
- [ ] Prévisualisation dans Chrome : les 4 pages matériel s'affichent correctement
- [ ] Impression Chrome (A4, marges zéro, graphiques arrière-plan) : bordures colorées visibles, lignes de découpe présentes, aucune carte coupée entre deux pages
- [ ] Pied de page d'attribution visible sur toutes les pages imprimées, collé en bas
- [ ] Mode présentation : navigation ← →, touche Échap fonctionnelle
- [ ] Mode édition : modification d'un texte de carte, vérification dans la prévisualisation et à l'impression
- [ ] Palette N&B : rendu correct à l'impression sans couleur
- [ ] Palette accessible : vérification du contraste des bordures

### Outillage à envisager (roadmap tests)

- [Vitest](https://vitest.dev) pour les tests unitaires des fonctions utilitaires
- [Playwright](https://playwright.dev) pour les tests de rendu impression (PDF snapshot)

---

## 🗺️ Roadmap

**v1.1 — Persistance légère**
Sauvegarde des textes modifiés dans `localStorage` pour retrouver ses personnalisations entre deux sessions, sans compte ni serveur.

**v1.2 — Banque de cartes étendue**
Ajout d'un second jeu de 12 cartes centré sur d'autres situations professionnelles (cycle 1, direction d'école, situations de handicap) — sélectionnable dans les Paramètres.

**v1.3 — Internationalisation partielle**
Version en langue régionale (occitan, breton, alsacien) pour les formations en académies concernées, via un simple fichier de traduction.

**v2.0 — Éditeur de cartes persistant**
Interface de création de cartes personnalisées avec export/import JSON, permettant à chaque formateur de constituer sa propre banque adaptée à son territoire.

---

## 📄 Licence

Ce projet est distribué sous licence **MIT**.

```
MIT License

Copyright (c) 2026 MiCetF

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🤝 Contributions

Le projet est développé sur temps libre par un CPC Numérique. Les contributions externes sont les bienvenues, dans la limite du temps disponible pour les relire.

**Pour proposer une amélioration :**

- Ouvrir une [issue GitHub](https://github.com/micetf/canaux-croises/issues) pour décrire le problème ou la suggestion
- Proposer une Pull Request en partant d'une branche dédiée (`feature/...` ou `fix/...`)
- Pour un retour rapide ou une question pédagogique, utiliser le [formulaire de contact MiCetF](https://micetf.fr/contact)

Les retours d'usage terrain (formations animées, adaptations de contenu, impressions sur différentes imprimantes) sont particulièrement précieux.

---

## 👤 Auteur

**Frédéric Misery**
Développeur des outils [MiCetF](https://micetf.fr)

Contact : [micetf.fr/contact](https://micetf.fr/contact)
