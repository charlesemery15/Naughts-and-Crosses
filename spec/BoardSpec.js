describe("Board", function() {

  beforeEach(function() {
    board = new Board()
  });

  it("Should allow a user to create a board", function(){
    expect(board.board).toEqual("---------")
  });
});
