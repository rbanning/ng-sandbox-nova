import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { storySelectCtrl } from '@ng-sandbox-nova/storybook-helpers';
import { themeColorBGWithTransparentList, themeColorBasicList, themeColorBlackWhite, themeColorIntensityList, themeColorOpacityList } from '@ng-sandbox-nova/styles';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
  argTypes: {
    ...storySelectCtrl('bgColor', [...themeColorBGWithTransparentList, ...themeColorBasicList, ...themeColorBlackWhite]),
    ...storySelectCtrl('bgIntensity', themeColorIntensityList),
    ...storySelectCtrl('bgOpacity', themeColorOpacityList),
  }
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'My Button',
    bgColor: 'primary',
    bgIntensity: 'DEFAULT',
    bgOpacity: 'full'
  },
};
