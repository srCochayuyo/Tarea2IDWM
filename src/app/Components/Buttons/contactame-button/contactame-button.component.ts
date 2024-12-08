import { Component, EventEmitter, Output } from '@angular/core';
import { ContactameFormComponent } from '../../Forms/contactame-form/contactame-form.component';

@Component({
  selector: 'contactameButton',
  standalone: true,
  imports: [ContactameFormComponent],
  templateUrl: './contactame-button.component.html',
  styleUrl: './contactame-button.component.css'
})
export class ContactameButtonComponent {

  isOpen: boolean = false;

  openModal() {
    this.isOpen = true; 
  }

  closeModal() {
    this.isOpen = false; 
  }

}
