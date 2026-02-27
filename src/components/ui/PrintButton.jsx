/**
 * PrintButton -- bouton flottant pour lancer l'impression.
 *
 * Positionne en bas a droite de l'ecran, masque a l'impression
 * via la classe no-print (definie dans print.css).
 *
 * window.print() declenche la boite de dialogue d'impression
 * du navigateur -- l'utilisateur choisit ensuite
 * "Enregistrer en PDF" ou une imprimante physique.
 */
export function PrintButton() {
    return (
        <div className="no-print fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Bulle d'aide */}
            <p className="bg-white text-gray-500 text-xs px-3 py-1.5 rounded-full shadow border border-gray-200 max-w-xs text-right">
                Reglages Chrome&nbsp;: marges{" "}
                <strong className="text-gray-700">Aucune</strong> + cocher{" "}
                <strong className="text-gray-700">
                    Graphiques en arriere-plan
                </strong>
            </p>

            {/* Bouton principal */}
            <button
                onClick={() => window.print()}
                className="flex items-center gap-2 bg-red-700 hover:bg-red-800 active:bg-red-900
                           text-white font-semibold px-6 py-3 rounded-xl shadow-lg
                           transition-colors duration-150 text-sm"
            >
                <PrinterIcon />
                Generer le PDF
            </button>
        </div>
    );
}

/**
 * PrinterIcon -- icone SVG inline.
 * Pas de dependance a lucide-react ou autre librairie d'icones.
 */
function PrinterIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
        </svg>
    );
}
