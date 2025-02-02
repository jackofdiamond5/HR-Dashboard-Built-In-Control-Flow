import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { TeamGrowthType } from '../models/dashboard-data/team-growth-type';
import { NewTeamMembersListType } from '../models/dashboard-data/new-team-members-list-type';
import { TeamMembersGridType } from '../models/dashboard-data/team-members-grid-type';
import { AllTeamMembersType } from '../models/dashboard-data/all-team-members-type';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  constructor(
    private http: HttpClient
  ) { }

  public getNewTeamMembersListList(): Observable<NewTeamMembersListType[]> {
    return this.http.get<NewTeamMembersListType[]>("https://excel2json.io/api/share/6371c465-f63a-4dd9-436e-08da496bf5f2")
      .pipe(catchError(ErrorHandlerService.handleError<NewTeamMembersListType[]>('getNewTeamMembersListList', [])));
  }

  public getTeamMembersGridList(): Observable<TeamMembersGridType[]> {
    return this.http.get<TeamMembersGridType[]>("https://excel2json.io/api/share/d2d94130-e6aa-4387-437e-08da496bf5f2")
      .pipe(catchError(ErrorHandlerService.handleError<TeamMembersGridType[]>('getTeamMembersGridList', [])));
  }

  public getTeamGrowthList(): Observable<TeamGrowthType[]> {
    return this.http.get<TeamGrowthType[]>("https://excel2json.io/api/share/9d362c81-e18a-4fff-4355-08da496bf5f2")
      .pipe(catchError(ErrorHandlerService.handleError<TeamGrowthType[]>('getTeamGrowthList', [])));
  }

  public getAllTeamMembersList(): Observable<AllTeamMembersType[]> {
    return this.http.get<AllTeamMembersType[]>("https://excel2json.io/api/share/d2d94130-e6aa-4387-437e-08da496bf5f2")
      .pipe(catchError(ErrorHandlerService.handleError<AllTeamMembersType[]>('getAllTeamMembersList', [])));
  }
}
