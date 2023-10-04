// auth.js

export function isAuthenticated() {
    // verify token with a post requst to backend
    const token = localStorage.getItem('token'); 
    return token && token === '1986kfzg6972rger6ugkfe'; 
}

export function isNotAuthenticated() {
    const token = localStorage.getItem('token'); 
    return !(token && token === '1986kfzg6972rger6ugkfe'); 
}