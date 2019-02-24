import { AuthService } from './../../servicos/auth.service';
import { environment } from './../../environments/environment.prod';
import { ApiService } from './../../servicos/api.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login-template.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent implements OnInit {

  env: any = environment;
  urlLogin: string;

  constructor(
    public authService: AuthService,
    public snackBar: MatSnackBar,
    public route: ActivatedRoute,
    public router: Router,
    private apiService: ApiService) {
    this.urlLogin = apiService._siteGithub + '/login/oauth/authorize?scope=user:email:repo&client_id=' + this.env.client_id;
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (params.code) {
          this.authService.clear();
          this.loginGit(params.code);
        }
      });
  }

  public loginGit(code) {
    this.apiService.login(code).subscribe(res => {
        const response: any = res.split('&');
        let error = false;

        response.forEach(param => {
          if (param.indexOf('access_token') > -1) {
            const access_token = param.split('=');
            this.authService.setToken(access_token[1]);
            this.router.navigate(['/listagem']);
          } else {
            if (param.indexOf('error') > -1) {
              error = true;
            }
          }
        });

        if (error) {
          this.snackBar.open('Erro ao tentar fazer login', 'Fechar', {
            duration: 3000
          });
        }
      }
    );
  }

}
