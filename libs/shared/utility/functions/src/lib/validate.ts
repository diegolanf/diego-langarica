/**
 * Validates if input is string.
 *
 * @param input Input to be validated.
 */
export const isString = (input: unknown): input is string =>
  typeof input === 'string';
