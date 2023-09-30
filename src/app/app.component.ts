import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';
  logo = "https://logospng.org/download/pokemon/pokemon-2048.png";
  imgProfile: string = "https://www.pngmart.com/files/12/Ash-Ketchum-Transparent-Background.png";
  links: string[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];


}
