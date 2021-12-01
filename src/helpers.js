import Constants from './constants';

// from https://github.com/ArtBlocks/artblocks-docs
function genTokenData(projectNum) {
  let hash = "0x";
  for (var i = 0; i < 64; i++) {
    hash += Math.floor(Math.random() * 16).toString(16);
  }
  return {
    hash,
    tokenId: (projectNum * 1000000 + Math.floor(Math.random() * 1000)).toString()
  };
}

function genMyTokenData() {
  return genTokenData(Constants.projectNum)
}

export default { genMyTokenData };
