package com.stanfan.StartupAuctionV3.model;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus( value = HttpStatus.BAD_REQUEST, reason = "this was not the winning bid.")
public class NotAWinnerException extends RuntimeException{

}





