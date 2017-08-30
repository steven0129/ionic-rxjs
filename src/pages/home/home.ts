import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageServiceProvider } from '../../providers/message-service/message-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private messageService: MessageServiceProvider) {
    this.getMessage()
  }

  getMessage() {
    this.messageService.getMessages().subscribe(data => console.log(data))
  }

}
