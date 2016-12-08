<<<<<<< HEAD
// @flow

/**
 * CSS to style the selection psuedo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...placeholder(styles)
 * }
 *
 * // styled-components usage
 * const div = styled.input`
 *   ...placeholder(styles)
 * `
 *
 * // CSS as JS Output
 *
 * 'input': {
 *   '&:-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&:-ms-input-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-webkit-input-placeholder': {
 *     'color': 'blue',
 *   },
 * },
 */

function placeholder(styles: Object, parent: string = '&') {
  return {
    [`${parent}::-webkit-input-placeholder`]: {
      ...styles,
    },
    [`${parent}:-moz-placeholder`]: {
      ...styles,
    },
    [`${parent}::-moz-placeholder`]: {
      ...styles,
    },
    [`${parent}:-ms-input-placeholder`]: {
      ...styles,
=======
//@flow
function placeholder(styles: Object, parent: string = '&') {
  return {
    [`${parent}::-webkit-input-placeholder`]: {
      ...styles
    },
    [`${parent}:-moz-placeholder`]: {
      ...styles
    },
    [`${parent}::-moz-placeholder`]: {
      ...styles
    },
    [`${parent}:-ms-input-placeholder`]: {
      ...styles
>>>>>>> 088995e... chore(placeholder): Add placeholder mixin
    },
  }
}

export default placeholder
