export interface vocabularyInterface {
    "id": number,
    "word": string,
    "kana": string,
    "translation": string,
    "example":
    {
        "sentence": string,
        "translation": string
    }[]
}