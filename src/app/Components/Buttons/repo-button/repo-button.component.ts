import { Component } from '@angular/core';

@Component({
  selector: 'repoButton',
  standalone: true,
  imports: [],
  templateUrl: './repo-button.component.html',
  styleUrl: './repo-button.component.css'
})
export class RepoButtonComponent {
  redirectToRepo() {
    const url = "https://github.com/srCochayuyo/Donkey-Kong-Arcade"
    window.open(url, "_blank"); 
  }  

}
