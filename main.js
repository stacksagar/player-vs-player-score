let firstScore = document.querySelector('.firstScore');
let secondScore = document.querySelector('.secondScore');
let input = document.querySelector('#input');
let targetValue = document.querySelector('#targetValue');
let firstPlayerButton = document.querySelector('#firstPlayerButton');
let n = document.querySelector('#n button');
let secondPlayerButton = document.querySelector('#secondPlayerButton');
let resetAll = document.querySelector('#resetAll');
let form = document.querySelector('form');
let messageMain = document.querySelector('.messageMain');
let message = document.querySelector('.message');
let removeMes = document.querySelector('#removeMes');
let body = document.querySelector('body');
let color = document.querySelector('#color');
let loading = document.querySelector('#loading');

let forEdit1stInput = document.querySelector('#forEdit1st input');
let forEdit2ndInput = document.querySelector('#forEdit2nd input');
let forEdit1st = document.querySelector('#forEdit1st');
let forEdit2nd = document.querySelector('#forEdit2nd');
let edit1stName = document.querySelector('#edit1stName');
let edit2ndName = document.querySelector('#edit2ndName');
let firstPName = document.querySelector('#firstPName');
let secondPName = document.querySelector('#secondPName');
let checkButton = document.querySelectorAll('.checkButton');

forEdit1stInput.addEventListener('input', function () {
    firstPName.innerHTML = this.value;
})
forEdit2ndInput.addEventListener('input', function () {
    secondPName.innerHTML = this.value;
})

edit1stName.addEventListener('click', function () {
    forEdit1st.style.transform = 'scaleY(1)';
})
edit2ndName.addEventListener('click', function () {
    forEdit2nd.style.transform = 'scaleY(1)';
})

checkButton[0].addEventListener('click', function () {
    forEdit1st.style.transform = 'scaleY(0)';
})
checkButton[1].addEventListener('click', function () {
    forEdit2nd.style.transform = 'scaleY(0)';
})

let firstRandomScore = 0;
let secondRandomScore = 0;

let winScore = 10;
targetValue.innerHTML = winScore;
firstScore.innerHTML = firstRandomScore;
secondScore.innerHTML = secondRandomScore;
gameOver = false;

function forButton(dScore,rScore,disabledPBtn,removeDisabledPbtn) { 
    if ( rScore >= winScore) {
        dScore.innerHTML = rScore + " <i class='fa fa-check-circle'></i>";
        gameOver = true;  
        secondPlayerButton.setAttribute('disabled', 'disabled');
        firstPlayerButton.setAttribute('disabled', 'disabled'); 
    } else {        
        disabledPBtn.setAttribute('disabled', 'disabled');
        removeDisabledPbtn.removeAttribute('disabled', 'disabled');
    }
}

// first palyer button
firstPlayerButton.addEventListener('click', function () {
    if (gameOver == false) {
        firstRandomScore = firstRandomScore + Math.floor(Math.random() * 4 + 1);
        firstScore.innerHTML = firstRandomScore;
    }
    forButton(firstScore,firstRandomScore,firstPlayerButton,secondPlayerButton) 
})

// second palyer button
secondPlayerButton.addEventListener('click', function () {
    if (gameOver == false) {
        secondRandomScore = secondRandomScore + Math.floor(Math.random() * 4 + 1);
        secondScore.innerHTML = secondRandomScore;
    }
    forButton(secondScore,secondRandomScore,secondPlayerButton,firstPlayerButton) 
})

// form submit action
form.addEventListener('submit', function (e) {
    loading.style.transform = 'scale(1)';
    e.preventDefault();
    setTimeout(() => {
        loading.style.transform = 'scale(0)';
        let inV = Number(input.value);
        if (inV > winScore && input.value.length < 7) {
            winScore = input.value;
            targetValue.innerHTML = winScore;
        } else {
            messageMain.style.transform = 'scale(1)';
            message.innerHTML = ` Please add number min ${Number(winScore)} & max 999999, Otherwise please press <b>Reset Button</b>!`
            removeMes.addEventListener('click', function () {
                messageMain.style.transform = 'scale(0)';
            })
        }
        input.value = '';
    }, 300);
});

// body click action
body.addEventListener('click', function () {
    messageMain.style.transform = 'scale(0)';
})
color.addEventListener('input', function () {
    body.style.backgroundColor = color.value;
})

// reset button
resetAll.addEventListener('click', function () {
    gameOver = false;
    winScore = 10;
    targetValue.innerHTML = winScore;
    input.value = '';
    firstRandomScore = 0;
    secondRandomScore = 0;
    secondScore.innerHTML = secondRandomScore;
    firstScore.innerHTML = secondRandomScore;
    firstScore.classList.remove('text-success');
    secondScore.classList.remove('text-success');
    firstPlayerButton.removeAttribute('disabled', 'disabled');
    secondPlayerButton.removeAttribute('disabled', 'disabled');
    body.style.backgroundColor = '#333';
})