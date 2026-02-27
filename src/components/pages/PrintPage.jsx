/**
 * PrintPage — enveloppe générique d'une page A4.
 *
 * En prévisualisation écran : affiche un rectangle blanc avec ombre
 * reproduisant le format A4 (210mm × 297mm).
 *
 * À l'impression (@media print) : devient exactement une page A4
 * avec saut de page forcé après elle (sauf si `noBreak` est true).
 *
 * Props :
 *   title      {string}  — titre affiché en haut de page
 *   subtitle   {string}  — sous-titre en gris sous le titre
 *   noBreak    {bool}    — désactive le saut de page après (dernière page)
 *   children   {node}    — contenu de la page
 */
export function PrintPage({ title, subtitle, noBreak = false, children }) {
    return (
        <div
            className={[
                // Écran : carte blanche avec ombre
                "bg-white shadow-lg mx-auto",
                // Impression : saut de page après, sauf si noBreak
                noBreak ? "print:break-after-auto" : "print:break-after-page",
            ].join(" ")}
            style={{
                width: "210mm",
                minHeight: "297mm",
                padding: "8mm",
                boxSizing: "border-box",
            }}
        >
            {/* En-tête de page */}
            {title && (
                <div className="mb-4 text-center">
                    <h1
                        className="text-black font-semibold"
                        style={{ fontSize: "14pt" }}
                    >
                        {title}
                    </h1>
                    {subtitle && (
                        <p
                            className="text-gray-500 mt-1"
                            style={{ fontSize: "8pt" }}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            )}

            {/* Contenu */}
            {children}
        </div>
    );
}
