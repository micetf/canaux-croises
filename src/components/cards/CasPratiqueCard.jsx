import { ClipboardList } from "lucide-react";
import { CardShell } from "./CardShell";

/**
 * CasPratiqueCard -- carte cas pratique.
 *
 * Changements vs Sprint 2 :
 *   - [CP] remplace par icone ClipboardList
 *   - Numero de carte (#id) supprime -- evite le biais de classement
 *   - accentColor recu en prop
 *   - Mode edition : le texte devient un textarea modifiable
 *
 * Props :
 *   card        {object}   -- { id, text }
 *   accentColor {string}   -- couleur d'accent issue de la palette
 *   editable    {bool}     -- active le mode edition inline
 *   onTextChange {func}    -- callback(id, newText) appele a chaque frappe
 */
export function CasPratiqueCard({
    card,
    accentColor,
    editable = false,
    onTextChange,
}) {
    return (
        <CardShell accentColor={accentColor}>
            {/* Label type avec icone */}
            <div
                className="flex items-center gap-1"
                style={{ color: accentColor }}
            >
                <ClipboardList size={9} strokeWidth={2.5} />
                <p className="font-bold" style={{ fontSize: "7pt" }}>
                    CAS PRATIQUE
                </p>
            </div>

            {/* Texte -- statique ou editable selon le mode */}
            {editable ? (
                <textarea
                    className="flex-1 mt-2 text-black leading-relaxed resize-none
                               bg-yellow-50 border border-dashed border-yellow-400
                               rounded p-1 w-full focus:outline-none focus:border-yellow-500"
                    style={{ fontSize: "8.5pt" }}
                    value={card.text}
                    onChange={(e) =>
                        onTextChange && onTextChange(card.id, e.target.value)
                    }
                />
            ) : (
                <p
                    className="flex-1 flex items-start text-black leading-relaxed mt-2"
                    style={{ fontSize: "9.5pt" }}
                >
                    {card.text}
                </p>
            )}
        </CardShell>
    );
}
