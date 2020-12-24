function windowScroll() {
    document.getElementById('summary').scrollIntoView({behavior: 'smooth'})
}

function showTakeover(source) {
    document.getElementById("takeover").style.top = `${window.scrollY}px`;
    document.getElementById("takeover").style.display = 'flex';
    document.getElementById("image").src = source;
    disableScroll()
}

function hideTakeover() {
    document.getElementById("takeover").style.display = 'none';
    enableScroll()
}

function disableScroll() { 
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 

  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 

function enableScroll() { 
    window.onscroll = function() {}; 
} 