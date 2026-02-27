/**
 * Données des 4 cartes "Canaux d'information"
 * Ces cartes servent d'en-têtes de colonnes pour l'activité
 */

export const canaux = [
    {
        id: "iag",
        title: "Intelligence Artificielle Générative (IAG)",
        examples: "ChatGPT, Gemini, Le Chat (Mistral), Perplexity...",
    },
    {
        id: "moteur",
        title: "Moteur de recherche",
        examples: "Google, Qwant, DuckDuckGo, Bing...",
    },
    {
        id: "bibliotheque",
        title: "Bibliothèque / Médiathèque",
        examples: "Bibliothécaires, catalogues, collections...",
    },
    {
        id: "pairs",
        title: "Pairs (collègues, réseau professionnel)",
        examples: "Collègues, CPC, ERUN, groupes de travail...",
    },
];

/**
 * Données des 12 cartes pour l'activité "Le tri express"
 * Chaque carte décrit un besoin professionnel d'enseignant sans orienter vers un canal spécifique
 */

export const cards = [
    {
        id: 1,
        text: "J'ai besoin d'une fiche d'exercices de problèmes multiplicatifs pour des CM2 avec trois niveaux de difficulté et une correction détaillée.",
    },
    {
        id: 2,
        text: "J'ai besoin d'un calendrier annuel des principaux temps forts nationaux (journées et semaines thématiques) qui reviennent chaque année et concernent l'école primaire.",
    },
    {
        id: 3,
        text: "Ma classe de CE1 est très agitée l'après-midi. J'ai du mal à maintenir l'attention en lecture compréhension. J'ai besoin de stratégies efficaces qui ont fait leurs preuves.",
    },
    {
        id: 4,
        text: "Je cherche un roman de littérature jeunesse pour des CE2 qui aborde le thème du déménagement et du changement d'école, avec une écriture accessible.",
    },
    {
        id: 5,
        text: "J'ai un énoncé de problème de mathématiques mais il est trop complexe pour mes élèves de CE1 en grande difficulté de lecture. J'ai besoin de le rendre compréhensible sans le dénaturer.",
    },
    {
        id: 6,
        text: "Je prépare un conseil d'école et j'ai besoin des statistiques officielles de réussite au DNB pour l'année en cours, au niveau national.",
    },
    {
        id: 7,
        text: "J'ai un double niveau CP-CE1 pour la première fois. J'ai besoin d'exemples d'organisation concrète (groupes, espaces, emplois du temps) qui fonctionnent vraiment au quotidien.",
    },
    {
        id: 8,
        text: "Je prépare une séquence d'EMC sur les stéréotypes de genre. J'ai besoin de constituer un corpus d'albums de littérature jeunesse pertinents sur ce thème.",
    },
    {
        id: 9,
        text: "Je dois envoyer un message à l'équipe enseignante pour rappeler l'importance du RGPD après plusieurs incidents. J'ai besoin d'aide pour trouver le bon ton : ferme mais pas culpabilisant.",
    },
    {
        id: 10,
        text: "Je dois vérifier un point précis concernant les attendus en géométrie. J'ai besoin d'accéder aux programmes officiels de mathématiques du cycle 2.",
    },
    {
        id: 11,
        text: "Des parents sont très inquiets du niveau en mathématiques de leur enfant et me demandent un entretien. J'ai besoin d'aide pour formuler un discours rassurant et honnête, qui reconnaît les difficultés sans alarmer.",
    },
    {
        id: 12,
        text: "Je veux travailler la comparaison de versions d'un même conte avec mes CP-CE1. J'ai besoin de rassembler au moins 3 versions différentes (classique, détournée, contemporaine).",
    },
];

/**
 * Informations pédagogiques pour le guide d'utilisation
 */
export const pedagogicalInfo = {
    title: "Guide d'utilisation - Activité 'Canaux croisés'",
    gameTitle: "Canaux croisés - Débattre pour mieux choisir",
    duration: "30-35 minutes (ou 45-50 min avec Phase 6 créative)",
    objective:
        "Réfléchir au choix du canal d'information selon le besoin professionnel. Identifier les critères de décision (rapidité, fiabilité, contexte...). Découvrir la complémentarité des canaux.",

    // FORMAT PRINCIPAL : Table de tri collaborative
    mainFormat: {
        name: "Table de tri collaborative",
        groupSize: "4-5 participants par table",
        duration: "30-35 minutes",
    },

    materials: [
        "1 jeu de 4 cartes CANAUX (page 1) - COMMUN au groupe",
        "1 jeu de 12 cartes CAS PRATIQUES (pages 2-3) - PAR PARTICIPANT",
        "1 table par groupe",
        "Optionnel : smartphone pour photo finale",
        "Pour Phase 6 : fiches vierges ou post-its (1 par participant)",
    ],

    phases: [
        {
            name: "Phase 1 - Installation",
            duration: "2 minutes",
            description:
                "Placer les 4 cartes CANAUX au centre de la table. Chacun garde son jeu de 12 cartes CAS PRATIQUES.",
            animatorRole:
                "Préciser : 'Vous avez chacun votre jeu. C'est normal de placer la même carte différemment.'",
        },
        {
            name: "Phase 2 - Tri silencieux",
            duration: "5 minutes",
            description:
                "Placer ses 12 cartes sous les canaux choisis, EN SILENCE. Observer ensuite les différences de placement.",
            animatorRole:
                "Faire respecter le silence. À la fin : 'Observez où les autres ont placé les cartes.'",
        },
        {
            name: "Phase 3 - Débat",
            duration: "15 minutes",
            description:
                "Pour chaque carte placée différemment : expliquer son choix, écouter les autres, décider ensemble. On peut créer une zone COMBINAISON si besoin.",
            animatorRole:
                "Lancer : 'La carte 1 est sous 3 canaux différents. Pourquoi ?' Valoriser la zone COMBINAISON.",
        },
        {
            name: "Phase 4 - Synthèse",
            duration: "8 minutes",
            description:
                "Prendre en photo le résultat. Identifier les 3 cartes les plus débattues. Lister les critères utilisés (rapidité, fiabilité, contexte...).",
            animatorRole:
                "Faire verbaliser les critères : 'Pourquoi avez-vous choisi ce canal plutôt qu'un autre ?'",
        },
        {
            name: "Phase 5 - Mise en commun (optionnelle)",
            duration: "5 minutes",
            description:
                "Chaque groupe présente ses 3 cartes débattues et ses critères.",
            animatorRole:
                "Synthétiser : complémentarité des canaux, importance du contexte, pas de réponse unique.",
        },
        {
            name: "Phase 6 - Création (optionnelle)",
            duration: "15 minutes",
            description:
                "Chacun crée 1 nouvelle carte CAS PRATIQUE à partir de sa réalité professionnelle. Tour de table pour partage. Le groupe trie collectivement chaque nouvelle carte.",
            animatorRole:
                "Consigne : 'Pensez à un vrai besoin récent. Formulez-le comme les cartes : J'ai besoin de...'. Valoriser le passage de récepteur à producteur.",
        },
    ],

    tips: [
        "Phase 2 : le silence est ESSENTIEL pour que chacun se positionne sans influence",
        "Phase 3 : ne pas intervenir trop vite, laisser le groupe négocier",
        "Valoriser la création de la zone COMBINAISON (= découverte clé de l'activité)",
        "Les cartes 1, 2, 9 et 11 font toujours débat (c'est normal et souhaitable)",
        "Il n'y a pas de 'bonne réponse' unique (c'est tout l'intérêt de l'activité)",
        "Phase 6 : la création de cartes personnelles ancre les apprentissages (transfert récepteur => producteur)",
    ],

    // VARIANTES PÉDAGOGIQUES
    alternativeFormats: [
        {
            name: "Variante 2 : World Café des canaux",
            duration: "45 minutes",
            participants: "12-20 participants",
            description:
                "4 tables (1 par canal) avec 3 cartes CAS PRATIQUES chacune. Les groupes tournent de table en table, notent arguments POUR/CONTRE sur post-its. Synthèse finale par table.",
            materials: [
                "4 cartes CANAUX affichées (1 par table)",
                "Post-its 2 couleurs (POUR / CONTRE)",
                "4 tables espacées",
            ],
            advantages: [
                "Très dynamique (rotations)",
                "Intelligence collective",
                "Adapté aux grands groupes",
            ],
            tips: [
                "Choisir 3 cartes par table : 1 évidente + 1 débattable + 1 controversée",
                "Prévoir signal sonore pour rotations (clochette)",
            ],
            animatorRole:
                "Chronométrer les rotations (10 min), synthétiser les critères communs en fin.",
        },
        {
            name: "Variante 3 : Le jeu du déplacement",
            duration: "25 minutes",
            participants: "10-30 participants",
            description:
                "Afficher les 4 CANAUX aux 4 coins de la salle. Projeter les 12 cartes CAS PRATIQUES une par une. Les participants se déplacent vers le canal choisi, débattent 1 minute dans chaque coin.",
            materials: [
                "4 cartes CANAUX affichées (4 coins de salle)",
                "Vidéoprojecteur",
                "Espace pour circuler",
            ],
            advantages: [
                "Très dynamique (mouvement constant)",
                "Visualisation immédiate des divergences",
                "Très grands groupes possibles",
            ],
            tips: [
                "Autoriser un espace central pour les hésitants",
                "2 minutes par carte maximum",
            ],
            animatorRole:
                "Chronométrer strictement, encourager prises de parole courtes.",
        },
    ],

    // Attendus détaillés par carte
    expectedAnswers: [
        {
            card: 1,
            text: "Fiche d'exercices de problèmes multiplicatifs pour des CM2 avec trois niveaux de difficulté",
            mainChannel: "IAG (avec validation)",
            alternatives: ["Pairs", "Bibliothèque (manuels)"],
            rationale:
                "L'IAG peut générer rapidement des exercices différenciés avec corrections. MAIS la pertinence didactique nécessite une validation par l'enseignant ou des pairs.",
            criteria: [
                "Rapidité de production",
                "Capacité de différenciation",
                "Qualité didactique (nécessite validation)",
            ],
            commonMistakes: [
                "Faire confiance aveugle à l'IAG sans vérifier la progressivité",
                "Oublier que les manuels (Bibliothèque) offrent des exercices déjà éprouvés",
                "Ne pas considérer l'expérience des collègues qui connaissent les difficultés réelles des élèves",
            ],
            nuances:
                "Carte débattable : l'IAG EST pertinent pour la génération, MAIS un échange avec des Pairs ou une consultation de manuels reste précieux pour la validation.",
        },
        {
            card: 2,
            text: "Calendrier annuel des principaux temps forts nationaux concernant l'école primaire",
            mainChannel: "IAG (avec validation)",
            alternatives: [
                "Moteur de recherche (compilation manuelle)",
                "Pairs",
            ],
            rationale:
                "Ce document de synthèse n'existe pas tel quel : il faut collecter des informations dispersées sur plusieurs pages eduscol/education.gouv.fr, analyser leur récurrence annuelle, puis construire le calendrier. L'IAG excelle dans cette agrégation multi-sources et cette mise en forme — là où un moteur de recherche retourne des liens sans synthétiser.",
            criteria: [
                "Agrégation de sources dispersées",
                "Analyse de récurrence",
                "Production d'un document structuré inexistant",
                "Validation indispensable (risque d'omissions ou d'erreurs de dates)",
            ],
            commonMistakes: [
                "Croire qu'un moteur de recherche suffit : il liste des pages, il ne construit pas de calendrier",
                "Ne pas vérifier le résultat de l'IAG : elle peut oublier des temps forts ou halluciner des dates",
                "Ne pas préciser dans le prompt de sourcer sur eduscol pour fiabiliser la réponse",
            ],
            nuances:
                "Carte débattable : le Moteur est une vraie alternative si l'enseignant accepte de compiler manuellement. Des collègues CPC ou ERUN ont souvent déjà ce document (Pairs). L'IAG est le canal le plus efficace pour la production du document, pas forcément le plus fiable sans relecture.",
        },
        {
            card: 3,
            text: "Stratégies pour une classe de CE1 agitée l'après-midi",
            mainChannel: "Pairs",
            alternatives: ["IAG (pour des idées initiales)"],
            rationale:
                "Le contexte local (profil de la classe, contraintes de l'école) et l'expérience vécue sont déterminants. Seuls les collègues peuvent partager ce qui fonctionne VRAIMENT.",
            criteria: [
                "Importance du contexte local",
                "Valeur de l'expérience terrain",
                "Besoin de solutions éprouvées",
            ],
            commonMistakes: [
                "Croire que l'IAG peut comprendre la spécificité d'une classe sans contexte détaillé",
                "Chercher des solutions génériques sur un moteur de recherche sans adaptation au contexte",
            ],
            nuances:
                "L'IAG peut fournir des idées de départ, mais les Pairs sont essentiels pour la validation et l'adaptation au contexte réel.",
        },
        {
            card: 4,
            text: "Roman jeunesse pour des CE2 sur le déménagement",
            mainChannel: "Bibliothèque",
            alternatives: [
                "Pairs (bibliothécaires ou collègues)",
                "Moteur de recherche (listes)",
            ],
            rationale:
                "La qualité littéraire et la pertinence pédagogique nécessitent l'expertise d'un bibliothécaire ou d'un enseignant spécialisé en littérature jeunesse.",
            criteria: [
                "Qualité littéraire",
                "Expertise humaine nécessaire",
                "Besoin de recommandations fiables",
            ],
            commonMistakes: [
                "Se fier uniquement à des listes trouvées sur internet sans vérifier la qualité",
                "Demander à l'IAG qui peut inventer des titres inexistants (hallucinations)",
            ],
            nuances:
                "Les bibliothécaires (Bibliothèque) et les collègues spécialisés (Pairs) sont complémentaires. Un moteur de recherche peut donner des listes, mais sans garantie de qualité.",
        },
        {
            card: 5,
            text: "Reformulation d'énoncé de problème pour CE1 en difficulté de lecture",
            mainChannel: "IAG (avec validation)",
            alternatives: ["Pairs"],
            rationale:
                "L'IAG excelle dans la reformulation linguistique. MAIS la connaissance fine des élèves en difficulté peut nécessiter l'avis de pairs.",
            criteria: [
                "Capacité de reformulation",
                "Rapidité",
                "Connaissance des difficultés spécifiques",
            ],
            commonMistakes: [
                "Ne pas vérifier que la reformulation reste mathématiquement équivalente",
                "Oublier que les collègues spécialisés (RASED, maîtres E) ont une expertise précieuse",
            ],
            nuances:
                "Carte débattable : IAG pour plusieurs propositions rapides, Pairs pour valider la pertinence selon les élèves concernés.",
        },
        {
            card: 6,
            text: "Statistiques officielles de réussite au DNB",
            mainChannel: "Moteur de recherche",
            alternatives: [],
            rationale:
                "Données officielles, publiques, mises à jour annuellement. Recherche directe sur education.gouv.fr via un moteur.",
            criteria: [
                "Caractère officiel de l'information",
                "Données publiques",
                "Actualité",
            ],
            commonMistakes: ["Aucune - carte consensuelle"],
            nuances: "Carte consensuelle : évidente pour valider la démarche.",
        },
        {
            card: 7,
            text: "Exemples d'organisation concrète d'un double niveau CP-CE1",
            mainChannel: "Pairs",
            alternatives: ["IAG (pour des idées générales)"],
            rationale:
                "L'organisation d'un double niveau dépend énormément du contexte : effectifs, locaux, profil des élèves, habitudes d'école. Seuls les collègues qui le vivent peuvent partager ce qui fonctionne au quotidien.",
            criteria: [
                "Importance du contexte local",
                "Besoin de solutions testées",
                "Complexité organisationnelle",
            ],
            commonMistakes: [
                "Chercher des modèles théoriques sans considérer la réalité du terrain",
                "Croire qu'une solution universelle existe",
            ],
            nuances:
                "L'IAG peut donner des principes généraux, mais les Pairs sont indispensables pour les détails pratiques et la faisabilité.",
        },
        {
            card: 8,
            text: "Albums jeunesse sur les stéréotypes de genre pour l'EMC",
            mainChannel: "Bibliothèque",
            alternatives: ["Pairs", "Moteur de recherche (listes thématiques)"],
            rationale:
                "Constitution d'un corpus de qualité nécessitant une expertise littéraire et une sensibilité au sujet. Les bibliothécaires et enseignants spécialisés sont les plus compétents.",
            criteria: [
                "Qualité littéraire",
                "Pertinence thématique",
                "Expertise humaine",
            ],
            commonMistakes: [
                "Se contenter d'une liste internet sans vérifier la disponibilité et la qualité",
                "Ne pas consulter les bibliothécaires qui ont souvent des sélections toutes faites",
            ],
            nuances:
                "Bibliothèque (bibliothécaires) et Pairs (collègues EMC) sont complémentaires. Le moteur peut orienter mais ne garantit pas la qualité.",
        },
        {
            card: 9,
            text: "Courriel diplomatique sur le RGPD",
            mainChannel: "IAG (avec adaptation)",
            alternatives: ["Pairs"],
            rationale:
                "L'IAG peut générer plusieurs versions avec différents tons. MAIS la connaissance du contexte relationnel de l'équipe peut rendre l'avis de pairs précieux.",
            criteria: [
                "Aide à l'écriture",
                "Proposition de plusieurs tons",
                "Connaissance du contexte relationnel",
            ],
            commonMistakes: [
                "Envoyer un texte généré par IAG sans l'adapter au contexte de l'école",
                "Ne pas demander une relecture à un collègue de confiance",
            ],
            nuances:
                "Carte très débattable : IAG pour des propositions, Pairs pour valider le ton selon les tensions éventuelles de l'équipe.",
        },
        {
            card: 10,
            text: "Programmes officiels de mathématiques du cycle 2",
            mainChannel: "Moteur de recherche",
            alternatives: [],
            rationale:
                "Texte officiel disponible sur EDUSCOL. Recherche directe la plus efficace.",
            criteria: [
                "Caractère officiel",
                "Accessibilité publique",
                "Version à jour",
            ],
            commonMistakes: ["Aucune - carte consensuelle"],
            nuances:
                "Carte consensuelle : évidente. Permet de vérifier la compréhension de la démarche.",
        },
        {
            card: 11,
            text: "Discours pour rassurer des parents inquiets du niveau en mathématiques",
            mainChannel: "Pairs",
            alternatives: ["IAG (pour des formulations)"],
            rationale:
                "La relation avec les parents est délicate et contextuelle. Les collègues qui ont vécu des situations similaires peuvent partager les formulations qui ont réellement apaisé sans minimiser.",
            criteria: [
                "Expérience vécue",
                "Sensibilité relationnelle",
                "Connaissance du contexte",
            ],
            commonMistakes: [
                "Utiliser des formulations génériques d'IAG sans adaptation",
                "Ne pas considérer les spécificités culturelles ou sociales du contexte",
            ],
            nuances:
                "Carte très débattable : IAG peut suggérer des formulations, mais Pairs apportent la dimension humaine et contextuelle indispensable.",
        },
        {
            card: 12,
            text: "Plusieurs versions d'un même conte (classique, détournée, contemporaine)",
            mainChannel: "Bibliothèque",
            alternatives: ["Pairs", "Moteur de recherche"],
            rationale:
                "Constitution d'un corpus nécessitant une connaissance de la production éditoriale en littérature jeunesse. Les bibliothécaires ont cette expertise.",
            criteria: [
                "Connaissance éditoriale",
                "Accès aux ouvrages",
                "Qualité littéraire",
            ],
            commonMistakes: [
                "Chercher sur internet sans vérifier la disponibilité en bibliothèque",
                "Ne pas profiter de l'expertise des bibliothécaires jeunesse",
            ],
            nuances:
                "Bibliothèque est idéal, mais les collègues qui ont déjà travaillé sur les contes (Pairs) peuvent aussi recommander des versions éprouvées.",
        },
    ],

    // Critères de décision à faire émerger
    decisionCriteria: {
        title: "Critères de décision à faire émerger",
        description: "Faire verbaliser ces critères par les participants.",
        criteria: [
            {
                name: "Rapidité",
                question: "Besoin immédiat ?",
                favors: ["Moteur", "IAG"],
            },
            {
                name: "Fiabilité",
                question: "Info certifiée ?",
                favors: ["Moteur (sources officielles)", "Bibliothèque"],
            },
            {
                name: "Contexte local",
                question: "Situation spécifique ?",
                favors: ["Pairs"],
            },
            {
                name: "Expertise",
                question: "Jugement d'expert ?",
                favors: ["Bibliothèque", "Pairs"],
            },
            {
                name: "Génération / Synthèse",
                question: "Produire ou agréger du contenu ?",
                favors: ["IAG"],
            },
        ],
    },

    // Erreurs fréquentes à anticiper
    commonPitfalls: [
        {
            mistake: "Considérer l'IAG comme une source de vérité absolue",
            correction:
                "L'IAG génère du contenu plausible mais nécessite toujours une validation humaine, surtout en pédagogie.",
        },
        {
            mistake: "Négliger l'importance du contexte local",
            correction:
                "De nombreuses situations professionnelles sont fortement contextuelles : les Pairs sont alors irremplaçables.",
        },
        {
            mistake: "Chercher UNE seule bonne réponse",
            correction:
                "La plupart des situations bénéficient d'une COMBINAISON de canaux. L'important est de justifier ses choix.",
        },
        {
            mistake: "Sous-estimer l'expertise des bibliothécaires",
            correction:
                "Les bibliothécaires ont une connaissance fine de la production éditoriale et peuvent faire gagner beaucoup de temps.",
        },
        {
            mistake: "Opposer les canaux au lieu de les combiner",
            correction:
                "L'IAG peut générer, les Pairs valident, le Moteur vérifie, la Bibliothèque enrichit : ils sont complémentaires.",
        },
        {
            mistake:
                "Confondre 'trouver une information' et 'construire un document de synthèse'",
            correction:
                "Un moteur de recherche localise des pages existantes. Quand le document voulu n'existe pas encore, l'IAG devient le canal le plus pertinent pour l'agréger et le produire.",
        },
    ],

    expectedDebates: [
        {
            card: 2,
            question:
                "Calendrier des temps forts : Moteur de recherche pour accéder aux pages officielles, ou IAG pour agréger et synthétiser ce qui est dispersé ?",
            keyPoint:
                "Faire distinguer deux tâches : trouver une information existante (Moteur) vs construire un document qui n'existe pas encore (IAG). La validation reste indispensable dans les deux cas.",
        },
        {
            card: 1,
            question:
                "Fiche d'exercices multiniveaux : IAG pour la rapidité ou Pairs pour la pertinence didactique ?",
            keyPoint:
                "Faire émerger que l'IAG peut générer mais que la validation pédagogique reste humaine.",
        },
        {
            card: 9,
            question:
                "Courriel diplomatique : IAG pour des suggestions ou Pairs qui connaissent le contexte relationnel ?",
            keyPoint:
                "Discuter de la dimension relationnelle que l'IAG ne peut pas appréhender.",
        },
        {
            card: 11,
            question:
                "Discours pour parents inquiets : IAG pour des formulations ou Pairs pour l'expérience vécue ?",
            keyPoint:
                "Mettre en évidence l'importance de l'authenticité et de l'expérience dans les situations délicates.",
        },
    ],

    // Synthèse à partager en fin d'activité
    keySynthesis: {
        title: "Messages clés à faire émerger",
        points: [
            "Il n'y a pas de 'bon' canal universel : tout dépend du besoin et du contexte",
            "Les canaux sont complémentaires, pas concurrents : on peut (et doit) les combiner",
            "L'IAG est un outil puissant pour GÉNÉRER et SYNTHÉTISER, mais nécessite toujours une VALIDATION humaine",
            "Distinguer 'trouver une information existante' (Moteur) et 'construire un document qui n'existe pas encore' (IAG) est une compétence informationnelle clé",
            "Le contexte local et l'expérience vécue sont des dimensions que seuls les Pairs peuvent apporter",
            "Les sources officielles et les experts (bibliothécaires) gardent une valeur irremplaçable",
            "La réflexivité sur nos choix de sources est un enjeu professionnel : nous formons les élèves à cette compétence",
        ],
    },
};
