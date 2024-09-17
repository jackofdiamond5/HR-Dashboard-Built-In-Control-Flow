import { NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_CARD_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxCheckboxComponent, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxSwitchComponent, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { NewTeamMembersListType } from './models/dashboard-data/new-team-members-list-type';
import { DashboardDataService } from './services/dashboard-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IGX_DIALOG_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconButtonDirective, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxCheckboxComponent, IgxSwitchComponent, RouterLink, NgIf, RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public listItemVisible: boolean = false;
  public dashboardDataNewTeamMembersList: NewTeamMembersListType[] = [];
  public checked: boolean = true;

  constructor(
    private dashboardDataService: DashboardDataService,
  ) {}

  ngOnInit() {
    this.dashboardDataService.getNewTeamMembersListList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.dashboardDataNewTeamMembersList = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
