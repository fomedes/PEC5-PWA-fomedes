import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './components/image-detail/image-detail.component';
import { ImagesComponent } from './components/image-list/images.component';

const routes: Routes = [
  { path: '', component: ImagesComponent },
  { path: 'image/:id', component: ImageComponent },
  { path: '**', component: ImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
