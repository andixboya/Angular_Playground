class Box<T>{

    private _boxes: Array<T>
    
    constructor() {
        this._boxes = []
    }

    public add(element: T) {
        this._boxes.push(element)

    }
    public remove(): void {
        this._boxes.shift();
    }
    public get count(): number {
        return this._boxes.length;
    }
}