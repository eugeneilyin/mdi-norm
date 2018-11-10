import { createThemedIcon } from './utils/createThemedIcon';
import { IconTextureFilled } from './IconTextureFilled';
import { IconTextureOutlined } from './IconTextureOutlined';
import { IconTextureRounded } from './IconTextureRounded';
import { IconTextureSharp } from './IconTextureSharp';
import { IconTextureTwoTone } from './IconTextureTwoTone';
export var IconTexture =
/*#__PURE__*/
function IconTexture(props) {
  return createThemedIcon(props, IconTextureFilled, IconTextureOutlined, IconTextureRounded, IconTextureSharp, IconTextureTwoTone);
};