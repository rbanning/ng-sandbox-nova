import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonOutlineComponent } from './button-outline.component';
import { storySelectCtrl } from '@ng-sandbox-nova/storybook-helpers';
import { themeColorBGWithTransparentList, themeColorBasicList, themeColorBlackWhite, themeColorIntensityList, themeColorOpacityList } from '@ng-sandbox-nova/styles';

const meta: Meta<ButtonOutlineComponent> = {
  component: ButtonOutlineComponent,
  title: 'ButtonOutlineComponent',
  argTypes: {
    ...storySelectCtrl('bgColor', [...themeColorBGWithTransparentList, ...themeColorBasicList, ...themeColorBlackWhite]),
    ...storySelectCtrl('bgIntensity', themeColorIntensityList),
    ...storySelectCtrl('bgOpacity', themeColorOpacityList),
  }
};
export default meta;
type Story = StoryObj<ButtonOutlineComponent>;

export const Primary: Story = {
  args: {
    label: 'My Button',
    textColor: 'primary',
  },
};
