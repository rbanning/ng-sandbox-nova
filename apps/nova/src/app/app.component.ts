import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './_components/welcome/welcome.component';
import { FooterComponent } from './_components/footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, WelcomeComponent, FooterComponent],
  selector: 'nova-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nova';
}
