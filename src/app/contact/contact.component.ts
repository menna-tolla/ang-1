


import { Component } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null ,[Validators.required , Validators.minLength(3) , Validators.maxLength(9)]),
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required]),
    rePassword:new FormControl(null , [Validators.required]),
  })

  test()
  {
    console.log(this.registerForm);
  }

}
