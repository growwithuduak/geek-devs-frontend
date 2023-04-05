
let user = {data: {user: "Monkey", admin: true}}

const fetchUser = () => {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve(user);
         }, 3000);
     });
};

const login = (user) => {
    if (user.admin === true){
        console.log("Successfully logged in! ");
    } else {
        console.log("Failed to log in, please try again")
    };
};

console.log("Program starting")


const logUser = async () => {
    const data = await fetchUser();
    login(data.data);
    console.log("Program completed")
};

logUser();