import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SalesStore } from '../../services/sales.store';

@Component({
  selector: 'app-sales-index',
  imports: [CurrencyPipe],
  providers: [SalesStore],
  templateUrl: './sales-index.html',
  styleUrl: './sales-index.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesIndexComponent {
  readonly store = inject(SalesStore);
  readonly filters = ['All', 'Open', 'Won', 'Lost'] as const;
}
