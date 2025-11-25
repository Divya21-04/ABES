const add= (...args) => {
    console.log(args);
    let sum = 0;
    // args.forEach((ele) => sum += ele);
    for(let i=0;i<args.length;i++) {
        sum += args[i];
        
    }


}  