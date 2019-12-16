import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Act1Component } from './act1/act1.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { FormsModule }   from '@angular/forms';
import { Act2Component } from './act2/act2.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    Act1Component,
    CalculatriceComponent,
    Act2Component,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
