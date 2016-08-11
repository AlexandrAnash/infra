import {TaskFactory} from './TaskFactory';
export class TaskModel {
    constructor(red, green, blue) {
        if (TaskFactory.isCorrect([red, green, blue]) === false ) {
            throw new Error(`no valid input data: red = ${red}, green = ${green}, blue = ${blue}`);
        } 
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
} 