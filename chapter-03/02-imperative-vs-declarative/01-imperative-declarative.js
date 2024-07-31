var string = "This is the mid way show with Cheryl Waters";
var UrlFriendly = "";

for (var i=0; i < string.length; i++) {
  if (string[i] === " ") {
    UrlFriendly = UrlFriendly + "-";
  } else {
    UrlFriendly += string[i];
  }
}

UrlFriendly = UrlFriendly.toLowerCase();
console.log(UrlFriendly);