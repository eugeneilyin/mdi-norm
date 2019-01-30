import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGetApp } from './FilledGetApp'
import { OutlineGetApp } from './OutlineGetApp'
import { RoundGetApp } from './RoundGetApp'
import { SharpGetApp } from './SharpGetApp'
import { TwoToneGetApp } from './TwoToneGetApp'

export const GetApp = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGetApp, OutlineGetApp, RoundGetApp, SharpGetApp, TwoToneGetApp)
