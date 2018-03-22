import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainModule } from '@modules/main.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoodService, CommentService, ScoreService } from '@services/index';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from '@modules/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [GoodService, CommentService, ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
