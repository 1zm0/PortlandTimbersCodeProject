var roster = [
{"name":"Fanendo Adi","origin":"Lagos, Nigeria","age":26,"height":"6 foot 4 inches","weight":"185 pounds","position":"Forward","number":9 , "image": '<img src = "timbers_photos/Fanendo_Adi.jpg">' },
{"name":"Vytas Andriuškevičius","origin":"Alytus, Lithuania","age":26,"height":"6 foot 2 inches","weight":"175 pounds","position":"Defender","number":5, "image": '<img src = "timbers_photos/Vytautas.jpg">' },
{"name":"Gbenga Arokoyo","origin":"Kabba, Nigeria","age":24,"height":"6 foot 2 inches","weight":"180 pounds","position":"Defender","number":12, "image": '<img src = "timbers_photos/Gbenga-Arokoyo.jpg">'},
{"name":"Dairon Asprilla","origin":"Istmina, Columbia","age":24,"height":"5 foot 11 inches","weight":"165 pounds","position":"Midfielder/Forward","number":11, "image": '<img src = "timbers_photos/Dairon-Asprilla.jpg">'},
{"name":"Jeff Attinella","origin":"Clearwater, Florida","age":28,"height":"6 foot 2 inches","weight":"190 pounds","position":"Goalkeeper","number":"", "image": '<img src = "timbers_photos/Jeff-Attinella.jpg">'},
{"name":"Jack Barmby","origin":"Harlow, Essex, England","age":22,"height":"5 foot 10 inches","weight":"165 pounds","position":"Midfielder/Defender","number":23, "image": '<img src = "timbers_photos/Jack-Barmby.jpg">'},
{"name":"Diego Chara","origin":"Cali, Columbia","age":30,"height":"5 foot 8 inches","weight":"150 pounds","position":"Midfielder","number":21, "image": '<img src = "timbers_photos/Diego-Chara.jpg">'},
{"name":"Marco Farfan","origin":"Gresham, Oregon","age":18,"height":"5 foot 9 inches","weight":"150 pounds","position":"Defender","number":18, "image": '<img src = "timbers_photos/Marco-Farfan.jpg">'},
{"name":"Jake Gleeson","origin":"Palmerston North, New Zealand","age":26,"height":"6 foot 3 inches","weight":"200 pounds","position":"Goalkeeper","number":90, "image": '<img src = "timbers_photos/Jake-Gleeson.jpg">'},
{"name":"David Guzman","origin":"San Jose, Costa Rica","age":26,"height":"5 foot 10 inches","weight":"175 pounds","position":"Midfielder","number":20, "image": '<img src = "timbers_photos/David-Guzman.jpg">'},
{"name":"Darren Mattocks","origin":"Portmore, Jamaica","age":26,"height":"5 foot 10 inches","weight":"155 pounds","position":"Forward","number":22, "image": '<img src = "timbers_photos/Darren-Mattocks.jpg">'},
{"name":"Kendall McIntosh","origin":"Santa Rosa, California","age":23, "height":"6 foot 0 inches", "weight":"175 pounds", "position":"Goalkeeper","number":43, "image": '<img src = "timbers_photos/Kendall-McIntosh.jpg">'},
{"name":"Roy Miller","origin":"San Jose, Costa Rica","age":32,"height":"6 foot 2 inches","weight":"165 pounds","position":"Defender","number":7, "image": '<img src = "timbers_photos/Roy-Miller.jpg">'},
{"name":"Chance Myers", "origin":"Thoudand Oaks, California","age":29, "height":"6 foot 0 inches", "weight": "165 pounds", "position": "Defender","number":4, "image": '<img src = "timbers_photos/Chance-Myers.jpg">'},
{"name":"Darlington Nagbe","origin":"Lakewood, Ohio","age":26,"height":"5 foot 9 inches","weight":"165 pounds","position":"Midfielder/Forward","number":6, "image": '<img src = "timbers_photos/Darlington-Nagbe.jpg">'},
{"name":"Amobi Okugo","origin":"Hayward, California","age":25,"height":"6 foot 0 inches","weight":"175 pounds","position":"Defender/Midfielder","number":18, "image": '<img src = "timbers_photos/Amobi-Okugo.jpg">'},
{"name":"Lawrence Olum","origin":"Nairobi, Kenya","age":32,"height":"6 foot 2 inches","weight":"185 pounds","position":"Midfield/Defender","number":13, "image": '<img src = "timbers_photos/Lawrence-Olum.jpg">'},
{"name":"Alvas Powell","origin":"Danvers Pen, St. Thomas, Jamaica","age":22,"height":"6 foot 0 inches","weight":"165 pounds","position":"Defender", "number":2, "image": '<img src = "timbers_photos/Alvas-Powell.jpg">'},
{"name":"Liam Ridgewell","origin":"Bexleyheath, London, England","age":32,"height":"6 foot 2 inches","weight":"170 pounds","position":"Defender","number":24,  "image": '<img src = "timbers_photos/Liam-Ridgewell.jpg">'},
{"name":"Zarek, Valentin","origin":"Lancaster, Pennsylvania","age":25,"height":"6 foot 0 inches","weight":"170 pounds","position":"Defender","number":16, "image": '<img src = "timbers_photos/Zarek-Valentin.jpg">'},
{"name":"Diego Valeri","origin":"Lanús, Argentina","age":30,"height":"5 foot 10 inches","weight":"165 pounds","position":"Midfielder","number":8, "image": '<img src = "timbers_photos/Diego-Valeri.jpg">'},
{"name":"Ben Zemanski","origin":"Akron, Ohio","age":28,"height":"5 foot 11 inches","weight":"150 pounds","position":"Midfielder","number":14, "image": '<img src = "timbers_photos/Ben-Zemanski.jpg">'},
{"name":"Michael Amick","origin":"Sunnyvale, California","age":21,"height":"6 foot 0 inches","weight":"175 pounds","position":"Defender","number":"",  "image": '<img src = timbers_photos/Michael_Amick.jpg>'},
{"name":"Victor Arboleda","origin":"El Cerrito, Columbia","age":20,"height":"5 foot 7 inches","weight":"145 pounds","position":"Forward/Midfielder","number":73, "image": '<img src = "timbers_photos/Victor-Arboleda.jpg">'},
{"name":"Rennico Clarke","origin":"Kingston, Jamaica","age":21,"height":"6 foot 4 inches","weight":"195 pounds","position":"Defender","number":47, "image": '<img src = "timbers_photos/Rennico-Clarke.jpg">'},
{"name":"Jeremy Ebobisse","origin":"Bethesda, Maryland","age":21,"height":"6 foot 0 inches","weight":"175 pounds","position":"Forward","number":17, "image": '<img src = "timbers_photos/Jeremy-Ebobisse.jpg">'},
]
roster.toString();

for (i=0; i < roster.length; i++) {
  document.write(
    roster[i].image +
      "<br>" +
            "Name: " + roster[i].name +
            "<br> Origin: " + roster[i].origin +
            "<br> Age: " + roster[i].age +
            "<br> Height: " + roster[i].height +
            "<br> Weight: " + roster[i].weight +
            "<br> Position: " + roster[i].position +
            "<br> Jersey Number: " + roster[i].number +
            "<br> <br> <br>"      
  );
}
/*
Add dynamically inserted divs to DOM

document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode( "henlo, testing"); 
  newDiv.appendChild(newContent); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}
*/
/* Attempt to convert to a functional 

var roster = players.map(function (name, origin, age, height, weight, position, number) {

    return players.name,
    return players.origin,
    return players.age,
    return players.height,
    return players.weight,
    return players.position,
    return players.number

});


document.write(roster)
*/
