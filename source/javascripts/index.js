
$(function(){

  var words = {
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

  function refresh(){
    $('#spelling').empty();

    var input = $('#raw').val();

    for (var i = 0; i < input.length; i++) {
      var c = input.charAt(i).toUpperCase();
      var text = words[c] || '-';
      if (c == ' ') {
        c = '&nbsp;';
      }
      var row = $('<div class="row"></div>');
      $('<div class="letter"></div>').html(c).appendTo(row);
      $('<div class="word"></div>').html(text).appendTo(row);
      row.appendTo('#spelling');
    }
  };

  $('#raw')
  .keydown(refresh)
  .keyup(refresh)
  .change(refresh)
  .focus();

  refresh();
});
