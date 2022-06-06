/** @format */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { HttpClientModule } from "@angular/common/http";
import { AppMaterialModule } from "src/app/app-material.module";
import { FormContainerComponent } from "./form-container/form-container.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [SignInComponent, SignUpComponent, FormContainerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
