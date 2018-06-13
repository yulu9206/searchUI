import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { TestComponent } from "./test/test.component";
import { ScoreComponent } from "./score/score.component";
import { ResultsComponent } from "./results/results.component";
import { ScoreResComponent } from "./score-res/score-res.component";


const appRoutes: Routes = [
    {path: '', redirectTo: '/test', pathMatch: 'full'},
    {path: 'test', component: TestComponent},
    {path: 'score', component: ScoreComponent},
    {path: 'results', component: ResultsComponent},
    {path: 'score-res', component: ScoreResComponent},
    {path: '**', component: TestComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})


export class AppRoutingModule {

}