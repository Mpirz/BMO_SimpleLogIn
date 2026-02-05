import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../auth/auth';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  domain = ' ;'

    errorMessage = '';
    loading = false;

    constructor(private auth: Auth, private router: Router, private cdr: ChangeDetectorRef) {}
    
    onSubmit() {
      this.loading = true;
      this.errorMessage = '';
      this.auth.login({ username: this.username, password: this.password, domain: this.domain }).subscribe({
        next: (res) => {
          this.loading = false;
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.loading = false;
          if (err?.status === 401) {
            this.errorMessage = 'Incorrect username or password.';
            
          } else {
            this.errorMessage = 'Something went wrong. Please try again.';
          }
          this.cdr.detectChanges();
        },
      });
  }
}
