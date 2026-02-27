/**
 * PrintPage — enveloppe générique d'une page A4.
 *
 * En prévisualisation écran : affiche un rectangle blanc avec ombre
 * reproduisant le format A4 (210mm × 297mm).
 *
 * À l'impression (@media print) : devient exactement une page A4
 * avec saut de page forcé après elle (sauf si `noBreak` est true).
 *
 * La page est structurée en colonne flex pour que le pied de page
 * soit toujours collé en bas, quelle que soit la quantité de contenu.
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
                display: "flex",
                flexDirection: "column",
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

            {/* Contenu — occupe tout l'espace disponible */}
            <div style={{ flex: 1 }}>{children}</div>

            {/* Pied de page — collé en bas de chaque page A4 */}
            <div
                className="mt-4 pt-2 text-center text-gray-400"
                style={{
                    borderTop: "0.5px solid #e5e7eb",
                    fontSize: "6.5pt",
                }}
            >
                Document généré par{" "}
                <a
                    href="https://micetf.fr/canaux-croises"
                    className="text-gray-500"
                    style={{ textDecoration: "none" }}
                >
                    https://micetf.fr/canaux-croises
                </a>{" "}
                — outil conçu par Frédéric Misery
            </div>
        </div>
    );
}
