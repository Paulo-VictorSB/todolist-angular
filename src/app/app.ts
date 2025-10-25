import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './components/container/container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container],
  template: `
    <app-container/>
    <router-outlet />
  `,
})
export class App {

}
