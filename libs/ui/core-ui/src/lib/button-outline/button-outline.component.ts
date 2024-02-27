import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { borderColorCss, combineCss } from '@ng-sandbox-nova/styles';

@Component({
  selector: 'core-button-outline',
  standalone: true,
  templateUrl: '../button/button.component.html',
  styleUrls: ['../button/button.component.scss']
})
export class ButtonOutlineComponent extends ButtonComponent {

  protected override updateCss(additionalCss?: string): void {
    const borderColor = borderColorCss(this.textColor ?? 'black', this.textIntensity, this.textOpacity);
    const css = combineCss("border-2", borderColor, additionalCss);
    super.updateCss(css);
  }
}
