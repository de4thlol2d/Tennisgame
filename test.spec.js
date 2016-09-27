function Tennis(pa,pb) {
  let voicea = '';
  let voiceb = '';

  switch (pa) {
    case 0:voicea += 'Love';break;
    case 1:voicea += 'Fifteen';break;
    case 2:voicea += 'Thirty';break;
    case 3:voicea += 'Forty';break;
    case 4:voicea += 'Player A Won';break;
  }
  switch (pb) {
    case 0:voiceb += 'Love';break;
    case 1:voiceb += 'Fifteen';break;
    case 2:voiceb += 'Thirty';break;
    case 3:voiceb += 'Forty';break;
    case 4:voiceb += 'Player B Won';break
  }
  if(pa === 4)
  {
    return voicea;
  }
  else if(pb === 4)
  {
    return voiceb;
  }
  else
  {
    return voicea+'-'+voiceb ;
  }

  }

  describe("Tennis", function() {
  it('should echo "Love - fifteen" when score = 0 - 15', function() {
    var str = Tennis(0,1);
    expect(str).toEqual('Love-Fifteen');})
  });

  describe("Tennis", function() {
  it('should echo "Love - Love" when score = 0 - 0', function() {
    var str = Tennis(0,0);
    expect(str).toEqual('Love-Love');})
  });

  describe("Tennis", function() {
  it('should echo "Fifteen - Love" when score = 15 - 0', function() {
    var str = Tennis(1,0);
    expect(str).toEqual('Fifteen-Love');})
  });

  describe("Tennis", function() {
  it('should echo "Player A Won" when Player A get point 4', function() {
    var str = Tennis(4,0);
    expect(str).toEqual('Player A Won');})
  });
