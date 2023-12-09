export default class Sum {
    a:number;
    b: number
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    get calc() {
        return this.a + this.b;
    }
}

 