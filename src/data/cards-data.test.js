import { describe, it, expect } from "vitest";
import { cards, canaux, pedagogicalInfo } from "./cards-data.js";

describe("canaux", () => {
    it("contient exactement 4 canaux", () => {
        expect(canaux).toHaveLength(4);
    });
    it("chaque canal a id, title, examples", () => {
        canaux.forEach((c) => {
            expect(c).toHaveProperty("id");
            expect(c).toHaveProperty("title");
            expect(c).toHaveProperty("examples");
        });
    });
});

describe("cards", () => {
    it("contient exactement 12 cartes", () => {
        expect(cards).toHaveLength(12);
    });
    it("les ids sont uniques et continus de 1 à 12", () => {
        const ids = cards.map((c) => c.id);
        expect(ids).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });
    it("chaque carte a un texte non vide contenant J'ai besoin", () => {
        cards.forEach((c) => {
            expect(typeof c.text).toBe("string");
            expect(c.text.length).toBeGreaterThan(20);
            expect(c.text).toMatch(/J'ai besoin/);
        });
    });
});

describe("pedagogicalInfo.expectedAnswers", () => {
    it("couvre les 12 cartes", () => {
        expect(pedagogicalInfo.expectedAnswers).toHaveLength(12);
    });
    it("chaque attendu a les champs obligatoires", () => {
        pedagogicalInfo.expectedAnswers.forEach((a) => {
            expect(a).toHaveProperty("card");
            expect(a).toHaveProperty("mainChannel");
            expect(a).toHaveProperty("rationale");
            expect(a).toHaveProperty("criteria");
            expect(Array.isArray(a.criteria)).toBe(true);
        });
    });
    it("les numéros de cartes des attendus correspondent aux ids de cards", () => {
        const cardIds = cards.map((c) => c.id);
        pedagogicalInfo.expectedAnswers.forEach((a) => {
            expect(cardIds).toContain(a.card);
        });
    });
});

describe("pedagogicalInfo.phases", () => {
    it("contient 6 phases", () => {
        expect(pedagogicalInfo.phases).toHaveLength(6);
    });
    it("Phase 2 est le tri collectif (pas individuel silencieux)", () => {
        expect(pedagogicalInfo.phases[1].name).toBe(
            "Phase 2 - Tri collectif initial"
        );
    });
    it("les matériaux mentionnent PAR GROUPE et non PAR PARTICIPANT", () => {
        const matStr = pedagogicalInfo.materials.join(" ");
        expect(matStr).toContain("PAR GROUPE");
        expect(matStr).not.toContain("PAR PARTICIPANT");
    });
});
