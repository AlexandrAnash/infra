import {TaskFactory} from '../app/TaskFactory';

describe('Test task factory', function() {
    it('should be true if uniq items array', function() {
        expect(TaskFactory.isCorrect([2,1,3])).toBe(true);
    });
    it('should be true if not uniq items array', function() {
        const arrayNotUniq = [
            [1,2,3,3],
            [1,2,1,3],
            [1,1,1,1],
            [3,2,1,3]
        ];
        arrayNotUniq.forEach((array) => {
            expect(TaskFactory.isCorrect(array)).toBe(false);
        });
    });
});