export const themeSizeList = ['sm', 'md', 'lg'] as const;
export type ThemeSize = typeof themeSizeList[number];

export const themeSizeExpandedList = ['xs', ...themeSizeList, 'xl', 'xxl'] as const;
export type ThemeSizeExpanded = typeof themeSizeExpandedList[number];
