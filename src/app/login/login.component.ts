import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCred = {
    userID: "firstimpact",
    password: "firstimpact"
  }
  msgs:any = [];

  constructor() { }

  ngOnInit(): void {
  }
  validateForm(formData:NgForm) {
    console.log("msgs", formData.value);
    if(this.loginCred.userID == formData.value.userID && this.loginCred.password == formData.value.password) {
      
      this.msgs = [];
            this.msgs.push({ severity: 'success', summary: "User logged in Successfully!" });            
            setTimeout(() => {
            this.msgs = [];
            }, 5000);
    }
    else if (this.loginCred.userID != formData.value.userID || this.loginCred.password != formData.value.password ) {
      this.msgs = [];
            this.msgs.push({ severity: 'error', summary: "Incorrect user ID or Password" });
            console.log("firstelse", this.msgs);
            
            setTimeout(() => {
            this.msgs = [];
            }, 5000);
    }
    // else if (formData.value.userID == "" || formData.value.password == "") {
    //   this.msgs = [];
    //         this.msgs.push({ severity: 'error', summary: "Input User ID and Password" });
    //         console.log("secondelse", this.msgs);
            
    //         setTimeout(() => {
    //         this.msgs = [];
    //         }, 5000);
    // }
  }
}
