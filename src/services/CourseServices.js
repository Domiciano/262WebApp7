import api from "./Api.js";

async function getCourses({token}){
    const response = await api.get('/courses' ,{headers:{
        'Authorization': `Bearer ${token}`
    }});
    return response.data;
}

export {getCourses};