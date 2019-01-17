// Military Time
// Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

// Examples
// Input	Output
// time:
// "3:00pm"	"15:00"
// time:
// "9:15am"	"09:15"
// time:
// "12:00am"	"00:00"
// time:
// "04:00"	"04:00"

function toMilitary(time) {
  var hoursMinutes = time.split(/[.:]/);
  var min = hoursMinutes[1][0];
  var min1 = hoursMinutes[1][1];
  var output = "";

  if (!time.includes("am") && !time.includes("pm")) {
    return time;
  } else if (time.includes("am")) {
    var hoursMinutes = time.split(/[.:]/);

    if (hoursMinutes[0] === "12") {
      output = "00" + ":" + min + min1;
      return output;
    } else {
      if (hoursMinutes[0] < 10) {
        output = "0" + hoursMinutes[0] + ":" + min + min1;
        return output;
      } else {
        output = hoursMinutes[0] + ":" + min + min1;
        return output;
      }
    }
  } else if (time.includes("pm")) {
    if (hoursMinutes[0] === "12") {
      output = hoursMinutes[0] + ":" + min + min1;
      return output;
    } else {
      var hours = Number(hoursMinutes[0]) + 12;
      output = hours + ":" + min + min1;
      return output;
    }
  }
}
