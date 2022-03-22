const loadingText = document.querySelector('.loading-text'),
      bg = document.querySelector('.bg');

let opacity = 100,
    load = 1,
    int = setInterval(blurring, 30);

function blurring( ) {
    
    load++;
    opacity--;
    if(load >= 100) {
        clearInterval(int);
    }

    loadingText.innerText = `${load}%`;
    loadingText.style.opacity = scale(load, 0, 100, 1, 0); 
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}