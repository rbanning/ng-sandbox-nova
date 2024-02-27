import { ThemeSizeExpanded } from './theme-size';
import { Nullable } from '@ng-sandbox-nova/general';
import { ThemeColorBasic, ThemeColorBlackWhite, ThemeColorFullWithTransparent, 
  ThemeColorIntensity, ThemeColorOpacity } from './theme-colors';

export function combineCss(...css: Nullable<string>[]) {
  if (css?.length > 0) {
    return css.filter(Boolean).join(' ');
  }
  //else
  return '';
}

export function intensitySwitch(intensity: Nullable<ThemeColorIntensity>, defaultValue: string, lightValue: string, darkValue: string) {
  intensity ??= 'DEFAULT';
  switch(intensity) {
    case 'light': return lightValue;
    case 'dark': return darkValue;
    case 'DEFAULT': 
    default: 
      return defaultValue;
  }
}
export function opacitySwitch(opacity: Nullable<ThemeColorOpacity>, fullValue: string, halfValue: string, quarterValue: string, minimalValue: string) {
  opacity ?? 'full';
  switch(opacity) {
    case 'half': return halfValue;
    case 'quarter': return quarterValue;
    case 'minimal': return minimalValue;
    case 'full': 
    default: 
      return fullValue;
  }
}

export function textColorCss(color: ThemeColorBasic | ThemeColorBlackWhite, intensity?: ThemeColorIntensity, opacity?: ThemeColorOpacity) {
  intensity ??= 'DEFAULT';
  opacity ??= 'full';


  switch(color) {
    case 'black':
      return opacitySwitch(opacity, 
        intensitySwitch(intensity,
          'text-slate-900',
          'text-slate-400',
          'text-black'),
        intensitySwitch(intensity,
          'text-slate-900/50',
          'text-slate-400/50',
          'text-black/50'),
        intensitySwitch(intensity,
          'text-slate-900/25',
          'text-slate-400/25',
          'text-black/25'),
        intensitySwitch(intensity,
          'text-slate-900/10',
          'text-slate-400/10',
          'text-black/10'));
    case 'white':
      return opacitySwitch(opacity, 
        intensitySwitch(intensity,
          'text-white',
          'text-white',
          'text-slate-50'),
        intensitySwitch(intensity,
          'text-white/50',
          'text-white/50',
          'text-slate-50/50'),
        intensitySwitch(intensity,
          'text-white/25',
          'text-white/25',
          'text-slate-50/25'),
        intensitySwitch(intensity,
          'text-white/10',
          'text-white/10',
          'text-slate-50/10'));
    case 'neutral':
      return opacitySwitch(opacity, 
        intensitySwitch(intensity,
          'text-stone-200',
          'text-stone-50',
          'text-stone-300'),
        intensitySwitch(intensity,
          'text-stone-200/50',
          'text-stone-50/50',
          'text-stone-300/50'),
        intensitySwitch(intensity,
          'text-stone-200/25',
          'text-stone-50/25',
          'text-stone-300/25'),
        intensitySwitch(intensity,
          'text-stone-200/10',
          'text-stone-50/10',
          'text-stone-300/10'));
    case 'primary':
      return opacitySwitch(opacity, 
        intensitySwitch(intensity,
          'text-teal-200',
          'text-teal-50',
          'text-teal-300'),
        intensitySwitch(intensity,
          'text-teal-200/50',
          'text-teal-50/50',
          'text-teal-300/50'),
        intensitySwitch(intensity,
          'text-teal-200/25',
          'text-teal-50/25',
          'text-teal-300/25'),
        intensitySwitch(intensity,
          'text-teal-200/10',
          'text-teal-50/10',
          'text-teal-300/10'));
    case 'secondary':
      return opacitySwitch(opacity, 
        intensitySwitch(intensity,
          'text-purple-200',
          'text-purple-50',
          'text-purple-300'),
        intensitySwitch(intensity,
          'text-purple-200/50',
          'text-purple-50/50',
          'text-purple-300/50'),
        intensitySwitch(intensity,
          'text-purple-200/25',
          'text-purple-50/25',
          'text-purple-300/25'),
        intensitySwitch(intensity,
          'text-purple-200/10',
          'text-purple-50/10',
          'text-purple-300/10'));
    case 'error':
      return opacitySwitch(opacity, 
        intensitySwitch(intensity,
          'text-red-200',
          'text-red-200/80',
          'text-red-200'),
        intensitySwitch(intensity,
          'text-red-200/50',
          'text-red-200/64',
          'text-red-200/60'),
        intensitySwitch(intensity,
          'text-red-200/25',
          'text-red-200/20',
          'text-red-200/30'),
        intensitySwitch(intensity,
          'text-red-200/10',
          'text-red-200/2',
          'text-red-200/10'));
    default:
      throw new Error(`Unsupported text color: ${color}`);
  }
}

export function bgColorCss(color: ThemeColorFullWithTransparent | ThemeColorBlackWhite, intensity?: ThemeColorIntensity, opacity?: ThemeColorOpacity) {
  intensity ??= 'DEFAULT';
  opacity ??= 'full';

  switch(color) {
    case 'black':
      return opacitySwitch(opacity,
        intensitySwitch(intensity,
          'bg-slate-900',
          'bg-slate-400',
          'bg-black'),
        intensitySwitch(intensity,
          'bg-slate-900/50',
          'bg-slate-400/50',
          'bg-black/50'),
        intensitySwitch(intensity,
          'bg-slate-900/25',
          'bg-slate-400/25',
          'bg-black/25'),
        intensitySwitch(intensity,
          'bg-slate-900/10',
          'bg-slate-400/10',
          'bg-black/10'));
    case 'white':
      return opacitySwitch(opacity,
        intensitySwitch(intensity,
          'bg-white',
          'bg-white',
          'bg-slate-50'),
        intensitySwitch(intensity,
          'bg-white/50',
          'bg-white/50',
          'bg-slate-50/50'),
        intensitySwitch(intensity,
          'bg-white/25',
          'bg-white/25',
          'bg-slate-50/25'),
        intensitySwitch(intensity,
          'bg-white/10',
          'bg-white/10',
          'bg-slate-50/10'));            
    case 'surface':
      return opacitySwitch(opacity,
        intensitySwitch(intensity,
          'bg-slate-200',
          'bg-slate-100',
          'bg-slate-300'),
        intensitySwitch(intensity,
          'bg-slate-200/50',
          'bg-slate-100/50',
          'bg-slate-300/50'),
        intensitySwitch(intensity,
          'bg-slate-200/25',
          'bg-slate-100/25',
          'bg-slate-300/25'),
        intensitySwitch(intensity,
          'bg-slate-200/10',
          'bg-slate-100/10',
          'bg-slate-300/10'));
    case 'background':
      return opacitySwitch(opacity,
        intensitySwitch(intensity, 
          'bg-blue-100',
          'bg-blue-200',
          'bg-blue-50'),
        intensitySwitch(intensity, 
          'bg-blue-100/50',
          'bg-blue-100/40',
          'bg-blue-50/50'),
        intensitySwitch(intensity, 
          'bg-blue-100/25',
          'bg-blue-100/20',
          'bg-blue-50/25'),
        intensitySwitch(intensity, 
          'bg-blue-100/10',
          'bg-blue-100/5',
          'bg-blue-50/10'),
          );
    case 'transparent':
      return 'bg-transparent'
    case 'neutral':
      return opacitySwitch(opacity, 
        intensitySwitch(intensity,
          'bg-stone-200',
          'bg-stone-50',
          'bg-stone-300'),
        intensitySwitch(intensity,
          'bg-stone-200/50',
          'bg-stone-50/50',
          'bg-stone-300/50'),
        intensitySwitch(intensity,
          'bg-stone-200/25',
          'bg-stone-50/25',
          'bg-stone-300/25'),
        intensitySwitch(intensity,
          'bg-stone-200/10',
          'bg-stone-50/10',
          'bg-stone-300/10'));
    case 'primary':
      return opacitySwitch(opacity, 
        intensitySwitch(intensity,
          'bg-teal-200',
          'bg-teal-50',
          'bg-teal-300'),
        intensitySwitch(intensity,
          'bg-teal-200/50',
          'bg-teal-50/50',
          'bg-teal-300/50'),
        intensitySwitch(intensity,
          'bg-teal-200/25',
          'bg-teal-50/25',
          'bg-teal-300/25'),
        intensitySwitch(intensity,
          'bg-teal-200/10',
          'bg-teal-50/10',
          'bg-teal-300/10'));
    case 'secondary':
      return opacitySwitch(opacity, 
        intensitySwitch(intensity,
          'bg-purple-200',
          'bg-purple-50',
          'bg-purple-300'),
        intensitySwitch(intensity,
          'bg-purple-200/50',
          'bg-purple-50/50',
          'bg-purple-300/50'),
        intensitySwitch(intensity,
          'bg-purple-200/25',
          'bg-purple-50/25',
          'bg-purple-300/25'),
        intensitySwitch(intensity,
          'bg-purple-200/10',
          'bg-purple-50/10',
          'bg-purple-300/10'));
    case 'error':
      return opacitySwitch(opacity, 
        intensitySwitch(intensity,
          'bg-red-200',
          'bg-red-200/80',
          'bg-red-300'),
        intensitySwitch(intensity,
          'bg-red-200/50',
          'bg-red-200/64',
          'bg-red-300/60'),
        intensitySwitch(intensity,
          'bg-red-200/25',
          'bg-red-200/20',
          'bg-red-300/30'),
        intensitySwitch(intensity,
          'bg-red-200/10',
          'bg-red-200/2',
          'bg-red-300/10'));        
    default:
      throw new Error(`Unsupported background color: ${color}`);
  }
}

export function borderColorCss(color: ThemeColorFullWithTransparent | ThemeColorBlackWhite, intensity?: ThemeColorIntensity, opacity?: ThemeColorOpacity) {
  intensity ??= 'DEFAULT';
  opacity ??= 'full';

  switch(color) {
    case 'black':
      return opacitySwitch(opacity,
        intensitySwitch(intensity,
          'border-slate-900',
          'border-slate-400',
          'border-black'),
        intensitySwitch(intensity,
          'border-slate-900/50',
          'border-slate-400/50',
          'border-black/50'),
        intensitySwitch(intensity,
          'border-slate-900/25',
          'border-slate-400/25',
          'border-black/25'),
        intensitySwitch(intensity,
          'border-slate-900/10',
          'border-slate-400/10',
          'border-black/10'));
    case 'white':
      return opacitySwitch(opacity,
        intensitySwitch(intensity,
          'border-white',
          'border-white',
          'border-slate-50'),
        intensitySwitch(intensity,
          'border-white/50',
          'border-white/50',
          'border-slate-50/50'),
        intensitySwitch(intensity,
          'border-white/25',
          'border-white/25',
          'border-slate-50/25'),
        intensitySwitch(intensity,
          'border-white/10',
          'border-white/10',
          'border-slate-50/10'));            
    case 'surface':
      return opacitySwitch(opacity,
        intensitySwitch(intensity,
          'border-slate-200',
          'border-slate-100',
          'border-slate-300'),
        intensitySwitch(intensity,
          'border-slate-200/50',
          'border-slate-100/50',
          'border-slate-300/50'),
        intensitySwitch(intensity,
          'border-slate-200/25',
          'border-slate-100/25',
          'border-slate-300/25'),
        intensitySwitch(intensity,
          'border-slate-200/10',
          'border-slate-100/10',
          'border-slate-300/10'));
    case 'background':
      return opacitySwitch(opacity,
        intensitySwitch(intensity, 
          'border-blue-100',
          'border-blue-100/90',
          'border-slate-50'),
        intensitySwitch(intensity, 
          'border-blue-100/50',
          'border-blue-100/40',
          'border-slate-50/50'),
        intensitySwitch(intensity, 
          'border-blue-100/25',
          'border-blue-100/20',
          'border-slate-50/25'),
        intensitySwitch(intensity, 
          'border-blue-100/10',
          'border-blue-100/5',
          'border-slate-50/10'),
          );
    case 'transparent':
      return 'border-transparent'
    case 'neutral':
      return opacitySwitch(opacity, 
        intensitySwitch(intensity,
          'border-stone-200',
          'border-stone-50',
          'border-stone-300'),
        intensitySwitch(intensity,
          'border-stone-200/50',
          'border-stone-50/50',
          'border-stone-300/50'),
        intensitySwitch(intensity,
          'border-stone-200/25',
          'border-stone-50/25',
          'border-stone-300/25'),
        intensitySwitch(intensity,
          'border-stone-200/10',
          'border-stone-50/10',
          'border-stone-300/10'));
    case 'primary':
      return opacitySwitch(opacity, 
        intensitySwitch(intensity,
          'border-teal-200',
          'border-teal-50',
          'border-teal-300'),
        intensitySwitch(intensity,
          'border-teal-200/50',
          'border-teal-50/50',
          'border-teal-300/50'),
        intensitySwitch(intensity,
          'border-teal-200/25',
          'border-teal-50/25',
          'border-teal-300/25'),
        intensitySwitch(intensity,
          'border-teal-200/10',
          'border-teal-50/10',
          'border-teal-300/10'));
    case 'secondary':
      return opacitySwitch(opacity, 
        intensitySwitch(intensity,
          'border-purple-200',
          'border-purple-50',
          'border-purple-300'),
        intensitySwitch(intensity,
          'border-purple-200/50',
          'border-purple-50/50',
          'border-purple-300/50'),
        intensitySwitch(intensity,
          'border-purple-200/25',
          'border-purple-50/25',
          'border-purple-300/25'),
        intensitySwitch(intensity,
          'border-purple-200/10',
          'border-purple-50/10',
          'border-purple-300/10'));
    case 'error':
      return opacitySwitch(opacity, 
        intensitySwitch(intensity,
          'border-red-200',
          'border-red-200/80',
          'border-red-200'),
        intensitySwitch(intensity,
          'border-red-200/50',
          'border-red-200/64',
          'border-red-200/60'),
        intensitySwitch(intensity,
          'border-red-200/25',
          'border-red-200/20',
          'border-red-200/30'),
        intensitySwitch(intensity,
          'border-red-200/10',
          'border-red-200/2',
          'border-red-200/10'));        
    default:
      throw new Error(`Unsupported border color: ${color}`);
  }
}



export function textSizeCss(size: ThemeSizeExpanded) {
  switch(size) {
    case 'xs': return 'text-xs';
    case 'sm': return 'text-sm';
    case 'md': return 'text-base';
    case 'lg': return 'text-xl';
    case 'xl': return 'text-2xl';
    case 'xxl': return 'text-4xl';
    
    default: 
      throw new Error(`Unsupported text size: ${size}`);
  }
}