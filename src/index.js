import 'reflect-metadata';
import 'zone.js';

import {bootstrap} from '@angular/platform-browser-dynamic';

import './index.scss';

import {provideRouter} from '@angular/router';
import {enableProdMode, OnInit} from '@angular/core';
import {routes, Root} from './routes';
import {provideForms, disableDeprecatedForms} from '@angular/forms';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(Root, [
  provideRouter(routes),
  disableDeprecatedForms(),
  provideForms()
]);
