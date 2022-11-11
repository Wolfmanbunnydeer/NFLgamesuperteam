//Following codes are for Games
function myFunction() {
  document.getElementById("GameButton").addEventListener("click", myFunction);
}
// create NFL = document.createElement('result').innerHTML;
function onloadData(){
}
var temp = document.querySelector('.date');
  var Hometeambutton = document.querySelector(."Hometeam");
  var awayteam = document.querySelector(".awayteam");
  var homepoint = document.querySelector(".homepoint");
  var awaypointDiv = document.querySelector(".awaypoint");

  var NFL = (document.createElement("game").innerHTML = [
    {
      City: "Arizona",
      Name: "Arizona Cardinal",
      Date: "March 7",
      AwayTeam: "Falcon",
      Hometeam: "Cardinals",
      Homepoint: "78",
      AwayPoint: "45"
    },
    {
      City: "Atlanta",
      Name: "Falcons",
      Date: "March 7",
      AwayTeam: "Minnesota Vikings",
      Hometeam: "Falcons",
      Homepoint: "23",
      AwayPoint: "8"
    },
    {
      City: "N/S Carolinas",
      Name: "Carolina Panther",
      Date: "March 7",
      AwayTeam: "Minnesota Vikings",
      Hometeam: "Panther",
      Homepoint: "45",
      AwayPoint: "8"
    },
    {
      City: "Chicago",
      Name: "Chicago Bears",
      Date: "March 7",
      AwayTeam: "Dallas Cowboys",
      Hometeam: "Chicago Bears",
      Homepoint: "78",
      AwayPoint: "8"
    },
    {
      City: "Dallas",
      Name: "Dallas Cowboys",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Dallas Cowboys",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Detroits",
      Name: "Detroit Lions",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Detroit Lions",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Jacksonville",
      Name: "Jacksonville Jaguars",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Jacksonville Jaguars",
      Homepoint: "90",
      AwayPoint: "87"
    },

    {
      City: "GreenBay",
      Name: "Green Bay Packers",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Green Bay Packers",
      Homepoint: "90",
      AwayPoint: "87"
    },

    {
      City: " Los Angeles",
      Name: " Los Angeles Rams",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Los Angeles Rams",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: " Los Angeles",
      Name: " Los Angeles Rams",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Los Angeles Rams",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Minnesota",
      Name: "Minnesota Vikings",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Minnesota",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "New Orleans",
      Name: "New Orleans Saints",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "New Orleans Saints",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "New York",
      Name: "New York Giants",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "New York Giants",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Denver",
      Name: "Denver Broncos",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Denver Broncos",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Houston ",
      Name: "Houston Texan",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Houston Texan",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Miami ",
      Name: " Miami Dolphins ",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Miami Dolphins ",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Tennessee",
      Name: " Tennessee Titans",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Tennessee Titans",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Buffalo",
      Name: " Buffalo Bills",
      Date: "March 7",
      AwayTeam: "Miami Dolphins",
      Hometeam: "Buffalo Bills",
      Homepoint: "90",
      AwayPoint: "87"
    }
  ]);
  function AddGame() {
    let theDateName = document.getElementById("date").value;
    let theHomeTeam = document.getElementById("Hometeam").value;

    let theHomePoint;
    document.getElementById("homepoint").value;

    let theAwayTeam;
    document.getElementById("awayteam").value;
    let theAwayPoint;
    document.getElementById("awaypoint").value;
    //const result = divValue.textContent.trim(); alert(result)
    document.getElementById("gameOutput").innerHTML =
      "The Date Name is " +
      theDateName +
      ".<br> HomeTeam " +
      theHomeTeam +
      ".<br> Home Point " +
      theHomePoint +
      ".<br>Away Team" +
      theAwayTeam +
      ".<br> AwayPoint" +
      theAwayPoint +
      ".";
  }
  //Following codes are for  Movies

  document.getElementById("DateButton").addEventListener("click", DateFunction);

  function DateFunction() {
    let theDateseason = document.getElementById("games").value;

    let thequarter = "";
    for (let i = 0; i < theDateseason; i++) {
      for (let j = 0; j <= i; j++) {
        thequarter = thequarter + "*";
      }
      thequarter = thequarter + "<br>";
      document.getElementById("dateOutput").innerHTML = thequarter;
    }
    thequarter = "";
  }

  function AddGame() {
    var arrDate = newArray();
    var arrHomeTeam = newArray();
    var arrAwayTeam = newArray();
    var arrHomePoint = newArray();
    var arrAwayPoint = newArray();
  }
    function AddGame() {
      var arrDate = document.getElementById("date").innerHTML;
      var arrHomeTeam = document.getElementById("Hometeam").innerHTML;
      var arrAwayTeam = document.getElementById("AwayTeam").innerHTML;
      var arrHomePoint = document.getElementById("HomePoint").innerHTML;
      var arrAwayPoint = document.getElementById("awaypoint").innerHTML;    
      }
      document.getElementById("date").value = "";
      document.getElementById("Hometeam").value = "";
      document.getElementById("awayteam").value = "";
      document.getElementById("homepoint").value = "";
      document.getElementById("awaypoint").value = "";


    function AddGame() {
      var content = "<b>Data Entered by User :</b><br>";
      content += [...arrDate] + "</br>";
      content += [...arrHomeTeam] + "</br>";
      content += [...arrAwayTeam] + "</br>";
      content += [...arrHomePoint] + "</br>";
      content += [...arrAwayPoint] + "</br>";
    }
    function AddGame() {
      document.getElementById("gameOutput").innerHTML = content;
      arrDate = arrArray();
      arrHomeTeam = arrArray();
      arrHomePoint = arrArray();
      arrAwayTeam = arrArray();
      arrAwayPoint = arrArray();
    }
    var content = "<b> Games Entered by User</b><br>";
    document.getElementById("gameOutput").innerHTML = content;


 
function resetTable() {

/* Find a <table> element with id="myTable":*/
var table = document.getElementById("myTable");

/* Add some text to the new cells:*/
 document.getElementById("date").value='';
 document.getElementById("HomeTeam").value='';
document.getElementById("homepoint").value='';
  document.getElementById("awayteam").value='';
document.getElementById("awaypoint").value='';  
  
}


// Create a "close" button and append it to each list item

var myNodelist = document.getElementsByTagName("LI");

var i;

for (i = 0; i < myNodelist.length; i++) {

  var span = document.createElement("SPAN");

  var txt = document.createTextNode("\u00D7");

  span.className = "close";

  span.appendChild(txt);

  myNodelist[i].appendChild(span);

}

 

// Click on a close button to hide the current list item

var close = document.getElementsByClassName("flex-container");

var i;

for (i = 0; i < close.length; i++) {

  close[i].onclick = function() {

    var div = this.parentElement;

    div.style.display = "none";

  }

}

 

// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {

  if (ev.target.tagName === 'LI') {

    ev.target.classList.toggle('checked');

  }

}, false);

 

// Create a new list item when clicking on the "Add" button

function newElement() {

  var li = document.createElement("li");

  var inputValue = document.getElementById("item").value;

  var t = document.createTextNode(inputValue);

  li.appendChild(t);

  if (inputValue === '') {

    alert("This field cannot be empty!");

  } else {

    document.getElementById("list").appendChild(li);

  }

  document.getElementById("item").value = "";

 

  var span = document.createElement("SPAN");

  var txt = document.createTextNode("\u00D7");

  span.className = "close";

  span.appendChild(txt);

  li.appendChild(span);

 

  for (i = 0; i < close.length; i++) {

    close[i].onclick = function() {

      var div = this.parentElement;

      div.style.display = "none";

    }

  }

}


