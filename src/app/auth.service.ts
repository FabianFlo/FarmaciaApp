import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { promises } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private afauth : AngularFireAuth) {

   }

  async signUp(email:string, password: string): Promise<any>
  {
    try{
      await this.afauth.createUserWithEmailAndPassword(email,password);
      return true
    }catch(error){
      console.error("Error")

    }
  }

}
