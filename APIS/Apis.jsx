import axios from "axios"

const url = "http://localhost:8000/users"

export async function getUsers(url) {
    const responce = await axios.get(`${url}`)
    if(responce.status===200) {
        return responce.data
    } else {
        
    }
}   

export async function getUser(id) {
    const responce = await axios.get(`${url}/users/${id}`)
    if(responce.status===200) {
        return responce.data
    } else {
        
    }
    
}

export async function createUser(user) {
    const responce = await axios.post(`${url}/users`,user)
    if(responce.status===200) {
        return responce.data
    } else {
        throw new console.error("data not posted");
        
    }
      
}

export async function updateUser(id,user) {
    const responce = await axios.put(`${url}/users/${id}`,user)
    return responce.data
}

export async function deleteUser(id) {
    const responce = await axios.delete(`${url}/users/${id}`)
     return responce
    
}