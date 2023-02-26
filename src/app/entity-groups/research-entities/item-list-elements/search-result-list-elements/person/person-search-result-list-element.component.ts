import { Component, Inject } from '@angular/core';
import {
  listableObjectComponent
} from '../../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from '../../../../../core/shared/view-mode.model';
import {
  ItemSearchResultListElementComponent
} from '../../../../../shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component';
import { TruncatableService } from '../../../../../shared/truncatable/truncatable.service';
import { DSONameService } from '../../../../../core/breadcrumbs/dso-name.service';
import { APP_CONFIG, AppConfig } from '../../../../../../config/app-config.interface';
import { LocaleService } from 'src/app/core/locale/locale.service'; //kware-edit
import { LinkService } from 'src/app/core/cache/builders/link.service';//kware-edit

@listableObjectComponent('PersonSearchResult', ViewMode.ListElement)
@Component({
  selector: 'ds-person-search-result-list-element',
  styleUrls: ['./person-search-result-list-element.component.scss'],
  templateUrl: './person-search-result-list-element.component.html'
})
/**
 * The component for displaying a list element for an item search result of the type Person
 */
export class PersonSearchResultListElementComponent extends ItemSearchResultListElementComponent {

  public constructor(
    protected truncatableService: TruncatableService,
    protected dsoNameService: DSONameService,
    public localeService: LocaleService, //kware-edit
    protected linkService: LinkService,//kware-edit
    @Inject(APP_CONFIG) protected appConfig: AppConfig
  ) {
    super(truncatableService, dsoNameService,linkService, appConfig);
  }

  /**
   * Display thumbnail if required by configuration
   */
  showThumbnails: boolean;

  ngOnInit(): void {
    super.ngOnInit();
    this.showThumbnails = this.appConfig.browseBy.showThumbnails;
  }

   // replace comma ', or ;' to '،' if language  is Arabic
   convertComma(str: string): string{
    let newstr = '';
    if (this.localeService.getCurrentLanguageCode() === 'ar'){
      let regx = /;|,/gi;
     newstr = str.replace(regx, '،');
     return newstr;

    } else {
      return str;
    }
  }
}
