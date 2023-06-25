import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinsComponent } from './coins.component';
import { CoinsTableComponent } from './components/coins-table/coins-table.component';
import { CoinsRoutingModule } from './coins-routing.module';

@NgModule({
  declarations: [CoinsComponent],
  imports: [CommonModule, CoinsTableComponent, CoinsRoutingModule],
})
export class CoinsModule {}
