import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MainPageComponent } from '@modules/index';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, BrowserModule
  ],
  declarations: [MainPageComponent]
})
export class MainModule { }
