/** @format */

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
} from "@angular/fire/auth";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { BehaviorSubject, from } from "rxjs";
import { environment } from "src/environments/environment";
import { ISignInCredentials, ISignUpCredentials } from "./auth.model";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private authState = new BehaviorSubject<Object | null>(null);

  readonly isLoggedIn$ = authState(this.auth);

  constructor(private auth: Auth, private http: HttpClient) {}

  getCurrentUser() {
    return this.auth.currentUser!;
  }

  signIn({ email, password }: ISignInCredentials) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  signUp({ email, password }: ISignUpCredentials) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  signOut() {
    const user = this.auth.currentUser;
    console.log(user);
    return from(this.auth.signOut());
  }
}
