<template>
    <div>
      singer
      {{list.data}}
    </div>
</template>

<script>
import {getSingerList} from "api/singer";

export default {
  name: 'singer',
  data(){
    return {
      list:{}
    }
  },
  created(){
    console.log('3333')
    this._getSingerList()
  },
  methods:{
    async _getSingerList(){
      try{
        console.log(this.list)
        this.list = await getSingerList()
        console.log('dfdf',list.data)
      }catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
