import { CasPratiqueCard } from "../cards";
import { PrintPage } from "./PrintPage";
import { CardGrid } from "./CardGrid";

/**
 * PageCasPratiques -- page generique pour un lot de 6 cartes cas pratiques.
 *
 * Props :
 *   cardSlice    {Array}  -- sous-tableau de cards (6 elements max)
 *   pageNum      {number} -- 1 ou 2 (pour le titre)
 *   noBreak      {bool}   -- transmis a PrintPage
 *   accentColor  {string} -- couleur d'accent issue de la palette
 *   cardTexts    {object} -- { [id]: string } -- textes modifies par l'utilisateur
 *   editable     {bool}   -- active le mode edition inline
 *   onTextChange {func}   -- callback(id, newText)
 */
export function PageCasPratiques({
    cardSlice,
    pageNum,
    noBreak = false,
    accentColor,
    cardTexts = {},
    editable = false,
    onTextChange,
}) {
    const suffix = pageNum > 1 ? " (suite)" : "";

    return (
        <PrintPage
            title={`Cartes Cas pratiques \u2014 Activit\u00E9 Canaux crois\u00E9s${suffix}`}
            subtitle="Triez ces cartes dans les 4 colonnes selon le canal le plus pertinent"
            noBreak={noBreak}
        >
            <CardGrid>
                {cardSlice.map((card) => (
                    <CasPratiqueCard
                        key={card.id}
                        card={{
                            ...card,
                            // Utilise le texte modifie s'il existe, sinon le texte original
                            text: cardTexts[card.id] ?? card.text,
                        }}
                        accentColor={accentColor}
                        editable={editable}
                        onTextChange={onTextChange}
                    />
                ))}
            </CardGrid>
        </PrintPage>
    );
}
