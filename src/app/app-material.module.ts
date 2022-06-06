/** @format */

import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
const material = [
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatSnackBarModule,
];
@NgModule({
  imports: [material],
  exports: [material],
})
export class AppMaterialModule {}
