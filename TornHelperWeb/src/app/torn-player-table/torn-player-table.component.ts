import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TornStatusService } from '../shared/services/torn-status.service';
import { Player } from '../shared/interfaces/player.interface';
import { BtnCellRenderer } from '../shared/btn-cell-renderer.component';

@Component({
  selector: 'app-torn-player-table',
  templateUrl: './torn-player-table.component.html',
  styleUrls: ['./torn-player-table.component.scss'],
})
export class TornPlayerTableComponent {
  columnDefs = [
    { field: 'level' },
    { field: 'player_id' },
    { field: 'name' },
    {
      field: 'status.description',
      headerName: 'Status Description',
    },
    {
      field: 'status.state',
      headerName: 'Status State',
    },
    {
      field: 'status.color',
      headerName: 'Status Color',
    },
    {
      field: 'status.until',
      headerName: 'Status Until',
    },
    {
      field: 'Attack',
      cellRenderer: BtnCellRenderer,
      cellRendererParams: {
        clicked: function (field: any) {
          alert(`${field} was clicked`);
        },
      },
    },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<Player[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private tornStatusService: TornStatusService) {}

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.tornStatusService.getUserData();
    this.rowData$.pipe(tap((x) => console.log(x))).subscribe();
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
