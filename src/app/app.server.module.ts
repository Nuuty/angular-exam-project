import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { ServerPrebootModule } from 'preboot/server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';


@NgModule({
imports: [
    ServerModule,
    ServerPrebootModule.recordEvents({ appRoot: 'app-root' }),
    AppModule

],
bootstrap: [AppComponent]
})
export class AppServerModule { }
