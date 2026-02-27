import { useState } from "react";
import {
    Settings,
    X,
    Monitor,
    FileText,
    LayoutGrid,
    BookOpen,
} from "lucide-react";
import { PALETTES } from "../../data/palettes";

/**
 * ControlPanel -- panneau de parametres flottant.
 *
 * Le selecteur de contenu est maintenant structure en 3 documents :
 *   - Materiel (cartes imprimables)
 *   - Regles detaillees
 *   - Guide animateur complet
 *
 * Props :
 *   docs             {object}  -- { materiel, regles, guide } booleen
 *   onDocToggle      {func}    -- callback(key, bool)
 *   pages            {object}  -- { canaux, cp1, cp2, vierges } -- sous-options materiel
 *   onPagesChange    {func}    -- callback(key, bool)
 *   paletteKey       {string}
 *   onPaletteChange  {func}
 *   editable         {bool}
 *   onEditableChange {func}
 *   onPresentation   {func}
 */
export function ControlPanel({
    docs,
    onDocToggle,
    pages,
    onPagesChange,
    paletteKey,
    onPaletteChange,
    editable,
    onEditableChange,
    onPresentation,
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="no-print fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
            {open && (
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 w-80 overflow-hidden">
                    {/* En-tete */}
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-800 text-white">
                        <div className="flex items-center gap-2">
                            <Settings size={15} />
                            <span className="font-semibold text-sm">
                                Parametres
                            </span>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-gray-400 hover:text-white transition"
                            aria-label="Fermer"
                        >
                            <X size={15} />
                        </button>
                    </div>

                    <div className="p-4 space-y-5">
                        {/* -- Section 1 : Documents a imprimer --------------- */}
                        <section>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                Documents a imprimer
                            </p>

                            {/* Document : Materiel */}
                            <DocToggle
                                icon={<LayoutGrid size={14} />}
                                label="Materiel (cartes)"
                                checked={docs.materiel}
                                onChange={(v) => onDocToggle("materiel", v)}
                                color="#C0392B"
                            />
                            {/* Sous-options visibles seulement si materiel coche */}
                            {docs.materiel && (
                                <div className="ml-6 mt-1.5 space-y-1 border-l-2 border-red-100 pl-3">
                                    {[
                                        {
                                            key: "canaux",
                                            label: "Page 1 \u2014 4 cartes canaux",
                                        },
                                        {
                                            key: "cp1",
                                            label: "Page 2 \u2014 Cas pratiques 1-6",
                                        },
                                        {
                                            key: "cp2",
                                            label: "Page 3 \u2014 Cas pratiques 7-12",
                                        },
                                        {
                                            key: "vierges",
                                            label: "Page 4 \u2014 Cartes vierges",
                                        },
                                    ].map(({ key, label }) => (
                                        <label
                                            key={key}
                                            className="flex items-center gap-2 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={pages[key]}
                                                onChange={(e) =>
                                                    onPagesChange(
                                                        key,
                                                        e.target.checked
                                                    )
                                                }
                                                className="w-3.5 h-3.5 accent-red-700 cursor-pointer"
                                            />
                                            <span className="text-xs text-gray-600">
                                                {label}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )}

                            {/* Document : Regles */}
                            <div className="mt-2">
                                <DocToggle
                                    icon={<FileText size={14} />}
                                    label="Regles detaillees"
                                    checked={docs.regles}
                                    onChange={(v) => onDocToggle("regles", v)}
                                    color="#0066CC"
                                />
                            </div>

                            {/* Document : Guide animateur */}
                            <div className="mt-2">
                                <DocToggle
                                    icon={<BookOpen size={14} />}
                                    label="Guide animateur complet"
                                    checked={docs.guide}
                                    onChange={(v) => onDocToggle("guide", v)}
                                    color="#006600"
                                />
                            </div>
                        </section>

                        <hr className="border-gray-100" />

                        {/* -- Section 2 : Palette de couleurs ---------------- */}
                        <section>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                Palette de couleurs
                            </p>
                            <div className="space-y-2">
                                {Object.entries(PALETTES).map(
                                    ([key, palette]) => (
                                        <label
                                            key={key}
                                            className="flex items-start gap-2 cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="palette"
                                                value={key}
                                                checked={paletteKey === key}
                                                onChange={() =>
                                                    onPaletteChange(key)
                                                }
                                                className="mt-0.5 accent-gray-700 cursor-pointer"
                                            />
                                            <div>
                                                <div className="flex items-center gap-1 mb-0.5">
                                                    {[
                                                        "canal",
                                                        "besoin",
                                                        "vierge",
                                                    ].map((type) => (
                                                        <div
                                                            key={type}
                                                            className="w-3 h-3 rounded-full border border-gray-200"
                                                            style={{
                                                                backgroundColor:
                                                                    palette[
                                                                        type
                                                                    ],
                                                            }}
                                                        />
                                                    ))}
                                                    <span className="text-sm text-gray-700 ml-1">
                                                        {palette.label}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-400">
                                                    {palette.description}
                                                </p>
                                            </div>
                                        </label>
                                    )
                                )}
                            </div>
                        </section>

                        <hr className="border-gray-100" />

                        {/* -- Section 3 : Mode edition ----------------------- */}
                        <section>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-700">
                                        Mode edition
                                    </p>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                        Modifier les textes des cartes
                                    </p>
                                </div>
                                <Toggle
                                    checked={editable}
                                    onChange={onEditableChange}
                                />
                            </div>
                            {editable && (
                                <p className="text-xs text-yellow-600 mt-2 bg-yellow-50 rounded p-2">
                                    Cliquez dans une carte pour modifier son
                                    texte. Les modifications s'effacent au
                                    rechargement.
                                </p>
                            )}
                        </section>

                        <hr className="border-gray-100" />

                        {/* -- Section 4 : Mode presentation ----------------- */}
                        <section>
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    onPresentation();
                                }}
                                className="w-full flex items-center justify-center gap-2
                                           bg-gray-800 hover:bg-gray-900 text-white
                                           rounded-lg px-4 py-2.5 text-sm font-medium transition"
                            >
                                <Monitor size={15} />
                                Mode presentation
                            </button>
                            <p className="text-xs text-gray-400 mt-1.5 text-center">
                                Affichage pour videoprojecteur
                            </p>
                        </section>
                    </div>
                </div>
            )}

            {/* Bouton d'ouverture */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className={[
                    "flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg",
                    "font-semibold text-sm transition-colors duration-150",
                    open
                        ? "bg-gray-800 text-white hover:bg-gray-900"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
                ].join(" ")}
            >
                <Settings size={16} />
                Parametres
            </button>
        </div>
    );
}

/**
 * DocToggle -- ligne de document avec checkbox et icone.
 */
function DocToggle({ icon, label, checked, onChange, color }) {
    return (
        <label className="flex items-center gap-2 cursor-pointer group">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="w-4 h-4 cursor-pointer"
                style={{ accentColor: color }}
            />
            <span style={{ color }} className="shrink-0">
                {icon}
            </span>
            <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                {label}
            </span>
        </label>
    );
}

/**
 * Toggle -- interrupteur on/off.
 */
function Toggle({ checked, onChange }) {
    return (
        <button
            role="switch"
            aria-checked={checked}
            onClick={() => onChange(!checked)}
            className="relative inline-flex h-6 w-11 items-center rounded-full
                       transition-colors duration-200 focus:outline-none shrink-0"
            style={{ backgroundColor: checked ? "#C0392B" : "#d1d5db" }}
        >
            <span
                className="inline-block h-4 w-4 transform rounded-full bg-white shadow
                           transition-transform duration-200"
                style={{
                    transform: checked ? "translateX(20px)" : "translateX(4px)",
                }}
            />
        </button>
    );
}
