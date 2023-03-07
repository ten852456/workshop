import { Component } from '@angular/core';
import { faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  faUsersCog = faUsersCog;
  faPlusCircle = faPlusCircle;
  faSearch = faSearch;
}
