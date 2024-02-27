import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nova-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {}
