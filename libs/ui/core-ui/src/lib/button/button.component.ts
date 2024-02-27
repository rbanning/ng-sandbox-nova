import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nullable, dateHelper } from '@ng-sandbox-nova/general';
import { ThemeColorBasic, ThemeColorBlackWhite, ThemeColorFullWithTransparent, ThemeColorIntensity, ThemeColorOpacity, bgColorCss, combineCss, textColorCss } from '@ng-sandbox-nova/styles';

@Component({
  selector: 'core-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input()
  label?: string;

  @Input()
  textColor!: ThemeColorBasic | ThemeColorBlackWhite;
  @Input()
  textIntensity!: ThemeColorIntensity;
  @Input()
  textOpacity!: ThemeColorOpacity;

  @Input()
  bgColor!: ThemeColorFullWithTransparent | ThemeColorBlackWhite;
  @Input()
  bgIntensity!: ThemeColorIntensity;
  @Input()
  bgOpacity!: ThemeColorOpacity;

  @Input()
  className: Nullable<string>;

  now = dateHelper.now();

  css!: string;
  state: string = 'unknown';

  ngOnInit(): void {
    this.updateCss();
    this.setState('pending');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    if (this.state !== 'unknown') {
      this.updateCss();
    }
  }

  setState(state: string) {
    this.state = state;
  }

  protected updateCss(additionalCss?: string) {      
    this.css = combineCss(
      "relative inline-flex items-center gap-2",
      "py-2 px-4",
      "disabled:opacity-60",
      "rounded-xl hover:drop-shadow-md transition-all",
      "focus:outline-[1px] focus:outline-dashed focus:outline-offset-2 focus:outline-slate-400",
      textColorCss(this.textColor ?? 'black', this.textIntensity ?? 'DEFAULT', this.bgOpacity ?? 'full'),
      bgColorCss(this.bgColor ?? 'background', this.bgIntensity ?? 'DEFAULT', this.bgOpacity ?? 'full'),
      additionalCss,
      this.className
    );
  }
}
