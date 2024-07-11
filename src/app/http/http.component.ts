import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent implements OnInit {
  // form group
    useForm = new FormGroup({
    Name: new FormControl('',Validators.required),
    Email: new FormControl('', Validators.required)
  })
  
  constructor(private http:HttpClient) {
    
  }

  users:User[] = [];
  ngOnInit(): void {
      this.getUsers().subscribe((responce) =>{
        this.users = responce;
      })
  }


  getUsers(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  onSubmit(){
    this.addUsers().subscribe((responce) =>{
      this.users.push(responce);
    })
  }

  addUsers(){
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users',{
      name : this.useForm.controls.Name.value,
      email : this.useForm.controls.Email.value,
    })
  }

  // get formControl
  get inputName(){
    return this.useForm.get('Name');
  }
  get inputEmail(){
    return this.useForm.get('Email');
  }
}

class User {
  name!:string;
  email!:string;
}