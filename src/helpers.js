import Constants from './constants';

// from https://github.com/ArtBlocks/artblocks-docs
function genTokenData(projectNum) {
  let data = {};
  let hash = "0x";
  for (var i = 0; i < 64; i++) {
    hash += Math.floor(Math.random() * 16).toString(16);
  }
  data.hash = hash;
  data.tokenId = (projectNum * 1000000 + Math.floor(Math.random() * 1000)).toString();
  return data;
}

function genMyTokenData() {
  return genTokenData(Constants.projectNum)
}

export default { genMyTokenData };
