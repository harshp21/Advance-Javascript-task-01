let countDownContainer = document.createElement('div');
countDownContainer.setAttribute('class', 'count-down-container');

let messageContainer = document.createElement('div');
messageContainer.setAttribute('class', 'msg-container');

//Count down Config.
let countDownStart = 10;
let countDownEnd = 0;
let countDownMsg = 'Happy<br>New Year';

//Counting down execution.
for (let num = countDownStart; num > countDownEnd; num--) {
    let timeout = 1000 * (10 - num);
    setTimeout(() => {
        countDownContainer.style.display = 'none';
        messageContainer.style.display = 'flex';
        messageContainer.innerHTML = countDownMsg;
    }, 1000 * countDownStart, setTimeout(() => {
        countDownContainer.innerText = num;
    }, timeout));
}

//appending container to body.
document.body.append(countDownContainer, messageContainer);
