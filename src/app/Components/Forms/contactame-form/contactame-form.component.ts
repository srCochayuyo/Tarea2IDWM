import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'contactameForm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactame-form.component.html',
  styleUrl: './contactame-form.component.css'
})
export class ContactameFormComponent {

  @Input() isOpen: boolean = false; 
  @Input() closeModal: () => void = () => {}
}
