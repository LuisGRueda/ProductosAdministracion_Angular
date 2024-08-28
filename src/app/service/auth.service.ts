import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn:'root'
})
export class AuthService{
    constructor(private http:HttpClient){

    }

    isAuth():boolean{
        const token= localStorage.getItem('token');
        if(!localStorage.getItem('token'))
        {
            return false;
        }
        return true;
    }
}