let a = 10;
let b = 20;
let c = 25;
let valid = false;

// check whether the given length of trianle make valid triangle or not.

const result =(l1,l2,l3)=>{

    if((l1+l2)>l3 && (l2+l3)>l1 && (l1+l3)>l2){
        return valid = true;
    }else{
        return valid = false;
    }
 
}

console.log('result',result(a,b,c));