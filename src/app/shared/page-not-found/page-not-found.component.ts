import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: '<h2 style="color: red;">ไม่พบหน้าที่ท่านต้องการ (error 404)</h2>',
  styles:[]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
