<template>

  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>

</template>

<script>
import {mapGetters} from 'vuex'
import MusicList from 'components/music-list/music-list'
import {getSingerDetail} from "api/singer";
import {ERR_OK} from "api/config";
import {createSong} from "common/js/song";


export default {
  name: 'singer-detail',
  data(){
    return {
      songs:[]
    }
  },
  components:{
    MusicList
  },
  computed:{
    title(){
      return this.singer.name
    },
    bgImage(){
      return this.singer.avatar
    },
    ...mapGetters([
      'singer'
    ])
  },
  created(){
    this._getDetail()
  },
  methods:{
    async _getDetail(){
     try{
       if(!this.singer.id){
         this.$router.push('/singer')
         return
       }
       let res = await getSingerDetail(this.singer.id)
       if(res.code === ERR_OK){
        this.songs = this._normalizeSongs(res.data.list)
         console.log(this.songs)
       }
     }catch (e) {
       console.log(e)
     }
    },
    _normalizeSongs(list){
      let ret = []
      list.forEach((item) => {
        let {musicData} = item
        if(musicData.songid && musicData.albummid){
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, slide-leave-to
    transform: translate3d(100%, 0, 0)

</style>
