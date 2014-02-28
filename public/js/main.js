$(document).ready(function() {
    //$.getScript("https://apis.google.com/js/client.js", function(){
    //    console.log("google script loaded");
    //});
    initRoomSelect();
    //handleClientLoad();
    
    $('img').click(function(e) {
        var offset = $(this).offset();
        var left = e.pageX - offset.left + 8;
        var top = e.pageY - offset.top + 8;
        var rightPer = (1 - (left / $(this).width())) * 100;
        var bottomPer = (1 - (top /  $(this).height())) * 100;
        setLocation(rightPer, bottomPer);
    });
    var socket = io.connect(window.location.href);
  socket.on('greet', function (data) {
    console.log(data);
    socket.emit('respond', { message: 'Hello to you too, Mr.Server!' });
    });

});


function initRoomSelect() {
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
}

function setLocation(rightPer, bottomPer) {
    var rightStr = rightPer// + '%'
    var bottomStr = bottomPer// + '%'
    $('#overlay').css({
         'visibility': 'visible',
         'right': rightStr,
         'bottom': bottomStr
     });
}

function setRoom() {
    var roomSelect = document.getElementById('roomselector');
    var roomIndex = roomSelect.options[roomSelect.selectedIndex].value;
    var room = rooms[roomIndex];
    $('#overlay').css({
         'visibility': 'visible',
         'right': room.right,
         'bottom': room.bottom
     });
}

function checkCalendar() {
    var now = new Date();
    var min = new Date();
    min.setHours(1);
    var max = new Date();
    max.setHours(23);
    gapi.client.load('calendar', 'v3', function() {
        var request = gapi.client.calendar.events.list({
            'calendarId': 'bsawyer@basistech.com',
            'singleEvents': true,
            'timeMin': min.toISOString(),
            'timeMax': max.toISOString()
            
        });

        request.execute(function(resp) {
            for (var i = 0; i < resp.items.length; i++) {
                var e = resp.items[i];
                console.log(e.summary + ' at ' + e.location + ' from ' +e.start.dateTime + ' to ' + e.end.dateTime);
                var start = new Date(Date.parse(e.start.dateTime));
                var end = new Date(Date.parse(e.end.dateTime));
                if (start.getTime() < now.getTime() || end.getTime() > now.getTime()) {
                    for (var j = 0; j < rooms.length; j++) {
                        if (e.location == rooms[j].name) {
                            setLocation(rooms[j].right, rooms[j].bottom);
                            return;
                        }
                    }
                }
            }
        });
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
