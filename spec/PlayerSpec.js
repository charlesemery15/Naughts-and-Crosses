describe("Player", function() {

  beforeEach(function() {
    player_X = new Player("Joe")
  });

  it("Should allow a user to name a player", function(){
    expect(player_X.name).toEqual("Joe")
  });
});
