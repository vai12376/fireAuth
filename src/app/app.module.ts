/** @format */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "src/environments/environment";
import { AuthModule } from "./modules/auth/auth.module";
import { AppMaterialModule } from "./app-material.module";
import { ChatModule } from "./modules/chat/chat.module";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AuthModule,
    AppMaterialModule,
    ChatModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
