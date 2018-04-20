import MotionTypes from './MotionTypes';

const AISymbolSprite = spritesData => {
  const motionTypes = Object.keys(spritesData);
  const frames = [];
  const sprites = {};

  motionTypes.map(type => {
    const begin = frames.length;
    const length = spritesData[type].length + begin;
    frames.push(...spritesData[type]);
    sprites[type] = [];
    for (let i = begin; i < length; i += 1) sprites[type].push(i);
    return sprites[type];
  });

  return {
    name: 'AISymbol',
    size: { width: 375, height: 624 },
    motionTypes: { ...motionTypes },
    defaultMotionType: MotionTypes.DEFAULT,
    frames,
    fps: 30,
    animationIndex: motionType => sprites[motionType]
  };
};

export default AISymbolSprite;
