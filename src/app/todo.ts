export class Todo {
    id: string;
    text: string;
    isComplete: boolean;
    constructor(text: string) {
        this.id = new Date().getTime().toString();
        this.text = text;
        this.isComplete = false;
    }
}