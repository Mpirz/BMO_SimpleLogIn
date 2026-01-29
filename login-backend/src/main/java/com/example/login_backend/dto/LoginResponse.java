package com.example.login_backend.dto;

public class LoginResponse {
    private boolean success;
    private String message;

    // No-args constructor (needed by JSON libraries sometimes)
    public LoginResponse() {}

    // Convenient constructor so we can quickly create responses
    public LoginResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
