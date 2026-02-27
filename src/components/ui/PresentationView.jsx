import { useState, useEffect, useRef } from "react";
import {
    ChevronLeft,
    ChevronRight,
    X,
    ClipboardList,
    Radio,
} from "lucide-react";
import { cards, canaux } from "../../data/cards-data";

/**
 * PresentationView -- mode presentation pour videoprojecteur.
 *
 * Raccourcis clavier :
 *   Echap           -- quitter
 *   ArrowRight / -> -- carte suivante
 *   ArrowLeft  / <- -- carte precedente
 *
 * Props :
 *   palette   {object} -- palette de couleurs active
 *   cardTexts {object} -- { [id]: string } textes personnalises
 *   onExit    {func}   -- callback pour quitter
 */
export function PresentationView({ palette, cardTexts = {}, onExit }) {
    const [index, setIndex] = useState(0);

    const card = cards[index];
    const text = cardTexts[card.id] ?? card.text;
    const total = cards.length;

    /*
     * onExitRef -- ref stable pointant toujours vers le onExit courant.
     * Permet d'utiliser onExit dans le useEffect sans le mettre en
     * dependance (evite les re-bindings inutiles a chaque render parent).
     */
    const onExitRef = useRef(onExit);
    useEffect(() => {
        onExitRef.current = onExit;
    }, [onExit]);

    /*
     * Raccourcis clavier.
     * setIndex est stable (garantie React), total est une constante --
     * le tableau de dependances vide [] est ici correct et exhaustif.
     */
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onExitRef.current();
            if (e.key === "ArrowRight") setIndex((i) => (i + 1) % total);
            if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + total) % total);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="no-print fixed inset-0 bg-gray-950 flex flex-col pt-20 z-40">
            {/* -- En-tete -------------------------------------------------- */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-gray-800">
                <div className="flex items-center gap-2 text-gray-400">
                    <ClipboardList size={16} />
                    <span className="text-sm font-medium">
                        Mode presentation
                    </span>
                </div>

                <span className="text-gray-500 text-sm tabular-nums">
                    {index + 1} / {total}
                </span>

                <button
                    onClick={onExit}
                    className="flex items-center gap-2 text-white
                               bg-gray-700 hover:bg-red-700
                               transition px-4 py-2 rounded-lg text-sm font-medium"
                >
                    <X size={14} />
                    Quitter
                    <kbd className="ml-1 px-1.5 py-0.5 text-xs bg-gray-600 rounded font-mono">
                        Echap
                    </kbd>
                </button>
            </div>

            {/* -- Carte centrale ------------------------------------------- */}
            <div className="flex-1 flex items-center justify-center px-8">
                <div className="max-w-2xl w-full">
                    <div
                        className="flex items-center gap-2 mb-4"
                        style={{ color: palette.besoin }}
                    >
                        <ClipboardList size={14} strokeWidth={2.5} />
                        <span className="text-sm font-bold tracking-wide">
                            CAS PRATIQUE
                        </span>
                        <span className="ml-auto text-gray-600 text-xs tabular-nums">
                            carte #{card.id}
                        </span>
                    </div>

                    <p className="text-white text-2xl leading-relaxed font-light">
                        {text}
                    </p>
                </div>
            </div>

            {/* -- Navigation ---------------------------------------------- */}
            <div className="flex items-center justify-center gap-4 pb-6">
                <button
                    onClick={() => setIndex((i) => (i - 1 + total) % total)}
                    className="flex items-center gap-1 text-gray-400 hover:text-white
                               transition px-5 py-2.5 rounded-lg hover:bg-gray-800 text-sm"
                >
                    <ChevronLeft size={16} />
                    Precedente
                </button>

                <div className="flex gap-1.5">
                    {cards.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className="w-2 h-2 rounded-full transition-colors"
                            style={{
                                backgroundColor:
                                    i === index ? palette.besoin : "#374151",
                            }}
                            aria-label={`Carte ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={() => setIndex((i) => (i + 1) % total)}
                    className="flex items-center gap-1 text-gray-400 hover:text-white
                               transition px-5 py-2.5 rounded-lg hover:bg-gray-800 text-sm"
                >
                    Suivante
                    <ChevronRight size={16} />
                </button>
            </div>

            {/* -- Bandeau canaux de reference ------------------------------ */}
            <div className="border-t border-gray-800 px-6 py-3">
                <p className="text-gray-600 text-xs mb-2 text-center uppercase tracking-wider">
                    Canaux de reference
                </p>
                <div className="flex items-center justify-center gap-6">
                    {canaux.map((canal) => (
                        <div
                            key={canal.id}
                            className="flex items-center gap-1.5"
                        >
                            <Radio size={11} style={{ color: palette.canal }} />
                            <span className="text-gray-400 text-xs">
                                {canal.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
