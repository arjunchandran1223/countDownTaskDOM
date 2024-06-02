let countdownElement = document.getElementById('countdown');
let messageElement = document.getElementById('message');

function startCountdown() {
    let count = 10;
    let countdownInterval = setInterval(() => {
        if (count >= 1) {
            countdownElement.innerText = count;
            count--;
        } else {
            countdownElement.innerText = '';
            messageElement.innerText = 'Happy Independence Day!';
            clearInterval(countdownInterval);
        }
    }, 1000);
}