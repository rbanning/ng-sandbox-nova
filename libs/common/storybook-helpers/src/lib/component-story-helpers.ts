type SelectCtrlType = 'radio' | 'select';
interface SelectCtrlConfigItem {
  options: string[],
  control: {
    type: 'radio' | 'select'
  }
}
type SelectCtrlConfig = {[key: string]: SelectCtrlConfigItem};

export const storySelectCtrl = (name: string, options: readonly string[] | readonly number[], type: SelectCtrlType = 'select') => {
  const ret: SelectCtrlConfig = {};
  ret[name] = {
    options: [...(options.map(m => `${m}`))],
    control: { type },
  };

  return ret;
}

