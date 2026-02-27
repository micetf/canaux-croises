import {
    AlertTriangle,
    CheckCircle,
    ChevronRight,
    BookOpen,
} from "lucide-react";
import { pedagogicalInfo } from "../../data/cards-data";
import { PrintPage } from "./PrintPage";
import { GuideSection, GuidePill } from "./GuideSection";

export function PageGuideAnimateur() {
    const info = pedagogicalInfo;

    const CARDS_PER_PAGE = 4;
    const answersPages = [];
    for (let i = 0; i < info.expectedAnswers.length; i += CARDS_PER_PAGE) {
        answersPages.push(info.expectedAnswers.slice(i, i + CARDS_PER_PAGE));
    }

    return (
        <>
            {/* ---- PAGE 1 : Introduction ---------------------------------- */}
            <PrintPage
                title="Guide animateur complet"
                subtitle={`Canaux croises \u2014 ${info.duration}`}
            >
                <GuideSection title="A propos de ce guide" color="#0066CC">
                    <p className="text-gray-700 leading-relaxed">
                        Ce guide fournit les attendus pedagogiques detailles
                        pour chaque carte cas pratique. Il est destine
                        exclusivement a l'animateur -- les participants ne le
                        voient pas.
                    </p>
                </GuideSection>

                <GuideSection title="Code couleur des cartes" color="#0066CC">
                    {[
                        {
                            color: "#C0392B",
                            label: "Cartes CANAUX",
                            desc: "En-tetes de colonnes",
                        },
                        {
                            color: "#27AE60",
                            label: "Cartes CAS PRATIQUES",
                            desc: "A trier par les participants",
                        },
                        {
                            color: "#E67E22",
                            label: "Cartes VIERGES",
                            desc: "A inventer -- Phase 6",
                        },
                    ].map(({ color, label, desc }) => (
                        <div
                            key={color}
                            className="flex items-center gap-2 mb-1.5"
                        >
                            <div
                                className="w-4 h-4 rounded shrink-0"
                                style={{ backgroundColor: color }}
                            />
                            <span className="font-semibold text-gray-800">
                                {label}
                            </span>
                            <span className="text-gray-500">-- {desc}</span>
                        </div>
                    ))}
                </GuideSection>

                <GuideSection title="Cartes les plus debattues" color="#0066CC">
                    <p className="text-gray-700 mb-2">
                        Ces cartes genereront systematiquement des desaccords
                        productifs :
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {info.expectedAnswers
                            .filter(
                                (a) =>
                                    a.alternatives && a.alternatives.length > 0
                            )
                            .map((a) => (
                                <div
                                    key={a.card}
                                    className="border border-orange-200 rounded px-2 py-1 bg-orange-50"
                                >
                                    <span
                                        className="font-semibold text-orange-700"
                                        style={{ fontSize: "8pt" }}
                                    >
                                        Carte {a.card}
                                    </span>
                                    <span
                                        className="text-gray-600 ml-1"
                                        style={{ fontSize: "7.5pt" }}
                                    >
                                        {a.text.substring(0, 40)}...
                                    </span>
                                </div>
                            ))}
                    </div>
                </GuideSection>
            </PrintPage>

            {/* ---- PAGES 2-N : Attendus par carte ------------------------ */}
            {answersPages.map((pageAnswers, pageIdx) => (
                <PrintPage
                    key={pageIdx}
                    title={`Attendus detailles par carte (${pageIdx + 1}/${answersPages.length})`}
                >
                    <div className="space-y-5">
                        {pageAnswers.map((answer) => (
                            <div
                                key={answer.card}
                                className="pl-3 border-l-4 border-green-300 pb-3 border-b border-b-gray-100 last:border-b-0"
                            >
                                {/* En-tete */}
                                <div className="flex items-start justify-between mb-1">
                                    <p
                                        className="font-bold text-gray-800"
                                        style={{ fontSize: "10pt" }}
                                    >
                                        Carte {answer.card}
                                    </p>
                                    <div className="flex flex-wrap justify-end">
                                        <GuidePill color="#27AE60">
                                            {answer.mainChannel}
                                        </GuidePill>
                                        {answer.alternatives &&
                                            answer.alternatives.map(
                                                (alt, i) => (
                                                    <GuidePill
                                                        key={i}
                                                        color="#E67E22"
                                                    >
                                                        {alt}
                                                    </GuidePill>
                                                )
                                            )}
                                    </div>
                                </div>

                                {/* Texte resume */}
                                <p
                                    className="text-gray-500 mb-1.5 italic"
                                    style={{ fontSize: "8pt" }}
                                >
                                    {answer.text}
                                </p>

                                {/* Justification */}
                                <div className="flex items-start gap-1.5 mb-1">
                                    <CheckCircle
                                        size={12}
                                        className="text-green-500 shrink-0 mt-0.5"
                                    />
                                    <p className="text-gray-700">
                                        <span className="font-semibold">
                                            Justification :{" "}
                                        </span>
                                        {answer.rationale}
                                    </p>
                                </div>

                                {/* Criteres */}
                                <div className="flex items-start gap-1.5 mb-1">
                                    <ChevronRight
                                        size={12}
                                        className="text-gray-400 shrink-0 mt-0.5"
                                    />
                                    <p className="text-gray-600">
                                        <span className="font-semibold">
                                            Criteres :{" "}
                                        </span>
                                        {answer.criteria.join(" \u2022 ")}
                                    </p>
                                </div>

                                {/* Nuances */}
                                {answer.nuances && (
                                    <div className="flex items-start gap-1.5">
                                        <AlertTriangle
                                            size={12}
                                            className="text-orange-500 shrink-0 mt-0.5"
                                        />
                                        <p className="text-orange-700">
                                            <span className="font-semibold">
                                                Nuance :{" "}
                                            </span>
                                            {answer.nuances}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </PrintPage>
            ))}

            {/* ---- PAGE FINALE : Messages cles --------------------------- */}
            {info.keySynthesis && (
                <PrintPage title={info.keySynthesis.title} noBreak>
                    <p
                        className="text-gray-500 text-center mb-6 italic"
                        style={{ fontSize: "9pt" }}
                    >
                        Ces messages sont a faire emerger des participants, pas
                        a imposer.
                    </p>
                    <div className="space-y-4">
                        {info.keySynthesis.points.map((point, i) => (
                            <div key={i} className="flex gap-3 items-start">
                                <span
                                    className="shrink-0 w-7 h-7 rounded-full bg-green-100 text-green-700
                                               flex items-center justify-center font-bold text-sm"
                                >
                                    {i + 1}
                                </span>
                                <p className="text-gray-700 leading-relaxed pt-0.5">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 pt-4 border-t border-gray-200 text-center">
                        <div className="flex items-center justify-center gap-1.5 text-gray-400">
                            <BookOpen size={11} />
                            <p style={{ fontSize: "7.5pt" }}>
                                Document genere pour CPC Numerique -- Activite
                                Canaux croises
                            </p>
                        </div>
                    </div>
                </PrintPage>
            )}
        </>
    );
}
