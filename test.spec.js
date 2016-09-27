function Tennis(pa,pb) {
  let voicea = '';
  let voiceb = '';

  switch (pa) {
    case 0:voicea += 'Love';break;
    case 15:voicea += 'Fifteen';break;
    case 30:voicea += 'Thirty';break;
    case 40:voicea += 'Forty';break;
  }
  switch (pb) {
    case 0:voiceb += 'Love';break;
    case 15:voiceb += 'Fifteen';break;
    case 30:voicea += 'Thirty';break;
    case 40:voicea += 'Forty';break;
  }
  return voicea+'-'+voiceb ;

  }

describe("Tennis", function() {
  it('should echo "Love - fifteen" when score = 0 - 15', function() {
    var str = Tennis(0,15);
    expect(str).toEqual('Love-Fifteen');
  })
});

  describe("Tennis", function() {
  it('should echo "Love - Love" when score = 0 - 0', function() {
    var str = Tennis(0,0);
    expect(str).toEqual('Love-Love');})
  });

  describe("Tennis", function() {
  it('should echo "Fifteen - Love" when score = 15 - 0', function() {
    var str = Tennis(15,0);
    expect(str).toEqual('Fifteen-Love');})
  });
