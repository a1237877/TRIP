<template>
  <div class="trip">
    <div class="trip-box">
      <img src="../../assets/img/bg.png" alt />
      <div class="trip-on">
        <md-tabs>
          <md-tab-pane name="徒步" label="徒步"></md-tab-pane>
          <md-tab-pane name="跑步" label="跑步"></md-tab-pane>
          <md-tab-pane name="骑行" label="骑行"></md-tab-pane>
          <md-tab-pane name="自驾" label="自驾"></md-tab-pane>
        </md-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'trip',
    data() {
        return {

        }
    }
};
</script>

<style lang="stylus" scoped>
.trip 
  width 100%
  height 100%
  position relative
  .trip-bg 
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    opacity 0.5
  
  .trip-con 
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    z-index 10
  
  .trip-border 
    width 450px
    height 450px
    border-radius 450px
    margin 100px auto
    border 8px dashed #c5d1d3
    border-bottom none
    p:nth-child(1) 
      text-align center
      margin-top 80px
      color #4e4956
      font-size 33px
      letter-spacing 2px
    
    strong 
      display block
      text-align center
      margin-top 35px
      color #4e4956
      font-size 130px
    
    p:nth-child(3) 
      text-align center
      margin-top 35px
      color #9a9b9b
      font-size 28px
      cursor pointer
      text-decoration underline
    
  
  .trip-start 
    width 500px
    height 90px
    border-radius 90px
    margin auto
    background #57c595
    text-align center
    line-height 90px
    color #ffffff
    font-size 33px
    letter-spacing 2px
  
  .trip-map 
    widows 100%
    height 100%
  

.fademap-enter 
  opacity 0

.fademap-enter-active 
  transition all 0.3s

.fademap-leave-to 
  opacity 0

.fademap-leave-active 
  transition all 0.3s

</style>
<style lang="stylus">
.md-tab-bar 
  background-color transparent
</style>
