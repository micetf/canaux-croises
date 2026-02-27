import { CarteVierge } from "../cards";
import { PrintPage } from "./PrintPage";
import { CardGrid } from "./CardGrid";

const NB_CARTES = 6;

/**
 * PageCartesVierges -- page 4 du PDF materiel.
 *
 * Props :
 *   accentColor {string} -- couleur d'accent vierge issue de la palette
 */
export function PageCartesVierges({ accentColor }) {
    return (
        <PrintPage
            title="Cartes a inventer \u2014 Activit\u00E9 Canaux crois\u00E9s"
            subtitle="Choisissez secretement un canal, redigez un cas pratique, rabattez la zone canal, faites deviner les autres !"
            noBreak
        >
            <CardGrid>
                {Array.from({ length: NB_CARTES }).map((_, i) => (
                    <CarteVierge key={i} accentColor={accentColor} />
                ))}
            </CardGrid>
        </PrintPage>
    );
}
