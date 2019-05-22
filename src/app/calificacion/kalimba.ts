export class Kalimba{
    arr: number[];
    constructor(){
        this.arr=[1,2,3];
    }

    generarNum(){
        this.arr.length=Math.floor(Math.random() * 5) + 1;
    }
   
}