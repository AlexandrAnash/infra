'use strict';


/// models 
class TaskModel {
    constructor(red, green, blue) {
        if (TaskFactory.isCorrect([red, green, blue]) === false ) {
            throw new Error(`no valid input data: red = ${red}, green = ${green}, blue = ${blue}`);
        }
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
} 

class TaskFactory {
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

/**
 * @file
 * Сервер приложения. Основан на примере для Heroku
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const pg = require('pg');

const listData = [
    new TaskModel(0,1,2),
    new TaskModel(2,1,0)
];
app.set('port', process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, '../../client-src/app')));
app.use(bodyParser.json());

app.get('/', function(request) {
    console.time('render', request);
    console.timeEnd('render');
});

app.listen(app.get('port'), function() {
    console.log('Cool faces on port', app.get('port'));
});

app.get('/getTestData', function (request, response) {
    response.json(listData);    
});
app.post('/log', function(request, response) {
    console.error('user error ',request.body);
});
