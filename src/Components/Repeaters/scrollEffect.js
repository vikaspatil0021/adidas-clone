export const scrollEffect = (whichSide,className) =>{

    const ele = document.querySelector('.' + className);
    if(whichSide=='right'){
        ele.scrollLeft += 2000;
    }else{
        ele.scrollLeft -= 2000;

    }

}