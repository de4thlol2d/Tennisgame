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
  it('should be "Love - Love" when score = 0 - 0', function() {
    var str = Tennis(0,0);
    expect(str).toEqual('Love-Love');
  });

});
