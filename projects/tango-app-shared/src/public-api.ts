/*
 * Public API Surface of tango-app-shared
 */

// Components
export * from './lib/modules/layout/layout/layout.component';
export * from './lib/modules/layout/content/content.component';
export * from './lib/modules/layout/footer/footer.component';
export * from './lib/modules/layout/header/header.component';
export * from './lib/modules/layout/header/header-menu/header-menu.component';
export * from './lib/modules/layout/header/navbar/navbar.component';
export * from './lib/modules/layout/header/page-title/page-title.component';
export * from './lib/modules/layout/scripts-init/scripts-init.component';
export * from './lib/modules/layout/sidebar/sidebar-footer/sidebar-footer.component';
export * from './lib/modules/layout/sidebar/sidebar-logo/sidebar-logo.component';
export * from './lib/modules/layout/sidebar/sidebar-menu/sidebar-menu.component';
export * from './lib/modules/layout/sidebar/sidebar.component';
export * from './lib/modules/layout/toolbar/accounting/accounting.component';
export * from './lib/modules/layout/toolbar/classic/classic.component';
export * from './lib/modules/layout/toolbar/extended/extended.component';
export * from './lib/modules/layout/toolbar/reports/reports.component';
export * from './lib/modules/layout/toolbar/saas/saas.component';
export * from './lib/modules/layout/toolbar/toolbar.component';
export * from './lib/modules/layout/scroll-top/scroll-top.component';

export * from './lib/modules/errors/errors.component';
export * from './lib/modules/errors/error404/error404.component';
export * from './lib/modules/errors/error500/error500.component';


// i18n
export * from './lib/i18n/translation.module';
export * from './lib/i18n/translation.service';
export * as enLang from './lib/i18n/vocabs/en';
export * as chLang from './lib/i18n/vocabs/ch';
export * as deLang from './lib/i18n/vocabs/de';
export * as esLang from './lib/i18n/vocabs/es';
export * as frLang from './lib/i18n/vocabs/fr';
export * as jpLang from './lib/i18n/vocabs/jp';

// modules
export * from './lib/modules/layout/layout.module';
export * from './lib/modules/errors/errors.module';

// guards
export * from './lib/guards/auth.guard';

// interfaces
export * from './lib/interfaces/global-state';


// services
export * from './lib/services/global-state.service';
export * from './lib/services/auth.service';

// interceptors
export * from './lib/interceptors/http-auth-interceptor';







