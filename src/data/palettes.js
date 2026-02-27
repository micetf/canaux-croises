/**
 * palettes.js -- definitions des palettes de couleurs disponibles.
 *
 * Chaque palette definit 3 couleurs d'accent :
 *   canal  -- cartes canaux d'information (en-tetes de colonnes)
 *   besoin -- cartes cas pratiques (a trier)
 *   vierge -- cartes vierges (a inventer)
 */

export const PALETTES = {
    default: {
        label: "Rouge / Vert / Orange",
        description: "Palette standard -- fort contraste visuel",
        canal: "#C0392B", // Rouge brique  (Flat UI)
        besoin: "#27AE60", // Vert ardoise  (Flat UI)
        vierge: "#E67E22", // Orange ambre  (Flat UI)
    },
    accessible: {
        label: "Bleu / Vert / Orange",
        description: "Accessible daltoniens rouge-vert (deuteranopie)",
        canal: "#0066CC", // Bleu institutionnel
        besoin: "#006600", // Vert fonce
        vierge: "#FF6600", // Orange vif
    },
    bw: {
        label: "Noir et blanc",
        description: "Impression economique -- cartouche couleur non requis",
        canal: "#1a1a1a",
        besoin: "#1a1a1a",
        vierge: "#1a1a1a",
    },
};

export const DEFAULT_PALETTE_KEY = "default";
