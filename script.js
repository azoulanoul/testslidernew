//slider with joshh



var arrowLeft=document.getElementById("prev")
var arrowRight=document.getElementById("next")
var position=1
// var pxmt=650
const cards = document.querySelector('#cardcontainer').querySelectorAll('div')
cards[1].scrollIntoView({behavior: "smooth", inline: "center"});

arrowLeft.addEventListener("click", function(){
    position--
    if (position<1)
    {
        position=1
        return
    }
    // cardcontainer.scrollLeft -=(pxmt)
    cards[position].scrollIntoView({behavior: "smooth", inline: "center"});
})
arrowRight.addEventListener("click", function(){
    position++
    if (position>4)
    {
        position=4
        return
    }
    // cardcontainer.scrollLeft +=(pxmt)
    cards[position].scrollIntoView({behavior: "smooth", inline: "center"});
 
})
var cardcontainer=document.getElementById("cardcontainer")

