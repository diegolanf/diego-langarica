/**
 * Removes leading slash on string if present.
 *
 * @param input String.
 */
export const removeLeadingSlash = (input: string): string =>
  input.startsWith('/') ? input.slice(1) : input;

/**
 * Removes query string from url (i.e. everything after '?').
 * @param url Url string.
 */
export const removeQueryStringsFromUrl = (url: string): string =>
  url.split('?')[0];
