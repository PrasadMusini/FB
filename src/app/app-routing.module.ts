import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookVillaComponent } from './book-villa/book-villa.component';
import { DemoComponent } from './demo/demo.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexComponent } from './index/index.component';
import { MailComponent } from './mail/mail.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { TindogSiteComponent } from './tindog-site/tindog-site.component';
import { WebPageComponent } from './web-page/web-page.component';

const routes: Routes = [
  {
    path:'file',
    component:FileUploadComponent
  },
  {
    path:'book',
    component:BookVillaComponent
  },
  {
    path:'web',
    component:WebPageComponent
  },
  {
    path:'index',
    component:IndexComponent
  },
  {
    path:'mail',
    component:MailComponent
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'search',
    component:SearchPageComponent
  },
  {
    path:'',
    component:DemoComponent
  },
  {
    path:'tindo',
    component:TindogSiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
