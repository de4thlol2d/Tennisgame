function Tennis() {
   spA = 0;
   spB = 0;

  this.Start = function(){
    spA = 0; sp = 0 ;
    return this.echo();
  }

  this.AGet = function(){
    spA += 1 ;
    return this.echo();
  }

  this.BGet = function(){
    spB += 1 ;
    return this.echo();
  }

 this.echo = function(){
  let voicea = '';
  let voiceb = '';
  switch (spA) {
    case 0:voicea += 'Love';break;
    case 1:voicea += 'Fifteen';break;
    case 2:voicea += 'Thirty';break;
    case 3:voicea += 'Forty';break;
    case 4:voicea += 'Player A Won';break;
  }
  switch (spB) {
    case 0:voiceb += 'Love';break;
    case 1:voiceb += 'Fifteen';break;
    case 2:voiceb += 'Thirty';break;
    case 3:voiceb += 'Forty';break;
    case 4:voiceb += 'Player B Won';break
  }
  if(spA === 4)
  {
    return voicea;
  }
  else if(spB === 4)
  {
    return voiceb;
  }
  else
  {
    return voicea+'-'+voiceb ;
  }

}
}
var Play = new Tennis();

  describe("Tennis", function() {
  it('should echo "Love - Love" when score = 0 - 0', function() {
    expect(Play.Start()).toEqual('Love-Love');})
  });

  describe("Tennis", function() {
  it('should echo "Fifteen - Love" when score = 15 - 0', function() {
    expect(Play.BGet()).toEqual('Fifteen-Love');})
  });

  describe("Tennis", function() {
  it('should echo "Thirty-Love" when score = 30 - 0', function() {
    expect(Play.BGet()).toEqual('Thirty-Love');})
  });

  describe("Tennis", function() {
  it('should echo "Love-Forty" when score = 0 - 40', function() {
    expect(Play.BGet()).toEqual('Love-Forty');})
  });
});
