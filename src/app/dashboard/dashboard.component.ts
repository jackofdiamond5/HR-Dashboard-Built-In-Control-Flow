import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { TeamGrowthType } from '../models/dashboard-data/team-growth-type';
import { TeamMembersGridType } from '../models/dashboard-data/team-members-grid-type';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconButtonDirective, IgxCategoryChartModule, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public dashboardDataTeamMembersGrid: TeamMembersGridType[] = [];
  public dashboardDataTeamGrowth: TeamGrowthType[] = [];

  constructor(
    private dashboardDataService: DashboardDataService,
  ) {}

  ngOnInit() {
    this.dashboardDataService.getTeamMembersGridList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.dashboardDataTeamMembersGrid = data
    );
    this.dashboardDataService.getTeamGrowthList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.dashboardDataTeamGrowth = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
