import DOMPurify from 'dompurify';

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @returns {string} Sanitaize string
 */

export const sanitize = content => {
  return typeof window ? DOMPurify.sanitize(content) : content;
};
