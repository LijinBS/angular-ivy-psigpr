import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import {
  DxDataGridModule,
  DxTemplateModule,
  DxProgressBarModule
} from "devextreme-angular";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DxDataGridModule,
    DxTemplateModule,
    DxProgressBarModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
