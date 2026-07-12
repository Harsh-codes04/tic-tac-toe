<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe | Harsh Game Hub</title>

    <link rel="stylesheet" href="style.css">

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>

<body>

    <div class="container">

        <h1>🎮 Tic Tac Toe</h1>

        <p class="subtitle">Challenge your friend and have fun!</p>

        <!-- Score Board -->

        <div class="score-board">

            <div class="score">
                <h3>❌ X</h3>
                <span id="x-score">0</span>
            </div>

            <div class="score">
                <h3>🤝 Draw</h3>
                <span id="draw-score">0</span>
            </div>

            <div class="score">
                <h3>⭕ O</h3>
                <span id="o-score">0</span>
            </div>

        </div>

        <!-- Player Turn -->

        <h2 id="status">Player X Turn</h2>

        <!-- Game Board -->

        <div class="board">

            <button class="cell" data-index="0"></button>
            <button class="cell" data-index="1"></button>
            <button class="cell" data-index="2"></button>

            <button class="cell" data-index="3"></button>
            <button class="cell" data-index="4"></button>
            <button class="cell" data-index="5"></button>

            <button class="cell" data-index="6"></button>
            <button class="cell" data-index="7"></button>
            <button class="cell" data-index="8"></button>

        </div>

        <!-- Buttons -->

        <div class="buttons">

            <button id="restart">
                <i class="fa-solid fa-rotate-right"></i>
                Restart
            </button>

            <button id="newGame">
                <i class="fa-solid fa-gamepad"></i>
                New Game
            </button>

        </div>

        <footer>

            <p>
                Developed by <strong>Harsh Chendake</strong>
            </p>

        </footer>

    </div>

    <script src="script.js"></script>

</body>
</html>