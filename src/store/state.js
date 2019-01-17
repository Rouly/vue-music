import {playMode} from 'common/js/comfig'
const state = {
  singer:{},
  playing:false,
  fullScreen:false,
  playList:[],
  sequenList:[],
  mode: playMode.sequence,
  currentIndex:-1
}
export default state
