(function(document){

  let words = {
    " ": "Space",
    "A": "Alfa",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "Xray",
    "Y": "Yankee",
    "Z": "Zulu",
    "1": "Number One",
    "2": "Number Two",
    "3": "Number Three",
    "4": "Number Four",
    "5": "Number Five",
    "6": "Number Six",
    "7": "Number Seven",
    "8": "Number Eight",
    "9": "Number Nine",
    "0": "Zero",
  };

  let raw = document.querySelector("#raw");

  function refresh(){
    let spelling = document.querySelector("#spelling");
    spelling.replaceChildren();

    let input = raw.value;

    for (let i = 0; i < input.length; i++) {
      let c = input.charAt(i).toUpperCase();
      let text = words[c] || '-';
      if (c == ' ') {
        c = ' '; // non-breaking space
      }

      let row = document.createElement('div');
      row.className = 'row';

      let letter = document.createElement('div');
      letter.className = 'letter';
      letter.textContent = c;

      let word = document.createElement('div');
      word.className = 'word';
      word.textContent = text;

      row.append(letter, word);
      spelling.append(row);
    }
  };

  raw.addEventListener('keydown', refresh);
  raw.addEventListener('keyup', refresh);
  raw.addEventListener('change', refresh);

  raw.focus();

  refresh();
})(document);
