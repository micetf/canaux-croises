import {
    ChevronRight,
    Lightbulb,
    XCircle,
    CheckCircle,
    MessageSquare,
    Clock,
    Users,
    Wrench,
} from "lucide-react";
import { pedagogicalInfo } from "../../data/cards-data";
import { PrintPage } from "./PrintPage";
import { GuideSection, GuidePill } from "./GuideSection";

export function PageRegles() {
    const info = pedagogicalInfo;

    return (
        <>
            {/* ---- PAGE 1 : Deroulement ----------------------------------- */}
            <PrintPage
                title={info.gameTitle}
                subtitle={`${info.duration} \u2022 ${info.mainFormat.groupSize}`}
            >
                <GuideSection title="Objectif" color="#0066CC">
                    <p className="text-gray-700 leading-relaxed">
                        {info.objective}
                    </p>
                </GuideSection>

                <GuideSection title="Materiel necessaire" color="#0066CC">
                    <ul className="space-y-1">
                        {info.materials.map((m, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-1.5 text-gray-700"
                            >
                                <ChevronRight
                                    size={12}
                                    className="text-gray-400 shrink-0 mt-0.5"
                                />
                                {m}
                            </li>
                        ))}
                    </ul>
                </GuideSection>

                <GuideSection title="Deroulement" color="#0066CC">
                    <div className="space-y-3">
                        {info.phases.map((phase, i) => (
                            <div
                                key={i}
                                className="pl-3 border-l-2 border-blue-200"
                            >
                                <div className="flex items-center gap-1.5 mb-0.5">
                                    <Clock
                                        size={11}
                                        className="text-blue-400 shrink-0"
                                    />
                                    <p className="font-semibold text-gray-800">
                                        {phase.name}
                                        <span className="font-normal text-gray-500 ml-2">
                                            ({phase.duration})
                                        </span>
                                    </p>
                                </div>
                                <p className="text-gray-700">
                                    {phase.description}
                                </p>
                                {phase.animatorRole && (
                                    <div className="flex items-start gap-1.5 mt-0.5">
                                        <Users
                                            size={10}
                                            className="text-gray-400 shrink-0 mt-0.5"
                                        />
                                        <p className="text-gray-500 italic">
                                            {phase.animatorRole}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </GuideSection>
            </PrintPage>

            {/* ---- PAGE 2 : Conseils + Criteres --------------------------- */}
            <PrintPage title="Conseils d'animation et criteres de decision">
                <GuideSection title="Conseils d'animation" color="#006600">
                    <ul className="space-y-1.5">
                        {info.tips.map((tip, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-1.5 text-gray-700"
                            >
                                <Lightbulb
                                    size={12}
                                    className="text-green-500 shrink-0 mt-0.5"
                                />
                                {tip}
                            </li>
                        ))}
                    </ul>
                </GuideSection>

                <GuideSection
                    title={info.decisionCriteria.title}
                    color="#006600"
                >
                    <p className="text-gray-500 mb-2 italic">
                        {info.decisionCriteria.description}
                    </p>
                    <div className="space-y-2">
                        {info.decisionCriteria.criteria.map((c, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="shrink-0">
                                    <span className="font-semibold text-gray-800">
                                        {c.name}
                                    </span>
                                    <span className="text-gray-500 ml-1">
                                        -- {c.question}
                                    </span>
                                </div>
                                <div className="flex flex-wrap">
                                    {c.favors.map((f, j) => (
                                        <GuidePill key={j} color="#006600">
                                            {f}
                                        </GuidePill>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </GuideSection>
            </PrintPage>

            {/* ---- PAGE 3 : Erreurs + Debats ------------------------------ */}
            <PrintPage title="Erreurs frequentes et debats attendus">
                <GuideSection
                    title="Erreurs frequentes a anticiper"
                    color="#C0392B"
                >
                    <div className="space-y-2.5">
                        {info.commonPitfalls.map((p, i) => (
                            <div
                                key={i}
                                className="pl-3 border-l-2 border-red-200"
                            >
                                <div className="flex items-start gap-1.5 text-red-700">
                                    <XCircle
                                        size={13}
                                        className="shrink-0 mt-0.5"
                                    />
                                    <p>{p.mistake}</p>
                                </div>
                                <div className="flex items-start gap-1.5 text-green-700 mt-0.5">
                                    <CheckCircle
                                        size={13}
                                        className="shrink-0 mt-0.5"
                                    />
                                    <p>{p.correction}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </GuideSection>

                <GuideSection
                    title="Debats attendus (mise en commun)"
                    color="#C0392B"
                >
                    <div className="space-y-2.5">
                        {info.expectedDebates.map((d, i) => (
                            <div
                                key={i}
                                className="pl-3 border-l-2 border-orange-200"
                            >
                                <div className="flex items-center gap-1.5 mb-0.5">
                                    <MessageSquare
                                        size={11}
                                        className="text-orange-400 shrink-0"
                                    />
                                    <p className="font-semibold text-gray-700">
                                        Carte {d.card}
                                    </p>
                                </div>
                                <p className="text-gray-700">{d.question}</p>
                                {d.keyPoint && (
                                    <div className="flex items-start gap-1.5 mt-0.5">
                                        <Lightbulb
                                            size={11}
                                            className="text-blue-400 shrink-0 mt-0.5"
                                        />
                                        <p className="text-blue-700 italic">
                                            {d.keyPoint}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </GuideSection>
            </PrintPage>

            {/* ---- PAGE 4 : Variantes pedagogiques ----------------------- */}
            <PrintPage title="Variantes pedagogiques" noBreak>
                <p
                    className="text-gray-500 text-center mb-4 italic"
                    style={{ fontSize: "9pt" }}
                >
                    Formats alternatifs pour adapter l'animation a votre
                    contexte
                </p>
                <div className="space-y-5">
                    {info.alternativeFormats.map((v, i) => (
                        <div
                            key={i}
                            className="pl-3 border-l-4 border-blue-300"
                        >
                            <p
                                className="font-semibold text-blue-700"
                                style={{ fontSize: "10pt" }}
                            >
                                {v.name}
                            </p>
                            <div className="flex items-center gap-3 text-gray-500 mb-1">
                                <span className="flex items-center gap-1">
                                    <Clock size={10} />
                                    {v.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Users size={10} />
                                    {v.participants}
                                </span>
                            </div>
                            <p className="text-gray-700 mb-1">
                                {v.description}
                            </p>
                            <div className="flex items-start gap-1.5 text-gray-500">
                                <Wrench size={10} className="shrink-0 mt-0.5" />
                                <p>{v.materials.join(" \u2022 ")}</p>
                            </div>
                            {v.tips && v.tips.length > 0 && (
                                <div className="flex items-start gap-1.5 text-orange-600 mt-1">
                                    <Lightbulb
                                        size={10}
                                        className="shrink-0 mt-0.5"
                                    />
                                    <p>{v.tips[0]}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </PrintPage>
        </>
    );
}
