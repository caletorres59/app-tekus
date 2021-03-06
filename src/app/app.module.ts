import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { PruductsService } from './pruducts.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [PruductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
