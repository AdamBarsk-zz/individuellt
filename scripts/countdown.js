function countdown(id, date){
   var today = new Date();
   var end = new Date(date);

   var current = today.getTime();
   var event = end.getTime();
   var remaining = event - current;

   var s = Math.floor(remaining / 1000);
   var m = Math.floor(s / 60);
   var h = Math.floor(m / 60);
   var d = Math.floor(h / 24);

   h %= 24;
   m %= 60;
   s %= 60;

   if(h < 10){
     h = "0" + h;
   }
   if(m < 10){
     m = "0" + m;
   }
   if(s < 10){
     s = "0" + s;
   }

   var countdownID = $('#' + id);
   var seconds = countdownID.find('#seconds');
   var minutes = countdownID.find('#minutes');
   var hours = countdownID.find('#hours');
   var days = countdownID.find('#days');

   $(seconds).html(s);
   $(minutes).html(m);
   $(hours).html(h);
   $(days).html(d);

   if (remaining <= 0) {
     clearInterval();
     $(days).html("D");
     $(hours).html("O");
     $(minutes).html("N");
     $(seconds).html("E");
   }
 }

var practice = "2018-01-15";
setInterval(function(){ countdown('practice', practice) }, 1000);

var graduation = "2018-05-31";
setInterval(function(){ countdown('graduation', graduation) }, 1000);
