let countDownContainer = document.createElement('div');
countDownContainer.setAttribute('class', 'count-down-container');

let messageContainer = document.createElement('div');
messageContainer.setAttribute('class', 'msg-container');

//Count down Config.
let countDownStart = 10;
let countDownEnd = 0;
let countDownMsg = 'Happy<br>New Year';

//Counting down execution.
setTimeout(() => {
    countDownContainer.innerText = countDownStart;
    countDownStart--;
    setTimeout(() => {
        countDownContainer.innerText = countDownStart;
        countDownStart--;
        setTimeout(() => {
            countDownContainer.innerText = countDownStart;
            countDownStart--;
            setTimeout(() => {
                countDownContainer.innerText = countDownStart;
                countDownStart--;
                setTimeout(() => {
                    countDownContainer.innerText = countDownStart;
                    countDownStart--;
                    setTimeout(() => {
                        countDownContainer.innerText = countDownStart;
                        countDownStart--;
                        setTimeout(() => {
                            countDownContainer.innerText = countDownStart;
                            countDownStart--;
                            setTimeout(() => {
                                countDownContainer.innerText = countDownStart;
                                countDownStart--;
                                setTimeout(() => {
                                    countDownContainer.innerText = countDownStart;
                                    countDownStart--;
                                    setTimeout(() => {
                                        countDownContainer.innerText = countDownStart;
                                        countDownStart--;
                                        setTimeout(() => {
                                            countDownContainer.style.display = 'none';
                                            messageContainer.style.display = 'flex';
                                            messageContainer.innerHTML = countDownMsg;
                                        }, 1000);
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 0)

//appending container to body.
document.body.append(countDownContainer, messageContainer);
