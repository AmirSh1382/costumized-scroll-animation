let $ = document

/////////////////////////

// variables /////////////////////
const body = $.body
const costumeScollElem = $.querySelector(".costume-scroll")

// fucntions /////////////////////
function costumeScroll(event){
    let bodyHeight = body.clientHeight
    let scrollTop = window.scrollY
    let bodyInnerHeight = window.innerHeight

    let scrollPercent = scrollTop / (bodyHeight - bodyInnerHeight) * 100
    let scrollRoundedPercent = Math.round(scrollPercent)

    costumeScollElem.style.width = scrollRoundedPercent + "%"
}


// event listeners //////////////
window.addEventListener("scroll" , costumeScroll)
window.addEventListener("resize" , costumeScroll)