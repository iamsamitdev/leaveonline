import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userForm: FormGroup;
  username: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
     this.userForm = this.formBuilder.group(
       {
        username : '',
        password: ''
       }
    );
  }

  onFormSubmit(form: NgForm) {
    // console.log(form);
    if (form['username'] === 'admin' && form['password'] === '1234') {
      alert('Login success');
      // ส่งไปหน้า tabs
      this.router.navigate(['tabs/tabs/home']);
    } else {
      alert('Login fail');
    }
  }

}
