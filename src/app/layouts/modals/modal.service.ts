import { ApplicationRef, Component, EventEmitter, Injectable, InjectFlags, InjectionToken, Injector, ProviderToken, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalComponent } from './modal/modal.component';

/**
 * Observable sur le type de données à injecter dans la vue intégrée à la modale
 *
 */
export var DATA_MODAL = new InjectionToken<any>("data" , {
  providedIn : 'root',
  factory : () => ModalService.DATAS?.asObservable()
});


@Injectable({
  providedIn: 'root'
})
export class ModalService<T = any> {


  public static DATAS? = new BehaviorSubject<any>(undefined);

  private modal!: ModalComponent;

  constructor(
    private applicationRef: ApplicationRef
  ) {}


  /**
   * Créé le composant de la modale et
   * l'insère dans la balise 'modal' créée lors de l'importation du module
   *
   */
  private load(): void {
    this.modal = <ModalComponent>this.applicationRef.bootstrap(ModalComponent,"modal").instance;
  }


  /**
   * Ouvre la modale
   * @param component le component a afficher dans la modale
   * @param data les données à gerer dans le composant metier
   * @returns un observable sur l'evenement de fermeture
   */
  open(component?: Type<T> , data?: any): Observable<CloseEvent> {
    ModalService.DATAS?.next(data);
    if(!this.modal) this.load();
    return this.modal.show(component);
  }

}





export abstract class CloseEvent{
  /**
   * Message de status
   */
  public static STATUS: string;

  /**
   * Datas renvoyées par la fermeture de datagueule :DDDDDD
   */
  public static CONTENT: string;

}
