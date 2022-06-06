/** @format */

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./modules/auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "get-stream-io-draft";
  constructor(public auth: AuthService, private router: Router) {}

  signOut() {
    this.auth.signOut().subscribe({
      next: () => this.router.navigate(["signin"]),
    });
  }
}
