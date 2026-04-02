import { useEffect, useRef } from "react";
import {
    X,
    LayoutGrid,
    FileText,
    BookOpen,
    Palette,
    PenLine,
    Monitor,
    Printer,
    Download,
    Clock,
    Users,
    Radio,
    ClipboardList,
} from "lucide-react";

/**
 * HelpModal -- modal d'aide contextuelle.
 *
 * Sections (ordre pedagogique) :
 *   1. A propos de l'activite
 *   2. Deroulement en 6 phases
 *   3. Documents disponibles
 *   4. Fonctionnalites de l'interface
 *   5. Generer le PDF
 *
 * Props :
 *   onClose {func} -- callback de fermeture
 */
export function HelpModal({ onClose }) {
    const onCloseRef = useRef(onClose);
    const panelRef = useRef(null);
    useEffect(() => {
        panelRef.current?.focus();
    }, []);

    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);

    /* Fermeture au clavier (Echap) */
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onCloseRef.current();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    return (
        /* Fond semi-transparent cliquable */
        <div
            className="no-print fixed inset-0 z-[60] flex items-start justify-center
                       bg-black/50 backdrop-blur-sm overflow-y-auto py-8 px-4"
            onClick={onClose}
        >
            {/* Panneau central -- stoppe la propagation du clic */}
            <div
                ref={panelRef}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-labelledby="help-modal-title"
                className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* En-tete */}
                <div className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white rounded-t-2xl">
                    <div>
                        <h2
                            id="help-modal-title"
                            className="font-bold text-lg leading-tight"
                        >
                            Canaux croisés
                        </h2>
                        <p className="text-gray-300 text-sm">
                            Débattre pour mieux choisir
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition p-1 rounded-lg
                                   hover:bg-gray-700"
                        aria-label="Fermer l'aide"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="p-6 space-y-7">
                    {/* ---- 1. A propos ---------------------------------- */}
                    <HelpSection title="A propos de l'activité">
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Canaux croisés</strong> est une activité
                            collaborative de formation d&rsquo;enseignants du
                            premier degré. Par groupes de 4 à 6 personnes, les
                            participants trient des{" "}
                            <em>cartes cas pratiques</em> sous quatre canaux
                            d&rsquo;information : IAG, Moteur de recherche,
                            Bibliothèque, Pairs. Les désaccords de placement
                            déclenchent des débats sur les critères de choix
                            d&rsquo;une source professionnelle.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-3">
                            <Chip icon={<Clock size={12} />}>
                                30/50 minutes
                            </Chip>
                            <Chip icon={<Users size={12} />}>
                                4/6 par groupe
                            </Chip>
                            <Chip icon={<ClipboardList size={12} />}>
                                12 cartes cas pratiques
                            </Chip>
                            <Chip icon={<Radio size={12} />}>
                                4 canaux d&rsquo;information
                            </Chip>
                        </div>
                    </HelpSection>

                    {/* ---- 2. Deroulement ------------------------------- */}
                    <HelpSection title="Déroulement en 6 phases">
                        <div className="space-y-2">
                            {PHASES.map((phase, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span
                                        className="shrink-0 w-6 h-6 rounded-full bg-gray-100
                                                   text-gray-600 flex items-center justify-center
                                                   text-xs font-bold mt-0.5"
                                    >
                                        {i + 1}
                                    </span>
                                    <div>
                                        <span className="font-medium text-gray-800">
                                            {phase.name}
                                        </span>
                                        <span className="text-gray-400 text-xs ml-2">
                                            {phase.duration}
                                        </span>
                                        <p className="text-sm text-gray-600 mt-0.5">
                                            {phase.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </HelpSection>

                    {/* ---- 3. Documents disponibles --------------------- */}
                    <HelpSection title="Documents disponibles">
                        <div className="space-y-3">
                            <DocRow
                                icon={<LayoutGrid size={15} />}
                                color="#C0392B"
                                title="Matériel (4 pages)"
                                desc="Cartes canaux, cartes cas pratiques (2 pages), cartes vierges"
                            />
                            <DocRow
                                icon={<FileText size={15} />}
                                color="#0066CC"
                                title="Règles détaillées (4 pages)"
                                desc="Déroulement, conseils d'animation, erreurs fréquentes, variantes"
                            />
                            <DocRow
                                icon={<BookOpen size={15} />}
                                color="#006600"
                                title="Guide animateur complet (5+ pages)"
                                desc="Attendus par carte, justifications, nuances, messages-clés"
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-3 bg-gray-50 rounded-lg p-2">
                            Chaque document peut être activé ou désactivé
                            indépendamment dans le panneau{" "}
                            <strong>Paramètres</strong>. Imprimez uniquement ce
                            dont vous avez besoin.
                        </p>
                        {/* Lien telechargement docs Word -- a activer quand les fichiers sont dans public/docs/ */}
                        {/* <div className="mt-3 flex gap-2">
                            <DownloadLink href="/canaux-croises/docs/regle-complete.docx">
                                Regle complete (.docx)
                            </DownloadLink>
                            <DownloadLink href="/canaux-croises/docs/regle-courte.docx">
                                Version courte (.docx)
                            </DownloadLink>
                        </div> */}
                    </HelpSection>

                    {/* ---- 4. Fonctionnalites interface ----------------- */}
                    <HelpSection title="Fonctionnalités de l'interface">
                        <div className="space-y-2.5">
                            <FeatureRow
                                icon={<Palette size={14} />}
                                title="Palette de couleurs"
                            >
                                3 palettes disponibles : standard, accessible
                                daltoniens rouge-vert, noir et blanc économique.
                            </FeatureRow>
                            <FeatureRow
                                icon={<PenLine size={14} />}
                                title="Mode édition"
                            >
                                Cliquez dans n&rsquo;importe quelle carte pour
                                adapter son texte à votre contexte de
                                circonscription. Les modifications sont visibles
                                à l&rsquo;impression.
                            </FeatureRow>
                            <FeatureRow
                                icon={<Monitor size={14} />}
                                title="Mode présentation"
                            >
                                Affichage plein écran sur fond sombre pour
                                vidéoprojecteur. Navigation au clavier (← →) et
                                touche Echap pour quitter.
                            </FeatureRow>
                        </div>
                    </HelpSection>

                    {/* ---- 5. Generer le PDF ---------------------------- */}
                    <HelpSection title="Générer le PDF">
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                            <div className="flex items-center gap-1.5 mb-2">
                                <Printer size={13} className="text-amber-600" />
                                <p className="font-medium text-amber-800 text-sm">
                                    Réglages Chrome recommandés
                                </p>
                            </div>
                            <ul className="space-y-1 text-sm text-amber-900">
                                <li className="flex items-start gap-1.5">
                                    <span className="text-amber-500 shrink-0">
                                        •
                                    </span>
                                    Format&nbsp;: <strong>A4</strong>,
                                    marges&nbsp;: <strong>Aucune</strong>
                                </li>
                                <li className="flex items-start gap-1.5">
                                    <span className="text-amber-500 shrink-0">
                                        •
                                    </span>
                                    Cocher{" "}
                                    <strong>Graphiques en arrière-plan</strong>{" "}
                                    (indispensable pour les bordures colorées)
                                </li>
                                <li className="flex items-start gap-1.5">
                                    <span className="text-amber-500 shrink-0">
                                        •
                                    </span>
                                    Navigateur conseillé&nbsp;:{" "}
                                    <strong>Chrome ou Chromium</strong>
                                </li>
                            </ul>
                        </div>
                    </HelpSection>
                </div>

                {/* Pied de modal */}
                <div className="px-6 py-3 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-xs text-gray-400">
                        Outil conçu par{" "}
                        <a
                            href="https://micetf.fr"
                            className="text-gray-500 hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            MiCetF
                        </a>{" "}
                        &mdash; Frédéric Misery
                    </p>
                    <button
                        onClick={onClose}
                        className="text-sm font-medium px-4 py-1.5 bg-gray-800
                                   text-white rounded-lg hover:bg-gray-900 transition"
                    >
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    );
}

/* --- Composants internes -------------------------------------------- */

function HelpSection({ title, children }) {
    return (
        <div>
            <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                <span className="flex-1 h-px bg-gray-100" />
                {title}
                <span className="flex-1 h-px bg-gray-100" />
            </h3>
            <div className="text-sm">{children}</div>
        </div>
    );
}

function DocRow({ icon, color, title, desc }) {
    return (
        <div className="flex items-start gap-2.5">
            <span style={{ color }} className="shrink-0 mt-0.5">
                {icon}
            </span>
            <div>
                <p className="font-medium text-gray-800">{title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
            </div>
        </div>
    );
}

function FeatureRow({ icon, title, children }) {
    return (
        <div className="flex items-start gap-2.5">
            <span className="text-gray-400 shrink-0 mt-0.5">{icon}</span>
            <div>
                <p className="font-medium text-gray-800">{title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{children}</p>
            </div>
        </div>
    );
}

function Chip({ icon, children }) {
    return (
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
            {icon}
            {children}
        </span>
    );
}

/* Activer quand les fichiers sont dans public/docs/ */
/* function DownloadLink({ href, children }) {
    return (
        <a
            href={href}
            download
            className="inline-flex items-center gap-1 text-xs text-blue-700
                       hover:text-blue-900 bg-blue-50 hover:bg-blue-100
                       px-2.5 py-1.5 rounded-lg transition"
        >
            <Download size={11} />
            {children}
        </a>
    );
} */

/* --- Donnees statiques ------------------------------------------------ */

const PHASES = [
    {
        name: "Installation",
        duration: "2 min",
        desc: "Placer les 4 cartes canaux en colonnes au centre de la table.",
    },
    {
        name: "Tri silencieux",
        duration: "5 min",
        desc: "Chaque participant place ses 12 cartes sans débattre. Observer les différences.",
    },
    {
        name: "Débat",
        duration: "15 min",
        desc: "Discuter les placements divergents. Créer une zone « Combinaison » si nécessaire.",
    },
    {
        name: "Synthèse",
        duration: "8 min",
        desc: "Photographier le résultat. Lister les critères émergés (rapidité, fiabilité…)",
    },
    {
        name: "Mise en commun",
        duration: "5 min (opt.)",
        desc: "Chaque groupe présente ses 3 cartes les plus débattues et ses critères.",
    },
    {
        name: "Création",
        duration: "15 min (opt.)",
        desc: "Inventer de nouvelles cartes vierges depuis sa propre pratique professionnelle.",
    },
];
