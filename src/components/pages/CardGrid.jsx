/**
 * CardGrid -- grille 2 colonnes x n lignes.
 *
 * Chaque carte est desormais encapsulee dans un wrapper de decoupe
 * qui ajoute 5px de padding de chaque cote (soit +10px par carte).
 *
 * Calcul de la largeur de colonne :
 *   carte 90mm + wrapper 5px*2 = 90mm + ~3.78mm = ~93.78mm
 *
 * Calcul du gap :
 *   2 * 93.78mm + gap + 2 * 8mm (marges PrintPage) = 210mm
 *   gap = 210 - 187.56 - 16 = ~6.44mm => on garde 4mm pour de l'air
 *
 * On utilise auto pour les colonnes afin que le wrapper
 * definisse lui-meme sa largeur.
 */
export function CardGrid({ children }) {
    return (
        <div
            className="grid"
            style={{
                gridTemplateColumns: "repeat(2, auto)",
                gap: "4mm",
                justifyContent: "center",
            }}
        >
            {children}
        </div>
    );
}
