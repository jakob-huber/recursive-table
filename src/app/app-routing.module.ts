import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TestComponent } from './component/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
    ]
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
