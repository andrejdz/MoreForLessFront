import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MainPageComponent, ItemPageComponent } from '@modules/index';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, BrowserModule, NgbModule, RouterModule, FormsModule
  ],
  declarations: [MainPageComponent, ItemPageComponent]
})
export class MainModule { }
