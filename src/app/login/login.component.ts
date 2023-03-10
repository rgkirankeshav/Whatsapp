import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  usernameMinLength = 3;
  passwordMinLength = 8;
  errorMessage!: string;



  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(): void {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (this.username === storedUsername && this.password === storedPassword) {
      // Credentials match, redirect to dashboard
      console.log('Logged in successfully!');
    } else {
      // Credentials do not match, display error message
      this.errorMessage = 'Invalid username or password.';
    }
  }


  goToRegistration(event:Event) {
    event.stopPropagation();
    this.router.navigate(['/register']);
  }

}
