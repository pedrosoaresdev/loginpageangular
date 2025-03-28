import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  login() {
    if (this.username === 'admin' && this.password === '123') {
      this.errorMessage = '';
      console.log('Login bem-sucedido!');
    } else {
      this.errorMessage = 'Usuário ou senha inválidos';
    }
  }
}