export function clsModifiers(baseClass: string, modifiers: { [modifier: string]: any }): string {
  return [baseClass, ...Object.entries(modifiers).map((entry) => (entry[1] ? baseClass + '--' + entry[0] : ''))]
    .filter((_) => _)
    .join(' ');
}
