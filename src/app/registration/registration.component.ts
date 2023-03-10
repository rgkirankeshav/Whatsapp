import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
username: any;
password: any;
errorMessage!:string;
successMessage!:string;
  constructor(private router:Router,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }


  register(form:any) {
    const storedUser = localStorage.getItem(form.value.username);

    if (storedUser) {
     this.errorMessage = 'Username already exists, please try a different one';
    } else {
      localStorage.setItem(form.value.username, JSON.stringify({ password: form.value.password }));
      // this.snackBar.open('Registered successfully!', 'Close', {
      //   duration: 3000 // show the snackbar for 3 seconds
      // });
      this.successMessage = 'Registered successfully!';
      //this.router.navigate(['/login']);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
