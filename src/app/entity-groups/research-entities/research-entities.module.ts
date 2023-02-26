import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { OrgUnitComponent } from './item-pages/org-unit/org-unit.component';
import { PersonComponent } from './item-pages/person/person.component';
import { ProjectComponent } from './item-pages/project/project.component';
import { OrgUnitListElementComponent } from './item-list-elements/org-unit/org-unit-list-element.component';
import { PersonListElementComponent } from './item-list-elements/person/person-list-element.component';
import { ProjectListElementComponent } from './item-list-elements/project/project-list-element.component';
import { PersonGridElementComponent } from './item-grid-elements/person/person-grid-element.component';
import { OrgUnitGridElementComponent } from './item-grid-elements/org-unit/org-unit-grid-element.component';
import { ProjectGridElementComponent } from './item-grid-elements/project/project-grid-element.component';
import { OrgUnitSearchResultListElementComponent } from './item-list-elements/search-result-list-elements/org-unit/org-unit-search-result-list-element.component';
import { PersonSearchResultListElementComponent } from './item-list-elements/search-result-list-elements/person/person-search-result-list-element.component';
import { ProjectSearchResultListElementComponent } from './item-list-elements/search-result-list-elements/project/project-search-result-list-element.component';
import { PersonSearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/person/person-search-result-grid-element.component';
import { OrgUnitSearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/org-unit/org-unit-search-result-grid-element.component';
import { ProjectSearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/project/project-search-result-grid-element.component';
import { PersonItemMetadataListElementComponent } from './metadata-representations/person/person-item-metadata-list-element.component';
import { OrgUnitItemMetadataListElementComponent } from './metadata-representations/org-unit/org-unit-item-metadata-list-element.component';
import { PersonSearchResultListSubmissionElementComponent } from './submission/item-list-elements/person/person-search-result-list-submission-element.component';
import { PersonInputSuggestionsComponent } from './submission/item-list-elements/person/person-suggestions/person-input-suggestions.component';
import { NameVariantModalComponent } from './submission/name-variant-modal/name-variant-modal.component';
import { OrgUnitInputSuggestionsComponent } from './submission/item-list-elements/org-unit/org-unit-suggestions/org-unit-input-suggestions.component';
import { OrgUnitSearchResultListSubmissionElementComponent } from './submission/item-list-elements/org-unit/org-unit-search-result-list-submission-element.component';
import { ExternalSourceEntryListSubmissionElementComponent } from './submission/item-list-elements/external-source-entry/external-source-entry-list-submission-element.component';
import { OrgUnitSidebarSearchListElementComponent } from './item-list-elements/sidebar-search-list-elements/org-unit/org-unit-sidebar-search-list-element.component';
import { PersonSidebarSearchListElementComponent } from './item-list-elements/sidebar-search-list-elements/person/person-sidebar-search-list-element.component';
import { ProjectSidebarSearchListElementComponent } from './item-list-elements/sidebar-search-list-elements/project/project-sidebar-search-list-element.component';
import { ItemSharedModule } from '../../item-page/item-shared.module';
import {SubOrgUnitComponent} from './item-pages/sub-org-unit/sub-org-unit.component'
import {SubOrgUnitItemMetadataListElementComponent} from './metadata-representations/sub-org-unit/sub-org-unit-item-metadata-list-element.component'
import {SubOrgUnitListElementComponent} from './item-list-elements/sub-org-unit/sub-org-unit-list-element.component'
import {SubOrgUnitSidebarSearchListElementComponent} from './item-list-elements/sidebar-search-list-elements/sub-org-unit/sub-org-unit-sidebar-search-list-element.component'
import {SubOrgUnitSearchResultListElementComponent} from './item-list-elements/search-result-list-elements/sub-org-unit/sub-org-unit-search-result-list-element.component'
import {SubOrgUnitGridElementComponent} from './item-grid-elements/sub-org-unit/sub-org-unit-grid-element.component'
import {SubOrgUnitSearchResultGridElementComponent} from './item-grid-elements/search-result-grid-elements/sub-org-unit/sub-org-unit-search-result-grid-element.component';
import {PlaceComponent} from './item-pages/place/place.component'
import {PlaceSearchResultListElementComponent} from './item-list-elements/search-result-list-elements/place/place-search-result-list-element.component'
import {PlaceListElementComponent} from './item-list-elements/place/place-list-element.component'
import {PlaceSidebarSearchListElementComponent} from './item-list-elements/sidebar-search-list-elements/place/place-sidebar-search-list-element.component'
import {PlaceGridElementComponent} from './item-grid-elements/place/place-grid-element.component'
import {PlaceSearchResultGridElementComponent} from './item-grid-elements/search-result-grid-elements/place/place-search-result-grid-element.component';
import { EventComponent } from './item-pages/event/event.component'
import {EventListElementComponent} from './item-list-elements/event/event-list-element.component'
import {EventSidebarSearchListElementComponent} from './item-list-elements/sidebar-search-list-elements/event/event-sidebar-search-list-element.component'
import {EventSearchResultListElementComponent} from './item-list-elements/search-result-list-elements/event/event-search-result-list-element.component'
import {EventGridElementComponent} from './item-grid-elements/event/event-grid-element.component'
import {EventSearchResultGridElementComponent} from './item-grid-elements/search-result-grid-elements/event/event-search-result-grid-element.component'
import { EntityFileSectionComponent } from './entity-file-section/entity-file-section.component';
import { ThemedEntityFileSectionComponent } from './entity-file-section/themed-entity-file-section.component';
import { SeriesComponent } from './item-pages/series/series.component';
import { SeriesListElementComponent } from './item-list-elements/series/series-list-element.component';
import { SeriesSidebarSearchListElementComponent } from './item-list-elements/sidebar-search-list-elements/series/series-sidebar-search-list-element.component';
import { SeriesSearchResultListElementComponent } from './item-list-elements/search-result-list-elements/series/series-search-result-list-element.component';
import { SeriesGridElementComponent } from './item-grid-elements/series/series-grid-element.component';
import { SeriesSearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/series/series-search-result-grid-element.component';

import { EntityMediaViewerComponent } from './entity-media-viewer/entity-media-viewer.component';
import { EntityMediaViewerVideoComponent } from './entity-media-viewer/entity-media-viewer-video/entity-media-viewer-video.component';
import { EntityMediaViewerImageComponent } from './entity-media-viewer/entity-media-viewer-image/entity-media-viewer-image.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { SiteComponent } from './item-pages/site/site.component';
import { SiteListElementComponent } from './item-list-elements/site/site-list-element.component';
import { SiteSidebarSearchListElementComponent } from './item-list-elements/sidebar-search-list-elements/site/site-sidebar-search-list-element.component';
import { SiteSearchResultListElementComponent } from './item-list-elements/search-result-list-elements/site/site-search-result-list-element.component';
import { SiteGridElementComponent } from './item-grid-elements/site/site-grid-element.component';
import { SiteSearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/site/site-search-result-grid-element.component';
import { ActivityComponent } from './item-pages/activity/activity.component';
import { ActivityListElementComponent } from './item-list-elements/activity/activity-list-element.component';
import { ActivitySidebarSearchListElementComponent } from './item-list-elements/sidebar-search-list-elements/activity/activity-sidebar-search-list-element.component';
import { ActivitySearchResultListElementComponent } from './item-list-elements/search-result-list-elements/activity/activity-search-result-list-element.component';
import { ActivityGridElementComponent } from './item-grid-elements/activity/activity-grid-element.component';
import { ActivitySearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/activity/activity-search-result-grid-element.component';
import { ResultsBackButtonModule } from '../../shared/results-back-button/results-back-button.module';
import { DsoPageModule } from '../../shared/dso-page/dso-page.module';
const ENTRY_COMPONENTS = [
// put only entry components that use custom decorator
EntityMediaViewerComponent,
EntityMediaViewerVideoComponent,
EntityMediaViewerImageComponent,
SiteComponent,
SiteListElementComponent,
SiteSidebarSearchListElementComponent,
SiteSearchResultListElementComponent,
SiteGridElementComponent,
SiteSearchResultGridElementComponent,
ActivityComponent,
ActivityListElementComponent,
ActivitySidebarSearchListElementComponent,
ActivitySearchResultListElementComponent,
ActivityGridElementComponent,
ActivitySearchResultGridElementComponent,
  OrgUnitComponent,
  SeriesComponent,
  SeriesListElementComponent,
  SeriesSidebarSearchListElementComponent,
  SeriesSearchResultListElementComponent,
  SeriesGridElementComponent,
  SeriesSearchResultGridElementComponent,
  ThemedEntityFileSectionComponent,
  EntityFileSectionComponent,
  SubOrgUnitComponent,
  PersonComponent,
  ProjectComponent,
  OrgUnitListElementComponent,
  OrgUnitItemMetadataListElementComponent,
  SubOrgUnitItemMetadataListElementComponent,
  SubOrgUnitSearchResultGridElementComponent,
  SubOrgUnitGridElementComponent,
  SubOrgUnitSearchResultListElementComponent,
  SubOrgUnitSidebarSearchListElementComponent,
  SubOrgUnitListElementComponent,
  PlaceSearchResultListElementComponent,
  PlaceSearchResultGridElementComponent,
  PlaceGridElementComponent,
  PlaceSidebarSearchListElementComponent,
  PlaceListElementComponent,
  PlaceComponent,
  EventComponent,
  EventListElementComponent,
  EventSidebarSearchListElementComponent,
  EventSearchResultListElementComponent,
  EventGridElementComponent,
  EventSearchResultGridElementComponent,
  PersonListElementComponent,
  PersonItemMetadataListElementComponent,
  ProjectListElementComponent,
  PersonGridElementComponent,
  OrgUnitGridElementComponent,
  ProjectGridElementComponent,
  OrgUnitSearchResultListElementComponent,
  PersonSearchResultListElementComponent,
  ProjectSearchResultListElementComponent,
  PersonSearchResultGridElementComponent,
  OrgUnitSearchResultGridElementComponent,
  ProjectSearchResultGridElementComponent,
  PersonSearchResultListSubmissionElementComponent,
  OrgUnitSearchResultListSubmissionElementComponent,
  OrgUnitInputSuggestionsComponent,
  ExternalSourceEntryListSubmissionElementComponent,
  OrgUnitSidebarSearchListElementComponent,
  PersonSidebarSearchListElementComponent,
  ProjectSidebarSearchListElementComponent,
];

const COMPONENTS = [
  NameVariantModalComponent,
  PersonInputSuggestionsComponent,
  ...ENTRY_COMPONENTS
];

@NgModule({
  imports: [
    CommonModule,
    ItemSharedModule,
    SharedModule,
    NgxGalleryModule,
    NgbTooltipModule,
    ResultsBackButtonModule,
    DsoPageModule,
  ],
  declarations: [
    ...COMPONENTS,
    
  ]
})
export class ResearchEntitiesModule {
  /**
   * NOTE: this method allows to resolve issue with components that using a custom decorator
   * which are not loaded during SSR otherwise
   */
  static withEntryComponents() {
    return {
      ngModule: ResearchEntitiesModule,
      providers: ENTRY_COMPONENTS.map((component) => ({ provide: component }))
    };
  }
}
