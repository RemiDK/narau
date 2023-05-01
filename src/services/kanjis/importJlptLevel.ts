import { kanjiInterface } from "../../interfaces/kanjiInterface"

export function importJlptLevel(selectedLevel: string): Promise<{ default: kanjiInterface[] }> {
    return new Promise (resolve => {
        switch(selectedLevel) {
            case '5' : 
            import("../../cardsData/kanjis/JLPT5Card.json").then(jlpt5 => {
                resolve(jlpt5)
            })
            break
            
            case '4' :
            import("../../cardsData/kanjis/JLPT4Card.json").then(jlpt4 => {
                resolve(jlpt4)
            })
            break
            
            case '3' :
            import("../../cardsData/kanjis/JLPT3Card.json").then(jlpt3 => {
                resolve(jlpt3)
            })
            break
            
            case '2' :
            import("../../cardsData/kanjis/JLPT2Card.json").then(jlpt2 => {
                resolve(jlpt2)
            })
            break
            
            case '1' :
            import("../../cardsData/kanjis/JLPT1Card.json").then(jlpt1 => {
                resolve(jlpt1)
            })
            break
        }
    })
}