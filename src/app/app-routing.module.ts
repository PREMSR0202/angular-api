import { ImageListComponent } from './image-list/image-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'search-image', pathMatch: 'full' },
  { path: 'search-image', component: ImageListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingPath = [
  ImageListComponent
]
