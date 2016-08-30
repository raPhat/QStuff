import {Component} from '@angular/core';
import {Header} from './header';
import {Title} from './title';
import {Techs} from './techs/techs';
import {Footer} from './footer';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap';

@Component({
  selector: 'App',
  template: require('./main.html'),
  providers:[ ],
  directives: [
        AlertComponent, DATEPICKER_DIRECTIVES
  ]
})
export class Main {
  date: Date = new Date();
}
