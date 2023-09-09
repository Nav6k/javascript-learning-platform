showNumber(10);

function showNumber(limit){
    for(let i=0; i<=limit; i++){
        const number = (i % 2 === 0)? 'Even': 'Odd';
        console.log(i+" "+number);
    }
 
}