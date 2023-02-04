const buttonPaper = document.getElementById('button-paper');
const buttonRock = document.getElementById('button-rock');
const buttonScissors = document.getElementById('button-scissors');

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    /**
     * Describe this function...
     */
    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
        }
    }

    /**
     * Describe this function...
     */
    function displayResult(argPlayerMove, argComputerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            printMessage('WYGRYWASZ!');
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            printMessage('WYGRYWASZ!');
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            printMessage('WYGRYWASZ!');
        } else if (argPlayerMove == argComputerMove) {
            printMessage('REMIS');
        } else {
            printMessage('PRZEGRYWASZ :(');
        }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }
    const playerMove = argButtonName;
    console.log('wybór ruchu gracza to: ' + playerInput);
    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}

buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });
