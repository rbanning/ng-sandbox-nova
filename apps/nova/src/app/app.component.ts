import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './_components/welcome/welcome.component';
import { FooterComponent } from './_components/footer/footer.component';
import { ButtonComponent } from '@ng-sandbox-nova/core-ui';
import { dateHelper } from '@ng-sandbox-nova/general';

@Component({
  standalone: true,
  imports: [RouterModule, WelcomeComponent, FooterComponent, ButtonComponent],
  selector: 'nova-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nova';

  now = dateHelper.now();
}
