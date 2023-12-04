import { User } from "./interfaces/user";
import { Post } from "./interfaces/posts";

import axios, { AxiosResponse } from 'axios';

//Ejercicio 1
const lista  = document.querySelector('#lista');
const listaPosts  = document.querySelector('#listaPosts');


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


let name: HTMLInputElement = <HTMLInputElement>document.getElementById('name');
let email: HTMLInputElement = <HTMLInputElement>document.getElementById('email');
let age: HTMLInputElement = <HTMLInputElement>document.getElementById('age');



formulario?.addEventListener('submit',function (event) {
  event.preventDefault();
  console.log(name.value);
  const newUser : Omit<User,'id'>  = {
    name: name.value as string,
    email: email.value as string,
    age: parseInt(age.value as string),
    isAdmin: false
  }
  axios.post<Omit<User,'id'>>('http://localhost:3000/users',newUser)
    .then((response: AxiosResponse<Omit<User,'id'>>) => {    
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error al crear el usuario:', error);
    });
  
})


//Ejercicio 3
axios.get<Post[]>('http://localhost:3000/posts')
  .then((response: AxiosResponse<Post[]>) => {
    
    for (const post of response.data) {
      let liElement = document.createElement("li");
      liElement.textContent= `${post.title}, ${post.content}, ${post.authorId}`    
      listaPosts?.appendChild(liElement);
    }
        
    
  })
  .catch((error) => {
    console.error('Error al obtener datos:', error);
  });



