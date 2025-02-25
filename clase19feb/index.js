document.addEventListener("DOMContentLoaded", ()=>{
    console.log ("Contenido cargado");
    const path= document.querySelector ('.line_path');
    const pathLength = path.getTotalLength();
    console.log(pathLength);

    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    path. style.strokeDashoffset = pathLength;

    window.addEventListener('scroll', () => {
        const docElem = document.documentElement;
        const bodyScrollTop=document.body.scrollTop;
        
    const scrollPercentage = getScrollPercentage(docElem.scrollTop, bodyScrollTop, docElem.scrollHeight, docElem.clientHeight);
    const drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;

    const drawLength2 = pathLength2 * scrollPercentage;
    path2.style.strokeDashoffset = pathLength2 - drawLength2;

    
    });


 function getScrollPercentage(dSt, bSt, dSh, dCh){
    const percentage = (dSt + bSt) / (dSh - dCh);
    return percentage;
  }

});