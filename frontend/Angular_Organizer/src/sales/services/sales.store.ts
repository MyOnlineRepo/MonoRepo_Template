import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState
} from '@ngrx/signals';

import { SaleItem } from '../models/sale-item';

type SalesState = {
  items: SaleItem[];
  selectedStatus: 'All' | SaleItem['status'];
};

const initialState: SalesState = {
  items: [
    { id: 1, customer: 'Apex GmbH', status: 'Open', amount: 18000 },
    { id: 2, customer: 'Nordstern AG', status: 'Won', amount: 32000 },
    { id: 3, customer: 'Morgenrot KG', status: 'Lost', amount: 7500 },
    { id: 4, customer: 'Elbmarsch OHG', status: 'Open', amount: 12400 }
  ],
  selectedStatus: 'All'
};

export const SalesStore = signalStore(
  withState(initialState),
  withComputed(({ items, selectedStatus }) => ({
    visibleItems: computed(() => {
      const currentStatus = selectedStatus();

      return currentStatus === 'All'
        ? items()
        : items().filter((item) => item.status === currentStatus);
    }),
    totalVolume: computed(() =>
      items().reduce((sum, item) => sum + item.amount, 0)
    ),
    openCount: computed(
      () => items().filter((item) => item.status === 'Open').length
    )
  })),
  withMethods((store) => ({
    selectStatus(status: SalesState['selectedStatus']): void {
      patchState(store, { selectedStatus: status });
    }
  }))
);

export type SalesStore = InstanceType<typeof SalesStore>;
