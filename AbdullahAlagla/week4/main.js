
console.log("JS connected"); // this to check that our script is connected to out HTML

var body = "";// query select body 
// change the font family of the body to 'Arial, sans-serif' Hint: use .style to acess CSS properties
// change the backgroundColor to a color of your choice
body = document.body
body.style.fontFamily ='Arial'
body.style.backgroundColor = 'green'

var nickname =  "";// qurey select the ID nickname
//add some value to nickname Hint: innerHTML
document.getElementById('nickname').innerHTML  = 'potato'
// query select favorites byID
document.getElementById('favorites').innerHTML  = 'I hate sweet potato'
// query select hometown byID
document.getElementById('hometown').innerHTML  = 'potato Land'
// feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';

//change the color of all selectors to colors of your choice, it better be good LOL
document.getElementById('nickname').style.color = 'yellow'
document.getElementById('favorites').style.color = 'red'
document.getElementById('hometown').style.color = 'blue'


// https://www.w3schools.com/jsref/prop_style_color.asp