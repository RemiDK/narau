export function checkIfAnswerCorrect(selectedAnswerId: number, correctAnswerId: number): boolean {
    return selectedAnswerId === correctAnswerId ? true : false
}