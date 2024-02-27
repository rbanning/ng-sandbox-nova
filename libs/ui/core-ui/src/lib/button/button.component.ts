import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dateHelper } from '@ng-sandbox-nova/general';

@Component({
  selector: 'core-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  label?: string;

  now = dateHelper.now();
}
