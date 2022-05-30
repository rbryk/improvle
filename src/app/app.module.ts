import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ScreenComponent} from './screen/screen.component';
import {LeftbarComponent} from './screen/leftbar/leftbar.component';
import {GameareaComponent} from './screen/gamearea/gamearea.component';
import {HeaderComponent} from './screen/gamearea/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {UnderConstructionComponent} from './screen/under-construction/under-construction.component';
import {MatCardModule} from "@angular/material/card";
import {HelpComponent} from './screen/gamearea/help/help.component';
import {InfoComponent} from './screen/gamearea/info/info.component';
import {GameComponent} from './screen/gamearea/game/game.component';
import {GameBoardComponent} from './screen/gamearea/game/game-board/game-board.component';
import {GameKeyboardComponent} from './screen/gamearea/game/game-keyboard/game-keyboard.component';
import {GameStatusBarComponent} from './screen/gamearea/game/game-status-bar/game-status-bar.component';
import {KeyboardTileComponent} from './screen/gamearea/game/game-keyboard/keyboard-tile/keyboard-tile.component';
import {KeyboardSelectionComponent} from './screen/gamearea/game/keyboard-selection/keyboard-selection.component';
import {StarComponent} from './screen/gamearea/game/keyboard-selection/star/star.component';
import {EmptyRowComponent} from './screen/gamearea/game/game-board/next-lines/empty-row/empty-row.component';
import {EmptyTileComponent} from './screen/gamearea/game/game-board/next-lines/empty-tile/empty-tile.component';
import {RowComponent} from './screen/gamearea/game/game-board/previous-lines/row/row.component';
import {TileComponent} from './screen/gamearea/game/game-board/previous-lines/tile/tile.component';
import {InputTileComponent} from './screen/gamearea/game/game-board/current-line/input-tile/input-tile.component';
import {InputRowComponent} from './screen/gamearea/game/game-board/current-line/input-row/input-row.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {EndgamePopupComponent} from './screen/gamearea/game/endgame-popup/endgame-popup.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
    declarations: [
        AppComponent,
        ScreenComponent,
        LeftbarComponent,
        GameareaComponent,
        HeaderComponent,
        UnderConstructionComponent,
        HelpComponent,
        InfoComponent,
        GameComponent,
        GameBoardComponent,
        GameKeyboardComponent,
        GameStatusBarComponent,
        KeyboardTileComponent,
        KeyboardSelectionComponent,
        StarComponent,
        EmptyRowComponent,
        EmptyTileComponent,
        RowComponent,
        TileComponent,
        InputTileComponent,
        InputRowComponent,
        EndgamePopupComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatCardModule,
        MatSnackBarModule,
        ClipboardModule,
        MatTooltipModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
