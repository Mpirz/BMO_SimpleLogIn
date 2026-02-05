import { Routes } from '@angular/router';
import { Login } from './login/login'; // Adjusted to point to the TypeScript component file
import { Home } from './home/home';
import { authGuard } from './auth.guard';
import { guestGuard } from './guest.guard';

export const routes: Routes = [
    { path: 'login', component: Login, canActivate: [guestGuard]},
    { path: 'home', component: Home, canActivate: [authGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
