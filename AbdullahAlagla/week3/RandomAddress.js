
let c,k,z
let address=[ 
['32 Street','110 Street','69 Street', '57 Street', '99 Street'] ,
['riaydh','','jeddah', 'dammam', 'qassem'],
['12345', '53854' ,'69383', '32243', '99102','42203']];

c = R(0)
k = R(1)
z = R(2)

console.log(address[0][c] +', '+address[1][k] +' sa, '+address[2][z])

function R(i){
    return w= Math.floor(Math.random()*address[i].length)
}
