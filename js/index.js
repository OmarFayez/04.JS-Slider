var item =document.getElementsByClassName("item")
var itemImage =Array.from(document.querySelectorAll(".item img"))
var LightBoxContainer=document.getElementById("lightbox-container")
var lightBoxItem =document.getElementById("lightbox-item")
var closeBtn =document.getElementById("closeBtn")
var rightBtn =document.getElementById("rightBtn")
var leftBtn =document.getElementById("leftBtn")
var index;
for (var i = 0 ; i<item.length;i++)
{
item[i].addEventListener("click",function(e)
{
    LightBoxContainer.style.display="flex"
   var imgSrc= e.target.src;
   lightBoxItem.style.backgroundImage=`url(${imgSrc})`
index =itemImage.indexOf(e.target)
})
}

closeBtn.addEventListener("click",closeA)
function closeA()
{
    LightBoxContainer.style.display="none"
}
rightBtn.addEventListener("click", goRight)
function goRight()
{
    index++
    if(index==itemImage.length)
    {
        index=0;
    }

    var imgSrc= itemImage[index].src;
    lightBoxItem.style.backgroundImage=`url(${ imgSrc})`
}

leftBtn.addEventListener("click", goLeft)
function goLeft()
{
    index--
    if(index<0)
    {
        index=itemImage.length-1;
    }

    var imgSrc= itemImage[index].src;
    lightBoxItem.style.backgroundImage=`url(${ imgSrc})`
}


document.addEventListener("keydown",function(e)
{
    if(e.code=='ArrowRight')
    {
        goRight()
    }
    else if(e.code=='ArrowLeft')
    {
        goLeft()
    }
    else if(e.code=='Escape')
    {
        closeA()
    }
})