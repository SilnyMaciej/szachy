class King {
    constructor() {
        this.type = "KING";
    }

    validateMove(move) {
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);
        
        // Król rusza się o maksymalnie 1 pole w dowolnym kierunku
        return dx <= 1 && dy <= 1 && (dx !== 0 || dy !== 0);
    }
}