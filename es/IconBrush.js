import { createThemedIcon } from './utils/createThemedIcon';
import { IconBrushFilled } from './IconBrushFilled';
import { IconBrushOutlined } from './IconBrushOutlined';
import { IconBrushRounded } from './IconBrushRounded';
import { IconBrushSharp } from './IconBrushSharp';
import { IconBrushTwoTone } from './IconBrushTwoTone';
export var IconBrush =
/*#__PURE__*/
function IconBrush(props) {
  return createThemedIcon(props, IconBrushFilled, IconBrushOutlined, IconBrushRounded, IconBrushSharp, IconBrushTwoTone);
};