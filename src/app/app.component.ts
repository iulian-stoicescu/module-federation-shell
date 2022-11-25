/*
 * Copyright '2022' Iulian Stoicescu or its subsidiaries. All Rights Reserved.
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'module-federation-shell';

  constructor(private router: Router) {
    // listen for window events dispatched from the test-mfe (sometimes it works with CustomEventInit, other times with CustomEvent)
    window.addEventListener('pathSelectedFromTestMfe', (customEvent: CustomEventInit) => {
      this.router.navigate(['../', customEvent.detail.path]);
    });
  }
}
