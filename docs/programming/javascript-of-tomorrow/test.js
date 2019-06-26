function hideString0(str){
    return str.replace(/[a-zA-Z]/g, 'X')
}

const hidden0 = hideString0("hello world");
console.log("hidden0 is", hidden0);


function hideString(str, done){
    process.nextTick(()=>{
    done(str.replace(/[a-zA-Z]/g, 'X'));
    });
}

console.log("end")

hideString("hello world",(hidden)=>{
    console.log("hidden is", hidden);
});

