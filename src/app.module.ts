import { TokenInterceptor } from './intercessor/token.interceptor';
import { AuthGuard } from './uteis/auth-uteis';
import { ListRepoComponent } from './componente/paginas/lista-repo';
import { AuthService } from './servicos/auth.service';
import { ApiService } from './servicos/api.service';
import { LoginComponent } from './componente/paginas/login-component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

// MATERIAL DESIGN

import {
  MatButtonModule,
  MatTableModule,
  MatCardModule, MatCheckboxModule, MatIconModule, MatSnackBarModule, MatToolbarModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListRepoComponent
  ],
  imports: [
    BrowserAnimationsModule, MatTableModule,
    HttpClientModule, MatSnackBarModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatIconModule, MatCardModule,
    AppRoutingModule,
    BrowserModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatCardModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    ApiService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
