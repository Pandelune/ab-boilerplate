import ColorGenerator from './color-generator';
import Constants from './constants';

export type ArtData = {
  color: string;
  circleWidth: number;
  isNice: boolean;
};

function genMyArt(R) {

  const myArtData: ArtData = {
    color: ColorGenerator.getColor(R),
    circleWidth: R.random_int(10, Constants.stdWidth * 0.9),
    isNice: R.random_dec() > 0.9,
  };

  // console.log(myArtData);
  return myArtData;

}

export default { genMyArt };
