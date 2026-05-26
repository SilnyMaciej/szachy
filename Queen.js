class Queen {
    constructor() {
        this.type = "QUEEN";
    }

    validateMove(move) {
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);
        
        const isRookMove = (move.sourceX === move.destinationX || move.sourceY === move.destinationY);
        const isBishopMove = (dx === dy);
        
        return (isRookMove || isBishopMove) && (dx !== 0 || dy !== 0);
    }
}