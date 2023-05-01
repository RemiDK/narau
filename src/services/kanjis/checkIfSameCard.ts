import { kanjiInterface } from "../../interfaces/kanjiInterface";

export function checkIfSameCard(selectedKanji: kanjiInterface, otherResponseKanji: kanjiInterface, prononciation: string): boolean {
    if(prononciation === "onyomi") {
        if (selectedKanji.onyomi === otherResponseKanji.onyomi) {
            return true
        } else {
            return false
        }
    } else {
        if (selectedKanji.kunyomi === otherResponseKanji.kunyomi) {
            return true
        } else {
            return false
        }
    }
}