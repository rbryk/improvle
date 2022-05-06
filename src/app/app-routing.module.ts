import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {GameComponent} from "./screen/gamearea/game/game.component";
import {HelpComponent} from "./screen/gamearea/help/help.component";
import {InfoComponent} from "./screen/gamearea/info/info.component";
import {DefaultComponent} from "./default/default.component";

const routes: Routes = [
    {path: 'game', component: GameComponent},
    {path: 'help', component: HelpComponent},
    {path: 'info', component: InfoComponent},
    {path: 'default', component: DefaultComponent},
    {path: '', redirectTo: 'game', pathMatch: 'full'},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

const opts: ExtraOptions = {
    useHash: true
}

@NgModule({
    imports: [RouterModule.forRoot(routes, opts)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
