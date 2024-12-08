import { Component } from '@angular/core';

@Component({
  selector: 'gitHubButton',
  standalone: true,
  imports: [],
  templateUrl: './git-hub-buton.component.html',
  styleUrl: './git-hub-buton.component.css'
})
export class GitHubButonComponent {
  redirect() {
    const url = "https://github.com/srCochayuyo"
    window.open(url, "_blank"); 
  }  

}
