// script.js

document.addEventListener('DOMContentLoaded', () => {
    let counts = [0, 0, 0];
    let timeLeft = 30;
    let timerElement = document.getElementById('timer');
    let gameActive = true;

    const squares = [
        document.getElementById('square1'),
        document.getElementById('square2'),
        document.getElementById('square3')
    ];

    const displays = [
        document.getElementById('display1'),
        document.getElementById('display2'),
        document.getElementById('display3')
    ];

    const restartBtn = document.getElementById('restartBtn');

    // Cargar sonidos
    const clickSound = new Audio('https://www.soundjay.com/buttons/sounds/button-3.mp3');
    const restartSound = new Audio('https://www.soundjay.com/buttons/sounds/button-10.mp3');

    // Función para actualizar el tiempo
    function updateTimer() {
        if (timeLeft > 0) {
            timeLeft--;
            timerElement.textContent = `Tiempo restante: ${timeLeft}s`;
        } else {
            gameActive = false;
            alert("¡Tiempo terminado! Puntuación final: " + counts.reduce((a, b) => a + b, 0));
            restartGame();
        }
    }

    // Iniciar el temporizador
    setInterval(updateTimer, 1000);

    squares.forEach((square, index) => {
        square.addEventListener('click', () => {
            if (gameActive) {
                counts[index]++;
                displays[index].textContent = counts[index];
                clickSound.play();

                // Animación
                square.classList.add('scale-110');
                setTimeout(() => {
                    square.classList.remove('scale-110');
                }, 100);
            }
        });
    });

    // Reiniciar juego
    restartBtn.addEventListener('click', () => {
        restartBtn.classList.add('scale-110');
        restartSound.play();
        setTimeout(() => {
            restartBtn.classList.remove('scale-110');
        }, 1000);
        restartGame();
    });

    function restartGame() {
        timeLeft = 30;
        gameActive = true;
        counts = [0, 0, 0];
        for (let i = 0; i < displays.length; i++) {
            displays[i].textContent = counts[i];
        }
        timerElement.textContent = `Tiempo restante: ${timeLeft}s`;
    }
});
