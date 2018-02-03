function Game(board = new Board(), player_X = new Player(name), player_O = new Player(name)) {
  this.players = [player_X, player_O]
  this.board = board
}

Game.prototype.p = function(a){
  console.log(a)
};
