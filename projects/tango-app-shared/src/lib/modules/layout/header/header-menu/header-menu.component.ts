import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PageInfoService, PageLink } from 'tango-app-metronics';


@Component({
  selector: 'lib-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit, OnDestroy {
  private unsubscribe: Subscription[] = [];

  @Input() appPageTitleDirection: string = '';
  @Input() appPageTitleDescription: boolean = true;

  title$: Observable<string>;
  description$: Observable<string>;

  constructor(private pageInfo: PageInfoService, private cd:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.title$ = this.pageInfo.title.asObservable();
    this.description$ = this.pageInfo.description.asObservable();

    this.title$.subscribe((e)=>{
      this.cd.detectChanges()
    })
    this.description$.subscribe((e)=>{
      this.cd.detectChanges()
    })
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}

