import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recipe Explorer';
  searchTerm: string = '';

  // PUBLIC_INTERFACE
  onSearch() : void {
    // This method will be enhanced if we make the parent manage router
    // For now, search is handled via input in list; this remains for UI structure
  }
}
