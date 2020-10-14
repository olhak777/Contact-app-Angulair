/**
 *  Pour déclarer une classe comme composant
 *  de notre aoolication, on importe "component"
 *  via @angular/core
 */
import { Component } from '@angular/core';

/**
 *  c'est ce qu'on appel un décorateur.
 *   Il va nous permettre de donner des renseignements
 *   sur notre composants
 */
@Component({
  /**
   * Le selecteur est l'ID, l'identifiant
   * unique du composant au sein de l'application.
   */
  selector: 'app-root',
  /**
   * C'est la partie visible de notre composant.
   * C'est ce qui s'afficne à notre utilisateur.
   */
  templateUrl: './app.component.html',
  /**
   * Déclarer les styles CSS spécifique a ce composant.
   */
  styleUrls: ['./app.component.css']
})
/**
 * La classe contient les données du composant.
 * Dans notre architecture MVVM, notre classe correspond au Model.
 */
export class AppComponent {
  // -- Declaration d'une variable / propriété
  title = 'Gestion de Contact';
  contactProfil = null;
  // -- Declaration d'un objet contact
  unContact = {
    id: 1,
    name: 'Hugo LIEGEARD',
    email: 'nugo@biyn.media',
    tel: '07 83 97 15 15'
  };
  // -- Tableau de Contact
  mesContacts = [
    {
      id: 1,
      name: 'Hugo LIEGEARD',
      email: 'nugo@biyn.media',
      tel: '07 83 97 15 15'
    },
    {
      id: 2,
      name: 'Vanessa DEHECQ',
      email: 'vanessa.dehecq@gmail.com',
      tel: '07 89 45 23 56'
    },
    {
      id: 3,
      name: 'Manon DERYDT',
      email: 'manon.derydt@gmail.com',
      tel: '07 96 52 41 23'
    },
    {
      id: 4,
      name: 'Olga KORDIAK',
      email: 'olga.kordiak@gmail.com',
      tel: '01 56 89 78 45'
    },
  ];

  /**
   * Permet d'afficher les informations
   * d'un objet Contact.
   */
  displayContact(contactCliqueParUtilisateur): void {
    console.log(contactCliqueParUtilisateur);

    this.contactProfil = contactCliqueParUtilisateur;
  }
}
