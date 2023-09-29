import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactComponent } from './react/react.component';
import { LabelComponent } from './react/label/label.component';

@NgModule({
    declarations: [
        AppComponent,
        ReactComponent,
        LabelComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
