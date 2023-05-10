import { vocabularyInterface } from "@/interfaces/vocabularyInterface"

export function importSelectedList(selectedList: string): Promise<{ default: vocabularyInterface[] }> {
    return new Promise (resolve => {
        switch(selectedList) {
            case '5' : 
            import("../../cardsData/vocabulary/JLPT5Card.json").then(jlpt5 => {
                resolve(jlpt5)
            })
            break
            
            case '4' :
            import("../../cardsData/vocabulary/JLPT4Card.json").then(jlpt4 => {
                resolve(jlpt4)
            })
            break
            
            case '3' :
            import("../../cardsData/vocabulary/JLPT3Card.json").then(jlpt3 => {
                resolve(jlpt3)
            })
            break
            
            case '2' :
            import("../../cardsData/vocabulary/JLPT2Card.json").then(jlpt2 => {
                resolve(jlpt2)
            })
            break
            
            case '1' :
            import("../../cardsData/vocabulary/JLPT1Card.json").then(jlpt1 => {
                resolve(jlpt1)
            })
            break

            case '0' : 
            import("../../cardsData/vocabulary/customVocabulary.json").then(list => {
                resolve(list)
            })
            break
        }
    })
}