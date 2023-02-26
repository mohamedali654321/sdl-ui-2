import { Component } from '@angular/core';
import { ViewMode } from '../../../../core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { AbstractListableElementComponent } from '../../../../shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { Item } from '../../../../core/shared/item.model';

@listableObjectComponent('Place', ViewMode.ListElement)
@Component({
  selector: 'ds-place-list-element',
  styleUrls: ['./place-list-element.component.scss'],
  templateUrl: './place-list-element.component.html'
})
/**
 * The component for displaying a list element for an item of the type Organisation Unit
 */
export class PlaceListElementComponent extends AbstractListableElementComponent<Item> {
}
