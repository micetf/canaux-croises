/**
 * GuideSection -- bloc de section avec titre et contenu.
 * Composant interne utilise par PageRegles et PageGuideAnimateur.
 *
 * Props :
 *   title    {string}  -- titre de la section
 *   color    {string}  -- couleur du titre (defaut gris fonce)
 *   children {node}
 */
export function GuideSection({ title, color = "#1a1a1a", children }) {
    return (
        <div className="mb-5">
            <h2
                className="font-semibold mb-2 pb-1 border-b border-gray-200"
                style={{ fontSize: "11pt", color }}
            >
                {title}
            </h2>
            <div style={{ fontSize: "9pt" }}>{children}</div>
        </div>
    );
}

/**
 * GuidePill -- pastille coloree (canal attendu, critere...).
 */
export function GuidePill({ children, color = "#0066CC" }) {
    return (
        <span
            className="inline-block px-2 py-0.5 rounded text-white text-xs mr-1 mb-1"
            style={{ backgroundColor: color, fontSize: "7.5pt" }}
        >
            {children}
        </span>
    );
}

/**
 * GuideRow -- ligne cle/valeur pour les tableaux de criteres.
 */
export function GuideRow({ label, value, labelColor = "#555" }) {
    return (
        <div className="flex gap-2 mb-1.5">
            <span
                className="shrink-0 font-medium"
                style={{
                    fontSize: "8.5pt",
                    color: labelColor,
                    minWidth: "120px",
                }}
            >
                {label}
            </span>
            <span className="text-gray-700" style={{ fontSize: "8.5pt" }}>
                {value}
            </span>
        </div>
    );
}
