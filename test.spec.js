function Tennis(pa,pb) {
  let voicea = '';
  let voiceb = '';

  switch (pa) {
    case 0:voicea += 'Love';break;
    case 15:voicea += 'Fifteen';break;
  }
  switch (pb) {
    case 0:voiceb += 'Love';break;
    case 15:voiceb += 'Fifteen';break;
  }
  return voicea+'-'+voiceb ;

  }

describe("Tennis Score", function() {
  it('should be "Love - Love" when score = 0 - 0', function() {
    var str = Tennis(0,0);
    expect(str).toEqual('Love-Love');})
  });
  
  describe("Tennis Score", function() {
  it('should be "Fifteen - Love" when score = 15 - 0', function() {
    var str = Tennis(15,0);
    expect(str).toEqual('Fifteen-Love');})
  });
