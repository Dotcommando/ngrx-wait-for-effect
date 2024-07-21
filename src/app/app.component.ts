import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromImportActions from './stores/import/actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <button (click)="startImport()">Start Import</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store) {}

  startImport() {
    this.store.dispatch(fromImportActions.importPhase1());
  }
}
