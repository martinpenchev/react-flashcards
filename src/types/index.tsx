export interface JsonObj {
    front: string,
    back: string
};

export interface RootState {
    cards: Array<JsonObj>,
    quizMode: Boolean,
    showBack: Boolean,
    timer: Boolean,
    points: number
}