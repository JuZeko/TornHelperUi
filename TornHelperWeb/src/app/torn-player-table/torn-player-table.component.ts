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
  cellClassRules = {
    'cell-pass': (params: { value: string }) => params.value === 'green',
  };

  columnDefs = [
    {
      field: 'Attack',
      cellRenderer: BtnCellRenderer,
    },
    { field: 'level' },
    {
      cellClassRules: this.cellClassRules,

      headerName: 'Status Color',
      filter: true,
      field: 'status.color',
      cellStyle: (params: { value: string }) => {
        if (
          typeof params.value === 'string' &&
          params.value.toLowerCase() === 'green'
        ) {
          return { backgroundColor: '#e0ffcd' };
        }
        return { backgroundColor: '#ffcbcb' };
      },
    },
    { field: 'name' },
    {
      field: 'status.description',
      headerName: 'Status Description',
    },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public rowData$!: Observable<Player[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private tornStatusService: TornStatusService) {}

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.tornStatusService.getUserData();
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
