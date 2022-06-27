
import { AfterViewInit, ApplicationRef, Component, ComponentRef, ElementRef, EventEmitter, InjectionToken, Input, OnInit, TemplateRef,  Type,  ViewChild, ViewContainerRef, ViewRef, ɵComponentType } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ModalContentDirective } from '../directives/modal-content.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent<T = any> implements OnInit {


  isActive = "";

  @ViewChild('modal', { static: true }) public modal: ElementRef = new ElementRef("");


  @ViewChild(ModalContentDirective , {static : true}) public modalContent!: ModalContentDirective;

  private closeEmitter = new EventEmitter<any>();

  constructor() {}

  show(component?: Type<T>): Observable<any> {
    const view  = this.modalContent.viewContainerRef;
    view.clear();
    if(component)
     view.createComponent(component);
     this.isActive = "is-active";
    return this.closeEmitter.asObservable();
  }

  hide(): void {
    this.isActive = "";
    this.closeEmitter.emit();
  }
  ngOnInit(): void {
  }

}

