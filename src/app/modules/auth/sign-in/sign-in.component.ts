/** @format */

import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.email]),
      password: new FormControl("", [Validators.minLength(6)]),
    });
  }

  signIn() {
    this.authService.signIn(this.form.value).subscribe({
      next: () => this.router.navigate([""]),
      error: (error) => this.snackbar.open(error.message),
    });
  }
}
