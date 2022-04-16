import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import { Loader, LoaderOptions } from "google-maps";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey:
    //     "API KEY" + "&libraries=visualization",
    //   libraries: ["visualization"],
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
