let secondPage = document.getElementById('second');
secondPage.className = 'isInvisible';

function getAnswer(number) {
    let parentAnswers = document.getElementsByClassName('numbers')[0].children;
    for (const i of parentAnswers) {
        if (i.textContent !== number) {
            i.classList.remove('active');
        }
    }
    let answer = document.getElementById(number);
    answer.className = 'active';
    return number
}

function submit() {
    let firstPage = document.getElementById('first');
    let answer = document.getElementsByClassName('active');
    let error = document.getElementById('error');

    if (answer !== undefined || answer !== null) {
        let button = document.createElement('button');
        button.disabled = true;
        error.classList.replace('isInvisible', 'error');
    }
    if (answer) {
        let trueAnswer = 'You selected out '+answer[0].innerText+' of 5';
        console.log(trueAnswer);
        firstPage.classList.add('isInvisible');
        secondPage.classList.remove('isInvisible');
        let tag = document.getElementsByClassName('tag');
        tag[0].innerText = trueAnswer;
    }
}