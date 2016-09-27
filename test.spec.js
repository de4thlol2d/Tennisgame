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
  it('should echo "Love - Fifteen" when score = 0 - 15', function() {
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
  it('should echo "Thirty - Love" when score = 30 - 0', function() {
    var str = Tennis(2,0);
    expect(str).toEqual('Thirty-Love');})
  });

  describe("Tennis", function() {
  it('should echo "Player A Won" when Player A get point 4', function() {
    var str = Tennis(4,0);
    expect(str).toEqual('Player A Won');})
  });

  describe("Tennis", function() {
  it('should echo "Player B Won" when Player B get point 4', function() {
    var str = Tennis(0,4);
    expect(str).toEqual('Player B Won');})
  });

  describe("Tennis", function() {
  it('should echo "Love - Thirty" when score = 0 - 30', function() {
   var str = Tennis(0,2);
   expect(str).toEqual('Love-Thirty');})
  });

  describe("Tennis", function() {
  it('should echo "Love - Forty" when score = 0 - 40', function() {
   var str = Tennis(0,3);
   expect(str).toEqual('Love-Forty');})
  });

  describe("Tennis", function() {
  it('should echo "Forty - Love" when score = 40 - 0', function() {
   var str = Tennis(3,0);
   expect(str).toEqual('Forty-Love');})
  });

  describe("Tennis", function() {
  it('should echo "Fifteen - Fifteen" when score = 15 - 15', function() {
   var str = Tennis(1,1);
   expect(str).toEqual('Fifteen-Fifteen');})
  });

  describe("Tennis", function() {
  it('should echo "Thirty - Fifteen" when score = 30 - 15', function() {
    var str = Tennis(2,1);
    expect(str).toEqual('Thirty-Fifteen');})
});
