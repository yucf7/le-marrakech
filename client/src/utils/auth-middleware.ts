
export async function isAuthenticated() {
    const token = localStorage.getItem('token');
    try {
      let res = await fetch("http://localhost:4000/checkToken", {
        method: "POST",
        body: JSON.stringify({
          jwt: token,
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      let resJson = await res.json();
      if (resJson && (resJson.email || resJson.id)) {
        return true; 
      }
    } catch (err) {
      return false; 
    }
    return false; 
  }
  
export function isNotAuthenticated() {
    const token = localStorage.getItem('token'); 
    return !(token && token === '1986kfzg6972rger6ugkfe'); 
}