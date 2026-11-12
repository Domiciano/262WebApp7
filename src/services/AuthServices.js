import api from "./Api.js";
async function login(){
    const response = await api.post('/auth/login', 
        {
            username:"nicolas",
            password: "123456"
        }
    );
    console.log(response.data.accessToken);
}

export {login};

