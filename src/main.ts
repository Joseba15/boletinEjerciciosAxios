import { User } from "./interfaces/user";
import axios, { AxiosResponse } from 'axios';

//Ejercicio 1
const lista  = document.querySelector('#lista');


axios.get<User[]>('http://localhost:3000/users')
  .then((response: AxiosResponse<User[]>) => {
    
    for (const user of response.data) {
      let liElement = document.createElement("li");
      liElement.textContent= user.name    
      lista?.appendChild(liElement);
    }
        
    
  })
  .catch((error) => {
    console.error('Error al obtener datos:', error);
  });


//Ejercicio 2
const formulario  = document.querySelector('form');

let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let age=  document.getElementById('age').value;

const newUser : User  = {
  "name": name,
  "email": email,
  "age": age,
  "isAdmin": false
}

formulario?.addEventListener('submit',function (e) {
  axios.post<User>('http://localhost:3000/users',newUser)
    .then((response: AxiosResponse<User>) => {    
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error al crear el usuario:', error);
    });
  
})