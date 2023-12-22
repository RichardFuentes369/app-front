import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { BannerUserComponent } from '../banner-user/banner-user.component';
import { SectionNavbarUserComponent } from '../section-navbar-user/section-navbar-user.component';
import { MenuNavegacionUserComponent } from '../section-navegacion-user/section-navegacion-user.component';
import { SectionNoticiasUserComponent } from '../section-noticias-user/section-noticias-user.component';
import { SectionTramitesUserComponent } from '../section-tramites-user/section-tramites-user.component';
import { SectionRedesUserComponent } from '../section-redes-user/section-redes-user.component';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    BannerUserComponent,
    SectionNavbarUserComponent,
    MenuNavegacionUserComponent,
    SectionNoticiasUserComponent,
    SectionTramitesUserComponent,
    SectionRedesUserComponent
  ]
})
export class DashboardUserComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
}
