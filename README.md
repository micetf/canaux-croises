# Canaux croisés — Débattre pour mieux choisir

Application web de génération de matériel pédagogique pour l'activité **Canaux croisés**, conçue pour les formations d'enseignants à la pertinence des usages de l'IA générative et des outils numériques.

Développée pour [MiCetF](https://micetf.fr) — Outils numériques pour la classe.

---

## Présentation de l'activité

**Canaux croisés** est une activité de tri collaboratif (30 à 50 min, 4 à 5 participants par table) dans laquelle les participants répartissent 12 cartes "Cas pratiques" sous 4 colonnes "Canaux d'information" :

- **IAG** (Intelligence Artificielle Générative) — ChatGPT, Claude, Gemini…
- **Moteur de recherche** — Google, Qwant, DuckDuckGo…
- **Bibliothèque / Médiathèque** — bibliothécaires, catalogues…
- **Pairs** — collègues, CPC, ERUN, groupes de travail…

L'objectif n'est pas de trouver une bonne réponse unique, mais de **débattre des critères de choix** (rapidité, fiabilité, contexte local, expertise, capacité de génération) et de découvrir la complémentarité des canaux.

---

## Fonctionnalités

### Génération de PDF imprimables

L'application produit jusqu'à trois documents distincts, sélectionnables indépendamment via le panneau Paramètres :

**Matériel (4 pages)**

- Page 1 — 4 cartes Canaux (en-têtes de colonnes, accent rouge)
- Page 2 — Cas pratiques 1 à 6 (accent vert)
- Page 3 — Cas pratiques 7 à 12 (accent vert)
- Page 4 — 6 cartes vierges "À inventer" (accent orange)

**Règles détaillées (4 pages)**

- Objectif, matériel, déroulement par phases
- Conseils d'animation et critères de décision à faire émerger
- Erreurs fréquentes à anticiper et débats attendus
- Variantes pédagogiques (World Café, Jeu du déplacement)

**Guide animateur complet (5+ pages)**

- Introduction et code couleur
- Attendus détaillés par carte (canal principal, alternatives, justification, nuances)
- Messages-clés à faire émerger

### Paramètres

- **Sélecteur de documents** — choix granulaire des pages à inclure dans le PDF
- **Palette de couleurs** — 3 options : Rouge/Vert/Orange (standard), Bleu/Vert/Orange (accessible daltoniens rouge-vert), Noir et blanc (impression économique)
- **Mode édition** — modification inline des textes des cartes cas pratiques pour contextualiser l'activité
- **Mode présentation** — affichage plein écran sur fond sombre pour vidéoprojecteur, navigation clavier (← →) et Échap pour quitter

---

## Stack technique

| Outil                                      | Rôle                    |
| ------------------------------------------ | ----------------------- |
| [React](https://react.dev)                 | UI et gestion d'état    |
| [Vite](https://vitejs.dev) + SWC           | Build et dev server     |
| [Tailwind CSS v3](https://tailwindcss.com) | Styles utilitaires      |
| [lucide-react](https://lucide.dev)         | Icônes SVG              |
| [pnpm](https://pnpm.io)                    | Gestionnaire de paquets |

La génération de PDF repose sur l'impression navigateur (`window.print()`) avec `@media print` et `print-color-adjust: exact` — aucune dépendance serveur.

---

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/micetf/canaux-croises.git
cd canaux-croises

# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev
```

### Prérequis

- Node.js ≥ 18
- pnpm ≥ 8

---

## Générer le PDF

1. Ouvrir l'application dans **Chrome** (recommandé pour la fidélité d'impression)
2. Sélectionner les documents souhaités via le bouton **Paramètres** (bas gauche)
3. Cliquer sur **Générer le PDF** (bas droit)
4. Dans la boîte de dialogue d'impression Chrome :
    - Format : **A4**
    - Marges : **Aucune**
    - Cocher **Graphiques en arrière-plan** (requis pour les bordures colorées)
5. Enregistrer en PDF ou envoyer à l'imprimante

---

## Structure du projet

```
src/
├── data/
│   ├── cards-data.js        # Contenu des cartes et données pédagogiques
│   └── palettes.js          # Définitions des palettes de couleurs
├── components/
│   ├── cards/
│   │   ├── CardShell.jsx    # Enveloppe visuelle commune (bordures, découpe)
│   │   ├── CanalCard.jsx    # Carte canal d'information
│   │   ├── CasPratiqueCard.jsx  # Carte cas pratique (avec mode édition)
│   │   ├── CarteVierge.jsx  # Carte vierge à inventer
│   │   └── index.js
│   ├── pages/
│   │   ├── PrintPage.jsx    # Enveloppe générique A4
│   │   ├── CardGrid.jsx     # Grille 2 colonnes pour les cartes
│   │   ├── PageCanaux.jsx
│   │   ├── PageCasPratiques.jsx
│   │   ├── PageCartesVierges.jsx
│   │   ├── PageRegles.jsx   # Document règles détaillées
│   │   ├── PageGuideAnimateur.jsx  # Document guide animateur
│   │   ├── GuideSection.jsx # Composants internes des guides
│   │   └── index.js
│   └── ui/
│       ├── Navbar.jsx       # Barre de navigation MiCetF
│       ├── PrintButton.jsx  # Bouton d'impression flottant
│       ├── ControlPanel.jsx # Panneau de paramètres
│       └── PresentationView.jsx  # Mode présentation plein écran
├── styles/
│   └── print.css            # Règles @media print
├── App.jsx                  # Racine — état global et assemblage des pages
└── main.jsx
```

---

## Personnalisation du contenu

Tout le contenu pédagogique est centralisé dans `src/data/cards-data.js` :

- `canaux` — les 4 canaux d'information
- `cards` — les 12 cartes cas pratiques
- `pedagogicalInfo` — phases, conseils, critères, erreurs fréquentes, variantes, attendus par carte

Modifier ce fichier suffit à mettre à jour l'ensemble de l'application et des trois documents imprimables.

---

## Licence

© MiCetF — Usage pédagogique libre dans le cadre de formations à destination des enseignants.
