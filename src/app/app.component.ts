import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// language list
import { enLang } from 'tango-app-shared';
import { chLang } from 'tango-app-shared';
import { esLang } from 'tango-app-shared';
import { jpLang } from 'tango-app-shared';
import { deLang } from 'tango-app-shared';
import { frLang } from 'tango-app-shared';
import { ThemeModeService } from 'tango-app-metronics';
import { GlobalStateService, TranslationService } from 'tango-app-shared';
import { environment } from 'src/environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'body[root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private modeService: ThemeModeService, 
    private gs:GlobalStateService
  ) {
    this.gs.environment.next(environment)
    // register translations
    this.translationService.loadTranslations(
      enLang.locale,
      chLang.locale,
      esLang.locale,
      jpLang.locale,
      deLang.locale,
      frLang.locale
    );
  }

  ngOnInit() {
    this.modeService.init();
  }
}
