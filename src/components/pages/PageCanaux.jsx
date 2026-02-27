import { canaux } from "../../data/cards-data";
import { CanalCard } from "../cards";
import { PrintPage } from "./PrintPage";
import { CardGrid } from "./CardGrid";

/**
 * PageCanaux -- page 1 du PDF materiel.
 *
 * Props :
 *   accentColor {string} -- couleur d'accent canal issue de la palette active
 */
export function PageCanaux({ accentColor }) {
    return (
        <PrintPage
            title={`Canaux d'information \u2014 Activit\u00E9 Canaux crois\u00E9s`}
            subtitle="Decoupez ces 4 cartes pour materialiser les colonnes de tri"
        >
            <CardGrid>
                {canaux.map((canal) => (
                    <CanalCard
                        key={canal.id}
                        canal={canal}
                        accentColor={accentColor}
                    />
                ))}
            </CardGrid>
        </PrintPage>
    );
}
