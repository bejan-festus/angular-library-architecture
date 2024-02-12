import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import {
  ToggleComponent,
  ScrollTopComponent,
  DrawerComponent,
  StickyComponent,
  MenuComponent,
  ScrollComponent,
} from 'tango-app-metronics';
import { Title } from '@angular/platform-browser';
import { LayoutService, PageInfoService } from 'tango-app-metronics';

@Component({
  selector: 'lib-scripts-init',
  templateUrl: './scripts-init.component.html',
})
export class ScriptsInitComponent implements OnInit, OnDestroy {
  private unsubscribe: Subscription[] = [];
  constructor(
    private layout: LayoutService,
    private pageInfo: PageInfoService,
    private router: Router,
    private titleService: Title,
  ) {
    const initPageInfo = () => {
      setTimeout(() => {
        this.pageInfo.calculateTitle();
        this.pageInfo.calculateBreadcrumbs();

        this.pageInfo.title.asObservable().subscribe((title) => {
          this.titleService.setTitle(title + ' - Metronic');
        });
      }, 10);
    };

    initPageInfo();
    // subscribe to router events
    this.router.events
      .pipe(filter((event) => event instanceof ResolveEnd))
      .subscribe(initPageInfo);
  }

  ngOnInit(): void {
    this.pluginsInitialization();
    const layoutUpdateSubscription = this.layout.layoutConfigSubject
      .asObservable()
      .subscribe(() => {
        this.pluginsReInitialization();
      });
    this.unsubscribe.push(layoutUpdateSubscription);
  }

  pluginsInitialization() {
    setTimeout(() => {
      ToggleComponent.bootstrap();
      ScrollTopComponent.bootstrap();
      DrawerComponent.bootstrap();
      StickyComponent.bootstrap();
      MenuComponent.bootstrap();
      ScrollComponent.bootstrap();
    }, 200);
  }

  pluginsReInitialization() {
    setTimeout(() => {
      ToggleComponent.reinitialization();
      ScrollTopComponent.reinitialization();
      DrawerComponent.reinitialization();
      StickyComponent.bootstrap();
      MenuComponent.reinitialization();
      ScrollComponent.reinitialization();
    }, 100);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
