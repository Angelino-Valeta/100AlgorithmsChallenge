function add(param1: number, param2: number): number{
    return param1 + param2;
}

function addArray(params:number[]): number{
    let total = 0;

    params.map((num => {
        total += num;
    }));

    return total;
}

console.log(add(1,2))
console.log(addArray([1,2,3,4,5]))