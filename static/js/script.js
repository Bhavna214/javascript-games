function ageInDays()
{
    var birthYear= prompt('What year were you born?');
    var days = (2022-birthYear)*365;
    var h3= document.createElement('h3');
    var result= document.createTextNode('You are '+days+' days old.');
    h3.setAttribute('id', 'days');
    h3.appendChild(result);
    document.getElementById('flex-box-result').appendChild(h3);
}
// try fixing cancel issue

function reset()
{
    document.getElementById('days').remove();
}

function generate()
{
    var image= document.createElement('img');
    var div= document.getElementById('cat-img');
    image.setAttribute('id', 'image');
    image.src= "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

function reset2()
{
    document.getElementById('image').remove(); 
}
// try removing all contents at once
