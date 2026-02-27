/**
 * CardShell -- enveloppe visuelle commune aux 3 types de cartes.
 *
 * Approche retenue pour les lignes de decoupe :
 *   Un wrapper externe avec une bordure en pointilles noirs joue
 *   le role des lignes de decoupe. Ce wrapper ajoute 5px de padding
 *   de chaque cote, ce qui fait deborder les pointilles de 5px
 *   autour de la carte -- exactement comme dans PDFKit.
 *
 *   Cette approche est plus fiable a l'impression que les divs
 *   absolues a coordonnees negatives (qui sont clippees par certains
 *   moteurs de rendu print malgre overflow:visible).
 *
 * Dimensions finales avec le wrapper :
 *   - Carte : 90mm x 60mm
 *   - Wrapper : ~100mm x ~70mm (carte + 5px de chaque cote)
 */
export function CardShell({ accentColor, children }) {
    return (
        /*
         * Wrapper de decoupe -- bordure pointillee noire
         * Le padding de 5px cree l'espace entre la carte et les pointilles.
         * background transparent pour ne pas masquer le fond de page.
         */
        <div
            className="print:break-inside-avoid"
            style={{
                display: "inline-block",
                padding: "5px",
                border: "0.5px dashed #000",
                background: "transparent",
                boxSizing: "border-box",
            }}
        >
            {/* Carte principale -- 90mm x 60mm */}
            <div
                className="relative bg-white"
                style={{
                    width: "90mm",
                    height: "60mm",
                    border: "1px solid #333",
                    boxSizing: "border-box",
                }}
            >
                {/* Accent colore epais -- 2px inset */}
                <div
                    style={{
                        position: "absolute",
                        top: 2,
                        left: 2,
                        right: 2,
                        bottom: 2,
                        border: `3px solid ${accentColor}`,
                        pointerEvents: "none",
                        boxSizing: "border-box",
                    }}
                />

                {/* Bordure interne fine -- 5px inset */}
                <div
                    style={{
                        position: "absolute",
                        top: 5,
                        left: 5,
                        right: 5,
                        bottom: 5,
                        border: "1px solid #333",
                        pointerEvents: "none",
                        boxSizing: "border-box",
                    }}
                />

                {/* Contenu -- padding 14px */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        padding: "14px",
                        display: "flex",
                        flexDirection: "column",
                        boxSizing: "border-box",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
