import { Injectable } from '@angular/core';
import { hasValue, isEmpty } from '../../shared/empty.util';
import { DSpaceObject } from '../shared/dspace-object.model';
import { TranslateService } from '@ngx-translate/core';
import { Metadata } from '../shared/metadata.utils';
import { LocaleService } from 'src/app/core/locale/locale.service'; // import LocaleService
/**
 * Returns a name for a {@link DSpaceObject} based
 * on its render types.
 */
@Injectable({
  providedIn: 'root'
})
export class DSONameService {

  //kware-edit check locale
  localeAr: boolean;
  localeEn: boolean;
  arabicLang: boolean;
  englishLang: boolean;
  title: string; // kware-edit
  
    constructor(private translateService: TranslateService,
      public localeService: LocaleService , /* kware edit - call service from LocaleService */
      ) {
  
    }
  /**
   * Functions to generate the specific names.
   *
   * If this list ever expands it will probably be worth it to
   * refactor this using decorators for specific entity types,
   * or perhaps by using a dedicated model for each entity type
   *
   * With only two exceptions those solutions seem overkill for now.
   */
  private readonly factories = {
    Person: (dso: DSpaceObject): string => {
      const familyName = this.localeService.getStringByLocale(dso.firstMetadataValue('person.familyName')) ;
      const givenName = this.localeService.getStringByLocale(dso.firstMetadataValue('person.givenName'));
      if (isEmpty(familyName) && isEmpty(givenName)) {
        return this.localeService.getStringByLocale(dso.firstMetadataValue('dc.title')) || dso.name;
      } else if (isEmpty(familyName) || isEmpty(givenName)) {
        return familyName || givenName;
      } else {
        return this.convertComma(`${familyName}, ${givenName}`);
      }
    },
    OrgUnit: (dso: DSpaceObject): string => {
      return  this.localeService.getStringByLocale(dso.firstMetadataValue('organization.legalName'));
    },
    Administration: (dso: DSpaceObject): string => {
      return this.localeService.getStringByLocale(dso.firstMetadataValue('organization.childLegalName'));
    },
    Place: (dso: DSpaceObject): string => {
      return this.localeService.getStringByLocale(dso.firstMetadataValue('place.legalName'));
    },
    Event: (dso: DSpaceObject): string => {
      return this.localeService.getStringByLocale(dso.firstMetadataValue('event.title'));
    },
    Series: (dso: DSpaceObject): string => {
      return this.localeService.getStringByLocale(dso.firstMetadataValue('series.name'));
    },
    Project: (dso: DSpaceObject): string => {
      return this.localeService.getStringByLocale(dso.firstMetadataValue('project.name'));
    },
    Site: (dso: DSpaceObject): string => {
      return this.localeService.getStringByLocale(dso.firstMetadataValue('place.childLegalName'));
    },
    Activity: (dso: DSpaceObject): string => {
      return this.localeService.getStringByLocale(dso.firstMetadataValue('event.childTitle'));
    },
    Default: (dso: DSpaceObject): string => {
      // If object doesn't have dc.title metadata use name property
             // kware-edit keywords end
   // kware-edit replace title ith alternative-title of items based on langugae

   this.localeAr = this.localeService.getCurrentLanguageCode() === 'ar';
   this.localeEn = this.localeService.getCurrentLanguageCode()   === 'en';
   this.arabicLang = dso.firstMetadataValue('dc.language.iso') === 'Arabic | العربية';
   this.englishLang = dso.firstMetadataValue('dc.language.iso') === 'English | الإنجليزية';

    switch (true){
        case (this.localeAr && this.arabicLang):
           this.title = dso.firstMetadataValue('dc.title');
           break;
         case (this.localeAr && !this.arabicLang && !!dso.firstMetadataValue('dc.title.alternative')  ):
           this.title = dso.firstMetadataValue('dc.title.alternative');
           break;
         case (this.localeAr && !this.arabicLang  && !dso.firstMetadataValue('dc.title.alternative') ):
           this.title = dso.firstMetadataValue('dc.title');
           break;
         case (this.localeEn && this.englishLang) :
           this.title = dso.firstMetadataValue('dc.title');
           break;
          case (this.localeEn && !this.englishLang && !!dso.firstMetadataValue('dc.title.alternative')  ) :
             this.title = dso.firstMetadataValue('dc.title.alternative');
             break;
           case (this.localeEn && !this.englishLang && !dso.firstMetadataValue('dc.title.alternative') ) :
             this.title = dso.firstMetadataValue('dc.title');
             break;

    }
    //kware-edit end
      return this.title || dso.name || this.translateService.instant('dso.name.untitled');
    }
  };

  /**
   * Get the name for the given {@link DSpaceObject}
   *
   * @param dso  The {@link DSpaceObject} you want a name for
   */
  getName(dso: DSpaceObject): string {
    const types = dso.getRenderTypes();
    const match = types
      .filter((type) => typeof type === 'string')
      .find((type: string) => Object.keys(this.factories).includes(type)) as string;

    let name;
    //kware-edit
    if (hasValue(match)) {
      name = this.localeService.getStringByLocale(this.factories[match](dso));
    }
    if (isEmpty(name)) {
      name = this.localeService.getStringByLocale(this.factories.Default(dso)) ;
    }
    return this.localeService.getStringByLocale(name);
  }


  /**
   * Gets the Hit highlight
   *
   * @param object
   * @param dso
   *
   * @returns {string} html embedded hit highlight.
   */
  getHitHighlights(object: any, dso: DSpaceObject): string {
    const types = dso.getRenderTypes();
    const entityType = types
      .filter((type) => typeof type === 'string')
      .find((type: string) => (['Person', 'OrgUnit']).includes(type)) as string;
    if (entityType === 'Person') {
      const familyName = this.firstMetadataValue(object, dso, 'person.familyName');
      const givenName = this.firstMetadataValue(object, dso, 'person.givenName');
      if (isEmpty(familyName) && isEmpty(givenName)) {
        return this.firstMetadataValue(object, dso, 'dc.title') || dso.name;
      } else if (isEmpty(familyName) || isEmpty(givenName)) {
        return familyName || givenName;
      }
      return `${familyName}, ${givenName}`;
    } else if (entityType === 'OrgUnit') {
      return this.firstMetadataValue(object, dso, 'organization.legalName');
    }else if (entityType === 'Administration') {
      return this.firstMetadataValue(object, dso, 'organization.childLegalName');
    }else if (entityType === 'Place') {
      return this.firstMetadataValue(object, dso, 'place.legalName');
    }else if (entityType === 'Site') {
      return this.firstMetadataValue(object, dso, 'place.childLegalName');
    }else if (entityType === 'Event') {
      return this.firstMetadataValue(object, dso, 'event.title');
    }else if (entityType === 'Activity') {
      return this.firstMetadataValue(object, dso, 'event.childTitle');
    }else if (entityType === 'Series') {
      return this.firstMetadataValue(object, dso, 'series.name');
    }else if (entityType === 'Project') {
      return this.firstMetadataValue(object, dso, 'project.name');
    }


    switch (true){
      case (this.localeAr && this.arabicLang):
         this.title = dso.firstMetadataValue('dc.title');
         break;
       case (this.localeAr && !this.arabicLang && !!dso.firstMetadataValue('dc.title.alternative')  ):
         this.title = dso.firstMetadataValue('dc.title.alternative');
         break;
       case (this.localeAr && !this.arabicLang  && !dso.firstMetadataValue('dc.title.alternative') ):
         this.title = dso.firstMetadataValue('dc.title');
         break;
       case (this.localeEn && this.englishLang) :
         this.title = dso.firstMetadataValue('dc.title');
         break;
        case (this.localeEn && !this.englishLang && !!dso.firstMetadataValue('dc.title.alternative')  ) :
           this.title = dso.firstMetadataValue('dc.title.alternative');
           break;
         case (this.localeEn && !this.englishLang && !dso.firstMetadataValue('dc.title.alternative') ) :
           this.title = dso.firstMetadataValue('dc.title');
           break;

  }
    return this.title || dso.name || this.translateService.instant('dso.name.untitled');
  }

  /**
   * Gets the first matching metadata string value from hitHighlights or dso metadata, preferring hitHighlights.
   *
   * @param object
   * @param dso
   * @param {string|string[]} keyOrKeys The metadata key(s) in scope. Wildcards are supported; see [[Metadata]].
   *
   * @returns {string} the first matching string value, or `undefined`.
   */
  firstMetadataValue(object: any, dso: DSpaceObject, keyOrKeys: string | string[]): string {
    return Metadata.firstValue([object.hitHighlights, dso.metadata], keyOrKeys);
  }


  // replace comma ', or ;' to '،' if language  is Arabic
  convertComma(str: any){
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
