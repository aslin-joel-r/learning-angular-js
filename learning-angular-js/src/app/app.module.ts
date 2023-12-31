import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { BlogformComponent } from './blogform/blogform.component';
import { ToplanguagesComponent } from './toplanguages/toplanguages.component';

const routes:Routes=[
  {path:'blogs',component:NewcomponentComponent},
  {path:'addBlog',component:BlogformComponent},
  {path:'languages',component:ToplanguagesComponent},
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    BlogformComponent,
    ToplanguagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
