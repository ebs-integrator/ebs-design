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

/**
 * @example
 * const bem = makeBEM("block");
 *
 * bem() === "block";
 * bem(null, ["hello"]) === "block block--hello";
 *
 * const cls = bem("element",
 *   {
 *     "foo": true,
 *     "bar": false,
 *     "object": {
 *       "someProp": 42
 *     }
 *   },
 *   ["array"]
 * );
 * cls === "block__element block__element--foo block__element--object block__element--array"
 */
export const makeBEM = (blockName: string) => {
  return (
    elementName?: string | null | 0 | undefined,
    ...modifierArgs: (Record<string, unknown> | string[] | undefined | null)[]
  ) =>
    elementName
      ? createClassWithModifiers(`${blockName}__${elementName}`, ...modifierArgs)
      : createClassWithModifiers(blockName, ...modifierArgs);
};
