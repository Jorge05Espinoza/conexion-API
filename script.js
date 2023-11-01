document.getElementById("search").addEventListener("click", () => {
    displayUser();
  });
  
  async function displayUser() {
    const idUser = document.getElementById("userFalse").value;
    const user = await getUser(idUser);
    addUserFalseUI(user);
  }
  
  async function getUser(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (response.ok) {
        const user = await response.json();
        return user;
      } else {
        throw new Error(`Error de red: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  function addUserFalseUI(user) {
    if (user) {
      const userFalseList = document.getElementById("userFalse-container");
      const element = document.createElement("div");
      element.innerHTML = `
        <strong>Id: </strong> ${user.id}
        <strong>Name: </strong> ${user.name}
        <strong>Email: </strong> ${user.email}
        `;
      userFalseList.appendChild(element);
    } else {
      console.error("No se pudo obtener el usuario.");
    }
  }
  