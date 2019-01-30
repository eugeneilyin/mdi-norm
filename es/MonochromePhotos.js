import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMonochromePhotos } from './FilledMonochromePhotos';
import { OutlineMonochromePhotos } from './OutlineMonochromePhotos';
import { RoundMonochromePhotos } from './RoundMonochromePhotos';
import { SharpMonochromePhotos } from './SharpMonochromePhotos';
import { TwoToneMonochromePhotos } from './TwoToneMonochromePhotos';
export var MonochromePhotos =
/*#__PURE__*/
function MonochromePhotos(props) {
  return createThemedIcon(props, FilledMonochromePhotos, OutlineMonochromePhotos, RoundMonochromePhotos, SharpMonochromePhotos, TwoToneMonochromePhotos);
};