function rockPaperScissors(player1, player2) {
    if (player1 == player2) {
        return "It's a draw";
}   else if (player1 == 'rock' && player2 == 'scissors'){
        return 'player1 wins';
}   else if (player1 == 'scissors' && player2 == 'paper'){
        return 'player1 wins';
}   else if (player1 == 'paper' && player2 == 'rock'){
        return 'player1 wins';
}   else {
        return 'player 2 wins';
}

}

rockPaperScissors('paper', 'scissors');


