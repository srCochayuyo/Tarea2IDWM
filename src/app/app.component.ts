import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { GitHubButonComponent } from './Components/Buttons/git-hub-buton/git-hub-buton.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GitHubButonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tarea2IDWM';

  ngOnInit(): void {
    initFlowbite();
  }
}

