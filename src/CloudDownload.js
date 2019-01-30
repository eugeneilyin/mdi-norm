import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCloudDownload } from './FilledCloudDownload'
import { OutlineCloudDownload } from './OutlineCloudDownload'
import { RoundCloudDownload } from './RoundCloudDownload'
import { SharpCloudDownload } from './SharpCloudDownload'
import { TwoToneCloudDownload } from './TwoToneCloudDownload'

export const CloudDownload = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCloudDownload, OutlineCloudDownload, RoundCloudDownload, SharpCloudDownload, TwoToneCloudDownload)
