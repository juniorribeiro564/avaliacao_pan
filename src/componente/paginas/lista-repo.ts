import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-list-repo',
  templateUrl: './lista-repo-template.html',
  styleUrls: ['./lista-repo.css']
})


export class ListRepoComponent implements OnInit {

  nameColumns = ['name', 'forks', 'stars'];
  dataGitHub: any;
  _siteGithub = 'https://github.com';
  _baseApiGithub = 'https://api.github.com';

  constructor(
    public snackBar: MatSnackBar,
    private _http: HttpClient) {
  }

  getUserRepo(): Observable<any> {
    return this._http.get([this._baseApiGithub, 'user/repos'].join('/'));
  }

  ngOnInit() {
    this.getUserRepo().subscribe(res => {
        this.dataGitHub = res;
      },
      error => {
        this.snackBar.open('Erro ao listar repositórios', 'Fechar', {
          duration: 3000
        });
      }
    );
  }

}
