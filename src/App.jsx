import { useState } from "react";
import { cards } from "./data/cards-data";
import { PALETTES, DEFAULT_PALETTE_KEY } from "./data/palettes";
import {
    PageCanaux,
    PageCasPratiques,
    PageCartesVierges,
} from "./components/pages";
import { PageRegles } from "./components/pages/PageRegles";
import { PageGuideAnimateur } from "./components/pages/PageGuideAnimateur";
import { PrintButton } from "./components/ui/PrintButton";
import { Navbar } from "./components/ui/Navbar";
import { ControlPanel } from "./components/ui/ControlPanel";
import { PresentationView } from "./components/ui/PresentationView";

/**
 * App -- version Sprint 7.
 *
 * Etat supplementaire par rapport au Sprint 6 :
 *   docs -- quels documents sont inclus dans l'impression
 *           { materiel, regles, guide }
 *
 * L'impression produit dans l'ordre :
 *   1. Materiel (si coche)
 *   2. Regles detaillees (si coche)
 *   3. Guide animateur complet (si coche)
 */
export default function App() {
    // -- Documents a imprimer -----------------------------------------------
    const [docs, setDocs] = useState({
        materiel: true,
        regles: false,
        guide: false,
    });

    const handleDocToggle = (key, value) => {
        setDocs((prev) => ({ ...prev, [key]: value }));
    };

    // -- Pages du materiel --------------------------------------------------
    const [pages, setPages] = useState({
        canaux: true,
        cp1: true,
        cp2: true,
        vierges: true,
    });

    const handlePageToggle = (key, value) => {
        setPages((prev) => ({ ...prev, [key]: value }));
    };

    // -- Palette de couleurs ------------------------------------------------
    const [paletteKey, setPaletteKey] = useState(DEFAULT_PALETTE_KEY);
    const palette = PALETTES[paletteKey];

    // -- Mode edition -------------------------------------------------------
    const [editable, setEditable] = useState(false);

    const [cardTexts, setCardTexts] = useState(
        Object.fromEntries(cards.map((c) => [c.id, c.text]))
    );

    const handleTextChange = (id, newText) => {
        setCardTexts((prev) => ({ ...prev, [id]: newText }));
    };

    // -- Mode presentation --------------------------------------------------
    const [presentation, setPresentation] = useState(false);

    // -- Props partagees pour les pages CP ----------------------------------
    const cpProps = {
        accentColor: palette.besoin,
        cardTexts,
        editable,
        onTextChange: handleTextChange,
    };

    // Derniere page du materiel active (pour noBreak correct)
    const lastMaterielPage = pages.vierges
        ? "vierges"
        : pages.cp2
          ? "cp2"
          : pages.cp1
            ? "cp1"
            : "canaux";

    return (
        <>
            {presentation && (
                <PresentationView
                    palette={palette}
                    cardTexts={cardTexts}
                    onExit={() => setPresentation(false)}
                />
            )}

            <Navbar toolName="Canaux croises" />

            <ControlPanel
                docs={docs}
                onDocToggle={handleDocToggle}
                pages={pages}
                onPagesChange={handlePageToggle}
                paletteKey={paletteKey}
                onPaletteChange={setPaletteKey}
                editable={editable}
                onEditableChange={setEditable}
                onPresentation={() => setPresentation(true)}
            />

            <PrintButton />

            <div className="bg-gray-200 pt-20 pb-8 space-y-8 print:bg-white print:pt-0 print:pb-0 print:space-y-0">
                {/* ---- Document 1 : Materiel ----------------------------- */}
                {docs.materiel && pages.canaux && (
                    <PageCanaux accentColor={palette.canal} />
                )}
                {docs.materiel && pages.cp1 && (
                    <PageCasPratiques
                        cardSlice={cards.slice(0, 6)}
                        pageNum={1}
                        {...cpProps}
                    />
                )}
                {docs.materiel && pages.cp2 && (
                    <PageCasPratiques
                        cardSlice={cards.slice(6, 12)}
                        pageNum={2}
                        noBreak={
                            lastMaterielPage === "cp2" &&
                            !docs.regles &&
                            !docs.guide
                        }
                        {...cpProps}
                    />
                )}
                {docs.materiel && pages.vierges && (
                    <PageCartesVierges accentColor={palette.vierge} />
                )}

                {/* ---- Document 2 : Regles detaillees ------------------- */}
                {docs.regles && <PageRegles />}

                {/* ---- Document 3 : Guide animateur --------------------- */}
                {docs.guide && <PageGuideAnimateur />}
            </div>
        </>
    );
}
