import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

const remotePath = '/remoteEntry.js';
const URL_Mfe = '/test-mfe' + remotePath;

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mfe',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: URL_Mfe,
      exposedModule: './web-components',
      elementName: 'test-mfe-element'
    } as WebComponentWrapperOptions
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
