/**
 * @example
 * const cls = createClassWithModifiers("class",
 *   {
 *     "foo": true,
 *     "bar": false,
 *     "object": {
 *        "someProp": 42
 *     }
 *   },
 *   ["array"]
 * );
 * cls === "class class--foo class--object class--array"
 */
export function createClassWithModifiers(
  baseClass: string,
  ...modifierArgs: (Record<string, unknown> | string[] | undefined | null)[]
): string {
  const result: string[] = [baseClass];

  modifierArgs.forEach((modifiers) => {
    if (!modifiers) return;

    if (modifiers instanceof Array) {
      modifiers.forEach((m) => m && result.push(`${baseClass}--${m}`));
    } else {
      Object.entries(modifiers).forEach((entry) => result.push(entry[1] ? baseClass + '--' + entry[0] : ''));
    }
  });

  return result.filter((_) => _).join(' ');
}
