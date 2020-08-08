var rectangular = require('./rectangle')
function cal(l,b){  
    rectangular(l,b,(error,rect) =>{
        if(error){
            console.log(error.message);
        }
        else{
            console.log('perimeter is '+ rect.perimeter())
            console.log('Area is '+ rect.area())
        }
    })
    console.log('This statement is after the call of rect funct')
    
}

cal(2,8)