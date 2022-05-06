import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { LeftbarComponent } from './screen/leftbar/leftbar.component';
import { GameareaComponent } from './screen/gamearea/gamearea.component';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './screen/gamearea/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { UnderConstructionComponent } from './screen/under-construction/under-construction.component';
import {MatCardModule} from "@angular/material/card";
import { HelpComponent } from './screen/gamearea/help/help.component';
import { InfoComponent } from './screen/gamearea/info/info.component';
import { GameComponent } from './screen/gamearea/game/game.component';
import { GameBoardComponent } from './screen/gamearea/game/game-board/game-board.component';
import { GameKeyboardComponent } from './screen/gamearea/game/game-keyboard/game-keyboard.component';
import { GameStatusBarComponent } from './screen/gamearea/game/game-status-bar/game-status-bar.component';
import { KeyboardTileComponent } from './screen/gamearea/game/game-keyboard/keyboard-tile/keyboard-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    LeftbarComponent,
    GameareaComponent,
    DefaultComponent,
    HeaderComponent,
    UnderConstructionComponent,
    HelpComponent,
    InfoComponent,
    GameComponent,
    GameBoardComponent,
    GameKeyboardComponent,
    GameStatusBarComponent,
    KeyboardTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
