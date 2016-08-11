
const colorEnum = {
    red: 0,
    green: 1,
    blue: 2
};
let answer;
function json(response) { return response.json(); }

function getData() {
    fetch('/getTestData').then(json).then((res) => {
        answer = [];
        const itemDataHtml = res.map((data, keyMap) => {
            answer.push([]);
            let render = '';
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    answer[keyMap].push(undefined);
                    render += renderButton(data[key], keyMap);
                }
            }
            return renderItem(render);
        }).join('');
        const element = document.querySelector('.items');
        element.innerHTML = renderTask();
        element.innerHTML += itemDataHtml;

    });
}
function renderTask() {
    return `
    <h3 class="task-header">
    В каждой строке нажмите на цвета в следующей последовательности:
    <div class="task">
        <span class="task__item">Красный</span>
        <span class="task__item">Зеленый</span>
        <span class="task__item">Синий</span>
    </div>
    </h3>`;
}
function renderButton(color, key) {
    let style = 'btn btn__color btn__color_';
    switch (color) {
    case colorEnum.red:
        style += 'red';
        break;
    case colorEnum.green:
        style += 'green';
        break;
    case colorEnum.blue:
        style += 'blue';
        break;
    default:
        break;
    }
    return `
        <button class="${style}" 
                data-group-id="${key}"
                data-element-id="${color}"
                onclick="clickColor(event)">
        </button>`;
}
function clickColor(element) {
    const dataset = element.target.dataset;
    let group = answer[dataset.groupId];
    let elmId = Number(dataset.elementId);
    if (group[elmId]) return;
    if (Number(elmId) === colorEnum.red) {
        return done();
    }
    if (answer[dataset.groupId][elmId-1] !== undefined) {
        return done();
    } else {
        return error(dataset);
    }

    function done() {
        group[elmId] = elmId;
        element.target.classList.add('btn__color_done');
        if (checkDone()) {
            alert('Вы молодец!');
        }
    }

}

function error(data) {
    fetch('/log', {
        method: 'post',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    });
}
function checkDone() {
    let isDone = true;
    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < answer[i].length; j++) {
            if (answer[i][j] === undefined) {
                isDone = false;
                break;
            }
        }
        if (isDone === false) break;
    }
    return isDone;
}
function renderData(data) {
    return `<div class="data__item">
                ${data}
            </div>`;
}
function renderItem(name) {
    return `<div class="item">
                ${name}
            </div>`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const actionControls = document.querySelector('.action-control');
    actionControls.querySelectorAll('.btn-error').forEach((element) => {
        element.addEventListener('click', (event) => {
            error({message: 'Проверка логирования!'});
        });
    });
    actionControls.querySelectorAll('.btn-warn').forEach((element) => {
        element.addEventListener('click', (event) => {
            getData();
        });
    });
});