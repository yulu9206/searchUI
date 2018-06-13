import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';
import { ResultsComponent } from './results/results.component';
import { ScoreComponent } from './score/score.component';
import { ScoreResComponent } from './score-res/score-res.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { TestService } from './test.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    ResultsComponent,
    ScoreComponent,
    ScoreResComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
