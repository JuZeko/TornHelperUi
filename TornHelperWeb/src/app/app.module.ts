import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TornPlayerTableComponent } from './torn-player-table/torn-player-table.component';
import { BtnCellRenderer } from './shared/btn-cell-renderer.component';
import { HeaderComponent } from './header/header.component';
import { UserStatsComponent } from './user-stats/user-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    TornPlayerTableComponent,
    BtnCellRenderer,
    HeaderComponent,
    UserStatsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AgGridModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
