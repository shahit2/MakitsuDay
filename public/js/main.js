$(document).ready(function() {
    var roomSelect = document.getElementById('roomselector');
    //while (roomSelect.hasChildNodes())
    //  roomSelect.removeChild(roomSelect.lastChild);
    for(var x = 0; x < rooms.length; x ++) {
        var roomOption = document.createElement("option");
        var room = rooms[x];
        roomOption.id = '#dbo#' + room.name;
        roomOption.value = x;
        roomOption.text = room.name;
        roomSelect.appendChild(roomOption);
    }
});

function setpos(x, y) {
    right = x + 'px'
    bottom = y + 'px'
    $('#overlay').css({
         'right': right,
         'bottom': bottom
     });
}

function findroom() {
    var roomSelect = document.getElementById('roomselector');
    var roomIndex = roomSelect.options[roomSelect.selectedIndex].value;
    var room = rooms[roomIndex];
    $('#overlay').css({
         'visibility': 'visible',
         'right': room.right,
         'bottom': room.bottom
     });
}

function room(right, bottom, name, id) {
    this.right=right;
    this.bottom=bottom;
    this.name=name;
    this.id=id;
}

hogwartz = new room('5%', '7%', 'Hogwartz');

doffice = new room('12%', '6%', "Dave's Office");

greyhawk = new room('17%', '6%', 'Greyhawk');

atlantis = new room('22%', '6%', 'Atlantis');

treadmill = new room('28%', '6%', 'Treadmill Room');

boffice = new room('33%', '7%', "Benson's Office");

oz = new room('40%', '7%', 'Oz');

shangrila = new room('49%', '7%', 'Shangri-la');

elsinore = new room('62%', '6%', 'Elsinore');

camelot = new room('27%', '66%', 'Camelot');

rivendell = new room('33%', '66%', 'Rivendell');

openarea = new room('35%', '27%', 'Open Area');

kitchen = new room('61%', '28%', 'Kitchen');

corner = new room('4%', '90%', 'Quiet Corner');

bathroom = new room('38%', '42%', "Men's Bathroom");

rooms = [ hogwartz, doffice, greyhawk, atlantis, treadmill, boffice, oz, shangrila, elsinore, camelot, rivendell, openarea, kitchen, corner, bathroom ]
