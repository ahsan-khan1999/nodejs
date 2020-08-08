module.exports = (x,y,callback) => {
    if(x <= 0 || y <= 0){
        setTimeout(() => callback(new Error("X and Y values are Not true"),null),2000 );
    }
    else{
        setTimeout(() => callback(null,{
            perimeter :  () => (2*(x+y)) ,
            area : () => (x*y)
        }),2000);
    }
}










