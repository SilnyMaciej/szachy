class Rook {
    constructor() {
        this.type = "ROOK";
    }

    validateMove(move) {
        // Ruch poziomy (y takie samo) lub pionowy (x takie samo)
        return move.sourceX === move.destinationX || move.sourceY === move.destinationY;
    }
}