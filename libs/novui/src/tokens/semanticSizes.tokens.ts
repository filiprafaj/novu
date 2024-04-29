import { defineSemanticTokens } from '@pandacss/dev';

/**
 * Represents a dimension of an element.
 *
 * Used for properties like width and height.
 */
export const SEMANTIC_SIZES_TOKENS = defineSemanticTokens.sizes({
  components: {
    input: {
      height: {
        value: `50px`,
        type: 'sizes',
      },
    },
  },
});
