import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
loginForm: FormGroup = new FormGroup({
  username: new FormControl('', [Validators.email, Validators.required]),
  password: new FormControl('', [Validators.required])
});

onLogin() {
  console.log(this.loginForm.value);
}
}
