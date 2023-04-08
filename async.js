let club1 = "Napoli";
let club2 = "Juventus";


const DelayTime = {
    TWENTYSECONDS: 20000,
}




const delayForFirstFixtures = () => {
    return new Promise(response => {
        setTimeout(() => {
            response();
        }, DelayTime.TWENTYSECONDS);
    });
};


const firstFixtures = async (a, b) => {
    try {
        await delayForFirstFixtures();
        console.log(a, "vs", b);
    }catch(err){
        console.log(err);
    }
};


////
console.log(club1);

firstFixtures(club1, club2);

console.log(club2);
