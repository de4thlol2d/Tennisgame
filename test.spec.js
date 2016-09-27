function Tennis(pa,pb) {
  let voicea = '';
  let voiceb = '';

  if (pa === 0 ) {
    voicea += 'Love';
  }
  if (pb === 0 ) {
    voiceb += 'Love';
  }
  return voicea+'-'+voiceb ;

  }

describe("Tennis Score", function() {
  it('should be "Love - fifteen" when score = 0 - 15', function() {
    var str = Tennis(0,15);
    expect(str).toEqual('Love-fifteen');
  })
});

describe("Tennis Score", function() {
  it('should be "Love - thirty" when score = 0 - 30', function() {
    var str = Tennis(0,30);
    expect(str).toEqual('Love-thirty');
  })
});

describe("Tennis Score", function() {
  it('should be "Love - forty" when score = 0 - 40', function() {
    var str = Tennis(0,40);
    expect(str).toEqual('Love-forty');
  })
});

describe("Tennis Score", function() {
  it('should be "fifteen - fifteen" when score = 15 - 15', function() {
     var str = Tennis(15,15);
    expect(str).toEqual('fifteen-fifteen');
   })
});

  describe("Tennis Score", function() {
  it('should be "thirty - fifteen" when score = 30 - 15', function() {
      var str = Tennis(30,15);
      expect(str).toEqual('thirty-fifteen');
    })
});
