// Klasa reprezentująca skoczka / konika
class Knight {
    constructor() {
        this.type = "KNIGHT";
    }

    validateMove(move) {
        // Obliczamy różnicę w poziomie i pionie
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);

        // Skoczek porusza się w kształcie "L": 
        // 2 pola w jednym kierunku i 1 pole w drugim
        const isLMove = (dx === 2 && dy === 1) || (dx === 1 && dy === 2);

        return isLMove;
    }
}