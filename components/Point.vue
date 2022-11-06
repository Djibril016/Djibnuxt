<template>
    <div class="col-1 col-md-1 col-lg-1 pt-5 zone-point">
          <div class="tiret"></div>
          <div class="point"></div>
          
        </div> 
</template>

<script>
export default {
    name:"Point",
}
</script>

<style>
 .point{
      height: 1.66vw;
      width: 1.66vw;
      border-radius: 0.6vw;
      background-color: rgb(247, 84, 9);
      z-index: 1;
  }
  .zone-point{
      position: relative;
      display: flex;
      justify-content: center;  
  }
  .tiret{
      position: absolute;
      margin: 0 38%;
      top: 0px;
      height: 100%;
      width: 1px;
      background-color: rgb(177, 174, 174);
      
  }
  @media screen and (max-width:768px) {
    .zone-point{
        height: 90vw;
        margin-left: -8vw;
    }
    .point{
      height: 3.66vw;
      width: 3.66vw;
      border-radius: 1vw;
    }
    .tiret{
      position: absolute;
      margin: 0 38%;
      top: 0px;
      height: 90%;
      
  }
  
  }
</style>