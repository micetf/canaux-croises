import { Radio } from "lucide-react";
import { CardShell } from "./CardShell";

/**
 * CanalCard -- carte canal d'information.
 *
 * Changements vs Sprint 2 :
 *   - [C] remplace par icone Radio (lucide-react) -- canal = voie de transmission
 *   - accentColor recu en prop (pilote par la palette choisie dans App)
 *
 * Props :
 *   canal       {object} -- { id, title, examples }
 *   accentColor {string} -- couleur d'accent issue de la palette active
 */
export function CanalCard({ canal, accentColor }) {
    return (
        <CardShell accentColor={accentColor}>
            {/* Label type avec icone */}
            <div
                className="flex items-center justify-center gap-1"
                style={{ color: accentColor }}
            >
                <Radio size={9} strokeWidth={2.5} />
                <p
                    className="font-bold tracking-wide"
                    style={{ fontSize: "7pt" }}
                >
                    CANAL D'INFORMATION
                </p>
            </div>

            {/* Titre -- occupe l'espace central */}
            <p
                className="flex-1 flex items-center justify-center text-center font-medium text-black leading-snug mt-1"
                style={{ fontSize: "10pt" }}
            >
                {canal.title}
            </p>

            {/* Exemples */}
            <p
                className="text-center text-gray-500"
                style={{ fontSize: "7pt" }}
            >
                {canal.examples}
            </p>
        </CardShell>
    );
}
