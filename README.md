# angular-dynamic-modal

## utilisation du service
 - Injecter le ModalService dans le component à partir duquel vous voulez ouvrir la modale.
 - Utilisez la methode ModalService.open(Component,data) et souscrivez (si besoin) à l'observable de fermeture. 
 - Dans le component envoyé à la modale, injectez y la data : 
      - @Inject(DATA_MODAL) data: Observable<any> 
  Souscrivez a ette observable pour recupéré la data passée via la methode ModalService.open();
  
## Disclaimer
  La modale s'appuie sur le framework bulma css
