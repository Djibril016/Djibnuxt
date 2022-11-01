<template>
    <div class="context ">
        <img src="../assets/Polygon.png" class="direction" alt="">
        <h1 class="rubrique "><b>{{rubrique}} </b></h1> 
    </div>
</template>

<script>
export default{
    name:"TitreRubriq",
    props:['rubrique']
}
</script>

<style>
.context {
    display: inline-flex;
    margin-right: 38%;
    margin-top: 4vw;
}
.rubrique{
    margin-left: 10vw;
    font-size: 2.3vw;
 }
 .direction{
    margin-left: 5vw;
    position: absolute;
    height: 2.8vw;
    width: 2.2vw;
 }

 @media screen and (max-width:768px) {
    .rubrique{
        font-size: 5vw;
    }
    .direction{
    margin-left: 3vw;
    position: absolute;
    height: 4.8vw;
    width: 4.2vw;
 }
 }
    
</style>