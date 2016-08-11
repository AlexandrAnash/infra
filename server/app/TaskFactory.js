export class TaskFactory {
    static isCorrect(listData) {
        let result = true;
        listData.forEach((i, ki) => {
            if (result === false) return true;
            listData.forEach((j, kj) => {
                if (ki === kj) return;
                if (i === j) {
                    result = false;
                }
                if (result === false) return true;
            });
        });
        return result;
    }
}