import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainModule } from '@modules/main.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoodService } from '@services/good.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from '@modules/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
