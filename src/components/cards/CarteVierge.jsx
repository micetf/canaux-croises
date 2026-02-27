import { PenLine } from "lucide-react";
import { CardShell } from "./CardShell";

/**
 * CarteVierge -- carte cas pratique vierge a inventer.
 *
 * Changements vs Sprint 2 :
 *   - [CP] remplace par icone PenLine (evoque l'ecriture / l'invention)
 *   - accentColor recu en prop
 *
 * Props :
 *   accentColor {string} -- couleur d'accent issue de la palette
 */
export function CarteVierge({ accentColor }) {
    return (
        <CardShell accentColor={accentColor}>
            {/* Label type avec icone */}
            <div
                className="flex items-center gap-1"
                style={{ color: accentColor }}
            >
                <PenLine size={9} strokeWidth={2.5} />
                <p className="font-bold" style={{ fontSize: "7pt" }}>
                    CAS PRATIQUE -- A INVENTER
                </p>
            </div>

            {/* Consigne */}
            <p
                className="text-gray-400 mt-1 leading-snug"
                style={{ fontSize: "7pt" }}
            >
                Redigez un besoin professionnel. Les autres devineront votre
                canal !
            </p>

            {/* 3 lignes d'ecriture */}
            <div className="flex-1 flex flex-col justify-around mt-2 mb-1">
                {[0, 1, 2].map((i) => (
                    <div key={i} style={{ borderBottom: "0.5px solid #ccc" }} />
                ))}
            </div>

            {/* Zone a rabattre */}
            <div>
                <div
                    style={{
                        borderTop: `1px dashed ${accentColor}`,
                        marginBottom: "3px",
                    }}
                />
                <p
                    className="text-center"
                    style={{ fontSize: "5.5pt", color: accentColor }}
                >
                    {"\u2702"}&nbsp; Rabattre avant de montrer la carte aux
                    autres
                </p>
                <div className="flex items-center gap-1 mt-1">
                    <span
                        className="text-gray-600 shrink-0"
                        style={{ fontSize: "7pt" }}
                    >
                        Canal vise&nbsp;:
                    </span>
                    <div
                        className="flex-1"
                        style={{ borderBottom: "0.5px solid #555" }}
                    />
                </div>
            </div>
        </CardShell>
    );
}
