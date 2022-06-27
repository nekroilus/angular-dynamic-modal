import { NgModule, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalContentDirective } from './directives/modal-content.directive';


/**
 * Au chargement du module , on créé une balise qui va contenir le component de la modal.
 */
@NgModule({
  declarations: [
    ModalComponent,
    ModalContentDirective,
  ],
  imports: [
    CommonModule
  ],
  bootstrap: []
})
export class ModalsModule {
  constructor(
  ){    
    document.body.appendChild(document.createElement('modal'))
  }
 }
