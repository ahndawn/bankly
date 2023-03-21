const timeWord = require('./timeWord');

describe('timeWord', () => {
  it('should return "midnight" when input is "00:00"', () => {
    expect(timeWord("00:00")).toBe("midnight");
  });

  it('should return "noon" when input is "12:00"', () => {
    expect(timeWord("12:00")).toBe("noon");
  });

  it('should return "two twelve pm" when input is "14:12"', () => {
    expect(timeWord("14:12")).toBe("two twelve pm");
  });

  it('should return "two oh six am" when input is "02:06"', () => {
    expect(timeWord("02:06")).toBe("two oh six am");
  });

  it('should return "three oh nine pm" when input is "15:09"', () => {
    expect(timeWord("15:09")).toBe("three oh nine pm");
  });

});
