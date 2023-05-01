import { kanjiInterface } from "../interfaces/kanjiInterface"

export function shuffleCards(cards: number[] | kanjiInterface[]) {
    const shuffledArray = [...cards]
    for(let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const savedCard = shuffledArray[i]
        shuffledArray[i] = shuffledArray[j]
        shuffledArray[j] = savedCard
    }
    return shuffledArray
}