let print3 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3");
        },100)
    })

}

let print = async () => {
    console.log("1");
    setTimeout(() => {
        console.log("4");
    }, 200);
    return new Promise(async (resolve,reject)=>{
        console.log("2");
        print3();
    })
};

let start=async()=>{
   print();
   console.log("done")
};

start();