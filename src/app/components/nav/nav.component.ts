import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FavoritesComponent } from '../favorites/favorites.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}
  openDialog(): void {
    this.dialog.open(FavoritesComponent, {
      enterAnimationDuration: 1,
    });
  }
}