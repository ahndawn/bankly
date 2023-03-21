function timeWord(timeStr) {
    const hour = Number(timeStr.slice(0, 2));
    const minute = Number(timeStr.slice(3));
  
    const hourWords = [
      'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
      'eleven', 'noon'
    ];
    const minuteWords = [
      'oh', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
      'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five',
      'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'
    ];
  
    if (hour === 0 && minute === 0) {
      return hourWords[0];
    } else if (hour === 12 && minute === 0) {
      return hourWords[12];
    }
  
    let timeWords = '';
    let space = '';
  
    if (hour === 12) {
      timeWords += hourWords[hour];
    } else {
      timeWords += hourWords[hour % 12];
    }
  
    if (minute !== 0) {
      timeWords += ' ';
      space += ' ';
        
      if (minute < 10) {
        timeWords += minuteWords[0] += space += minuteWords[minute];
      } else if (minute <= 29) {
        timeWords += minuteWords[minute];
      } else {
        timeWords += minuteWords[60 - minute];
        hour === 23 ? hourWords[0] : hourWords[hour % 12 + 1];
      }
    }
  
    timeWords += ' ';
  
    if (hour < 12) {
      timeWords += 'am';
    } else {
      timeWords += 'pm';
    }
  
    return timeWords.trim();
  }

module.exports = timeWord;