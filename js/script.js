//MAKING BUTTON APPEAR

document.addEventListener('scroll', function() {
    return scrollFunction()
})

function scrollFunction() {
    if(window.scrollY > 20){
        document.getElementById("goTop").style.display = "block"
    } else {
        document.getElementById("goTop").style.display = "none"
    }
}


//SCROLL TO TOP. ADD THIS TO HTML (SEE BUTTON HTML

function topFunction() {
    window.scrollTo(0,0)
}

