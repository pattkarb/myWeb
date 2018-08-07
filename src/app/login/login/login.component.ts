import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
  }

  doLogin() {
    //console.log(this.username);
    //console.log(this.password);
    console.log(this.typeId);

    if (this.username === 'admin' && this.password === 'admin') {
      this.isError = false;

      let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzM1NjE1MjksImV4cCI6MTU2NTA5NzUyOSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImZ1bGxuYW1lIjoicGF0IHRhbmdrYXJrdW53aWdpZCIsImVtYWlsIjoiY2NiYmFhQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoic3RhZmYifQ.EbsqsLVZI7dWh2YZhTILhldrEF1AoK076Y0hFWmiK7w';
      
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
