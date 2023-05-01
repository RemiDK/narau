export interface kanjiInterface {
    "id": number,
    "kanji": string,
    "level": number,
    "meaning": string,
    "onyomi": string,
    "onyomiExample":
        {
            "example": string,
            "translation": string
        }[],
    "kunyomi": string,
    "kunyomiExample": {
        "example": string,
        "translation": string
    }[]
}