let nums=[20, 30, 33, 55, 5, 70, 85, 90, 100];
// nums.map((val)=>{
//     console.log(val);
// })
//  let newArray=nums.map((val)=>{
//     return val;
// })

// usnig filter to filter out even numbers
let evenNums=nums.filter((val)=>
{
    return val%2===0;
})
console.log(evenNums);