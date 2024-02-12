import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { RouterModule, Routes } from '@angular/router';
import {
  NgbDropdownModule,
  NgbProgressbarModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
// import { ExtrasModule } from '../partials/layout/extras/extras.module';
// import {
//   DrawersModule,
//   DropdownMenusModule,
//   ModalsModule,
//   EngagesModule,
// } from '../partials';
// import { EngagesComponent } from '../partials/layout/engages/engages.component';
// import { ThemeModeModule } from '../partials/layout/theme-mode-switcher/theme-mode.module';
import { KeeniconComponent } from './keenicon/keenicon.component';
import { TranslationModule } from '../../i18n';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ScriptsInitComponent } from './scripts-init/scripts-init.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageTitleComponent } from './header/page-title/page-title.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarLogoComponent } from './sidebar/sidebar-logo/sidebar-logo.component';
import { SidebarMenuComponent } from './sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarFooterComponent } from './sidebar/sidebar-footer/sidebar-footer.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { AccountingComponent } from './toolbar/accounting/accounting.component';
import { ClassicComponent } from './toolbar/classic/classic.component';
import { ExtendedComponent } from './toolbar/extended/extended.component';
import { ReportsComponent } from './toolbar/reports/reports.component';
import { SaasComponent } from './toolbar/saas/saas.component';
import { Routing } from '../../routes/routing';
import { LayoutScrollTopComponent } from './scroll-top/scroll-top.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ScriptsInitComponent,
    ToolbarComponent,
    PageTitleComponent,
    HeaderMenuComponent,
    // EngagesComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarMenuComponent,
    SidebarFooterComponent,
    NavbarComponent,
    AccountingComponent,
    ClassicComponent,
    ExtendedComponent,
    ReportsComponent,
    SaasComponent,
    KeeniconComponent,
    LayoutScrollTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslationModule,
    InlineSVGModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    // ExtrasModule,
    // ModalsModule,
    // DrawersModule,
    // EngagesModule,
    // DropdownMenusModule,
    NgbTooltipModule,
    TranslateModule,
    // ThemeModeModule,
  ],
  exports: [RouterModule],
})
export class LayoutModule {}
