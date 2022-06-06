/** @format */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./modules/auth/sign-in/sign-in.component";
import { SignUpComponent } from "./modules/auth/sign-up/sign-up.component";
import {
  redirectLoggedInTo,
  canActivate,
  redirectUnauthorizedTo,
} from "@angular/fire/auth-guard";
const routes: Routes = [
  { path: "", redirectTo: "chat", pathMatch: "full" },
  {
    path: "signin",
    component: SignInComponent,
    ...canActivate(() => redirectLoggedInTo(["chat"])),
  },
  {
    path: "signup",
    component: SignUpComponent,
    ...canActivate(() => redirectLoggedInTo(["chat"])),
  },
  {
    path: "chat",
    ...canActivate(() => redirectUnauthorizedTo(["signin"])),
    loadChildren: () =>
      import("./modules/chat/chat.module").then((m) => m.ChatModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
