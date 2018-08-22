import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  jwtHelper: JwtHelperService = new JwtHelperService();
  username: string;
  password: string;

  typeId: any;

  isError = false;

  userTypes = [
    { id: 1, name: 'ผู้ดูแลระบบ' },
    { id: 2, name: 'เจ้าหน้าที่ทั่วไป' }
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.checkToken();
  }

  checkToken() {
    let token = sessionStorage.getItem('token');
    if (token) {
      if (!this.jwtHelper.isTokenExpired(token)) {
        let decoded = this.jwtHelper.decodeToken(token);
        console.log(decoded);
        if (decoded.userType === 'staff') {
          this.router.navigateByUrl('/staff');
        } else if (decoded.userType === 'admin') {
          this.router.navigateByUrl('/admin');
        } else {
          this.isError = true;
        }
      }
    }
  }

  doLogin() {
    console.log(this.typeId);

    if (this.username === 'admin' && this.password === 'admin') {
      this.isError = false;

      let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzQ3NzczNDEsImV4cCI6MTU2NjMxMzM0MSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImZ1bGxuYW1lIjoiUGF0IFRhbmd0cmFrdW53aWdpdCIsImVtYWlsIjoiY2NiYmFhQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoic3RhZmYifQ.zTyNwLAEt-kGMypSN7SRFFrL2-swuBDjFtMbdTx_ejg';

      sessionStorage.setItem('token', token);

      if (this.typeId == 1) {
        this.router.navigateByUrl('/admin');
      } else {
        this.router.navigateByUrl('/staff');
      }

    } else {
      this.isError = true;
    }


  }

}
