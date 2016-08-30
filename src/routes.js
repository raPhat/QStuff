import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Main} from './app/main';
import {PageNotFoundComponent} from './app/error/notfound';

@Component({
  selector: 'root',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
export class Root {
  ngOnInit() {
    console.log('Initial App State');
  }
}

export const routes = [
  {
    path: '',
    component: Main
  },
  { path: '**', component: PageNotFoundComponent }
];
