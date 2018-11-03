import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  temp: number = 40;
  level: number = 9;
  

  constructor(public alertCtrl: AlertController) {

  }

  referencia: string = '';

  btRefer(){
    let alert = this.alertCtrl.create({
      title: 'Nivel de referecia',
      message: "Ingrese una referencia para el nivel del tanque, debe ser un numero entre 0 y 20",
      inputs: [
        {
          name: 'referencia',
          placeholder: 'Nivel de referencia',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado')
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            if (data.referencia = '' || data.referencia == null) {
              this.alertCtrl.create({
                message: 'Debe ingresar una referencia',
                buttons: [{ text: 'OK' }]
              }).present();
              return;
            }
            else {
              this.referencia = data.referencia;
              console.log('se registro la referencia')

            }
            console.log('referencia - data');
            console.log(data.referencia);
          }
        }
      ]
      
    });
    alert.present();
  }


}

