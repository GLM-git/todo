export class Todo {
    
    //public in the constructor makes the property avialble to the class
    constructor(
        public text: string,
        public completed: boolean = false
    ) {}
}