import { kanjiInterface } from "../interfaces/kanjiInterface"

export function getThreeRandomNumbers(allCards: { event: string, date: string }[] | kanjiInterface[], currentCardId: number): Set<number> {
    const randomNumbers: Set<number> = new Set<number>()
    while (randomNumbers.size !== 3) {
        const randomizedNumber: number = Math.floor(Math.random() * allCards.length)
        if (randomizedNumber !== currentCardId) {
            randomNumbers.add(randomizedNumber)
        }
    }
    return randomNumbers
}
