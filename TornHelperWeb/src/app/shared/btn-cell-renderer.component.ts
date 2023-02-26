import { Component, OnDestroy } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'btn-cell-renderer',
  template: ` <button (click)="btnClickedHandler($event)">Attack!</button> `,
})
export class BtnCellRenderer implements ICellRendererAngularComp {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler(event: any) {
    window.open(
      `https://www.torn.com/profiles.php?XID=${this.params.data.player_id}`,
      '_blank'
    );
  }

  refresh() {
    return false;
  }
}
