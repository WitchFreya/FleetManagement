import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../service/manager.service';
import { Manager } from '../../../models/manager.model';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.less']
})
export class ManagerListComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  private searchTerms = new Subject<string>();
  managers$: Observable<Manager[]>;

  ngOnInit() {
    this.managers$ = this.searchTerms.pipe(
      debounceTime(300),
      switchMap((term: string) => term.trim() ? this.managerService.searchManagers(term) : this.managerService.getAll())
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }
}
