import { Component, Input } from '@angular/core';
import { SearchResultGridElementComponent } from '../search-result-grid-element.component';
import { Collection } from '../../../../core/shared/collection.model';
import { CollectionSearchResult } from '../../../object-collection/shared/collection-search-result.model';
import { ViewMode } from '../../../../core/shared/view-mode.model';
import { listableObjectComponent } from '../../../object-collection/shared/listable-object/listable-object.decorator';
import { hasNoValue, hasValue } from '../../../empty.util';
import { followLink } from '../../../utils/follow-link-config.model';
import { LinkService } from '../../../../core/cache/builders/link.service';
import { TruncatableService } from '../../../truncatable/truncatable.service';
import { BitstreamDataService } from '../../../../core/data/bitstream-data.service';
import { LocaleService } from 'src/app/core/locale/locale.service'; //kware-edit
@Component({
  selector: 'ds-collection-search-result-grid-element',
  styleUrls: ['../search-result-grid-element.component.scss', 'collection-search-result-grid-element.component.scss'],
  templateUrl: 'collection-search-result-grid-element.component.html'
})
/**
 * Component representing a grid element for a collection search result
 */
@listableObjectComponent(CollectionSearchResult, ViewMode.GridElement)
export class CollectionSearchResultGridElementComponent extends SearchResultGridElementComponent< CollectionSearchResult, Collection > {
  private _dso: Collection;

  constructor(
    protected linkService: LinkService,
    protected truncatableService: TruncatableService,
    protected bitstreamDataService: BitstreamDataService,
    public localeService: LocaleService, //kware-edit
  ) {
    super(truncatableService, bitstreamDataService,linkService,localeService);
  }

  // @ts-ignore
  @Input() set dso(dso: Collection) {
    this._dso = dso;
    if (hasValue(this._dso) && hasNoValue(this._dso.logo)) {
      this.linkService.resolveLink<Collection>(
        this._dso,
        followLink('logo')
      );
    }
  }

  get dso(): Collection {
    return this._dso;
  }
}
