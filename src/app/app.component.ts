//section 1
import { Component } from '@angular/core';

//section 2: component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//section 3: component logic
export class AppComponent {
  title = 'my-app';
}
