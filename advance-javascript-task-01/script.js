let countDownContainer = document.createElement('div');
countDownContainer.setAttribute('class', 'count-down-container');

let messageContainer = document.createElement('div');
messageContainer.setAttribute('class', 'msg-container');

//Count down Config.
let countDown = 10;
let countDownMsg = 'Happy<br>New Year';

//Counting down execution.
setTimeout(() => {
    countDownContainer.innerText = countDown;
    countDown--;
    setTimeout(() => {
        countDownContainer.innerText = countDown;
        countDown--;
        setTimeout(() => {
            countDownContainer.innerText = countDown;
            countDown--;
            setTimeout(() => {
                countDownContainer.innerText = countDown;
                countDown--;
                setTimeout(() => {
                    countDownContainer.innerText = countDown;
                    countDown--;
                    setTimeout(() => {
                        countDownContainer.innerText = countDown;
                        countDown--;
                        setTimeout(() => {
                            countDownContainer.innerText = countDown;
                            countDown--;
                            setTimeout(() => {
                                countDownContainer.innerText = countDown;
                                countDown--;
                                setTimeout(() => {
                                    countDownContainer.innerText = countDown;
                                    countDown--;
                                    setTimeout(() => {
                                        countDownContainer.innerText = countDown;
                                        countDown--;
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
