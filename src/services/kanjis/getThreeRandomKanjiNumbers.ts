import { kanjiInterface } from "../../interfaces/kanjiInterface"
import { checkIfSameCard } from "./checkIfSameCard"

export function getThreeRandomKanjiNumbers(allCards: kanjiInterface[], selectedKanji: kanjiInterface, prononciation: string): Set<number> {
    const randomNumbers: Set<number> = new Set<number>()
    while (randomNumbers.size !== 3) {
        const randomizedNumber: number = Math.floor(Math.random() * allCards.length)
        if (randomizedNumber !== selectedKanji.id && !checkIfSameCard(selectedKanji, allCards[randomizedNumber], prononciation)) {
            randomNumbers.add(randomizedNumber)
        }
    }
    return randomNumbers
}
