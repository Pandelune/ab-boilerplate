/**
 * Calculate features for the given token data
 * @param {Object} tokenData
 * @param {string} tokenData.tokenId - Unique identifier of the token on its contract.
 * @param {string} tokenData.hash - Unique hash generated upon minting the token.
 */
 function calculateFeatures(tokenData) {
  const { tokenId, hash } = tokenData;
  const features = {};

  THAT_STUFF_TO_REPLACE

  return features;
}

// to test that it works, run it using node directly, not in the browser
// using command line: node dist/ etc.
// console.log('some stats', calculateFeatures({ 'hash': '0x54dce1bfbc42de9d3c43ab1ad1845a651db9a1f411c54f713c5f248f68a3108f' }));

