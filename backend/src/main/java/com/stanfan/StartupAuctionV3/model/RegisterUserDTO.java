package com.stanfan.StartupAuctionV3.model;



public class RegisterUserDTO {


    //@Min (value = 5) //, message = "Username must be at least 5 characters.")
   //@Max (value = 15) //, message = "Username must not exceed 15 characters.")
    private String username;
    
   // @Min (value = 8) //, message = "Password must be at least 8 characters.")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
