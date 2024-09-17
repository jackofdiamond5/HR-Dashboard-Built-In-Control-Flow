
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxIconComponent } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { AllTeamMembersType } from '../models/dashboard-data/all-team-members-type';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [IGX_CARD_DIRECTIVES, IgxIconComponent],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public dashboardDataAllTeamMembers: AllTeamMembersType[] = [];

  constructor(
    private dashboardDataService: DashboardDataService,
  ) {}

  ngOnInit() {
    this.dashboardDataService.getAllTeamMembersList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.dashboardDataAllTeamMembers = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
