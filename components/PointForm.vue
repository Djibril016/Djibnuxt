<template>
    <div class="col-1 col-md-1 col-lg-1 pt-5 zone-point">
          <div class="tiret"></div>
          <div class="point"><img src="../assets/laureat.svg" alt=""></div>
        </div> 
</template>

<script>
export default {
    name:"PointForm",
}
</script>

<style scoped>
 .point{
      height: 1.66vw;
      width: 1.66vw;
      border-radius: 0.6vw;
      background-color: transparent;
      z-index: 1;
  }
  .point img{
    margin-left: -0.1vw;
  }
  .zone-point{
      position: relative;
      display: flex;
      justify-content: center;  
      padding-left: 0px;
  }
  .tiret{
      position: absolute;
      margin: 0 38%;
      top: 0px;
      height: 100%;
      width: 1px;
      background-color: rgb(177, 174, 174);
      
  }
  @media screen and (min-width:256px) and (max-width:768px){
    .zone-point{
        margin-left: 2vw;
    }
    .point{
      height: 3.66vw;
      width: 3.66vw;
      border-radius: 1.3vw;
  }
  .tiret{
    height: 110%;
  }
  }
</style>