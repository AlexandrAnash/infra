import {TaskModel} from '../app/taskModel';

describe('Test task model', function() {
    it('should be right a constructor', function() {
        let taskModel = new TaskModel(1,2,3);
        expect(taskModel.red).toBe(1);
        expect(taskModel.green).toBe(2);
        expect(taskModel.blue).toBe(3);
    });
    
    it('should be throw if bad params', function() {
        expect(function() {
            new TaskModel(2,2,3);
        }).toThrowError('no valid input data: red = 2, green = 2, blue = 3');
    });
});