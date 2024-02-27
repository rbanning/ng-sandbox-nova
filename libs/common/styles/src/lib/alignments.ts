
export const hAlignOptions = ['left', 'center', 'right'] as const;
export type HAlign = typeof hAlignOptions[number];

export const vAlignOptions = ['top', 'middle', 'bottom'] as const;
export type VAlign = typeof vAlignOptions[number];

export const alignmentScopes = ['horizontal', 'vertical'] as const;
export type AlignmentScope = typeof alignmentScopes[number];
