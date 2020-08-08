var rectangular = require('./rectangle')
function cal(l,b){  
    rectangular(l,b,(error,rect) =>{
        if(error){
            console.log(error.message);
        }
        else{
            console.log('perimeter is '+ rect.perimeter(l,b))
            console.log('Area is '+ rect.area(l,b))
        }
    })

    
}

cal(0,8)