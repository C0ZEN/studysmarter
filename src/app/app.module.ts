import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DaysModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
