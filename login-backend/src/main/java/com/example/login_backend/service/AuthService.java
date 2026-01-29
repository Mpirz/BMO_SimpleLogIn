package com.example.login_backend.service;

import org.springframework.stereotype.Service;

@Service
public class AuthService {
    public boolean authenticate(String username, String password) {
        // For demonstration purposes, we use hardcoded credentials.
        // In a real application, you would query a database or another user store.
        return "admin".equals(username) && "password".equals(password);
    }
}
