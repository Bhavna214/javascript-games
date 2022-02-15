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

function reset()
{
    document.getElementById('days').remove();
}