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
    display: flex;
    margin-right: 38%;
    margin-top: 4vw;
    font-family: 'Roboto',sans-serif;
    color:  rgba(1, 52, 128, 1);
}
.rubrique{
    margin-left: 10vw;
    font-size: 2.5vw;
 }
 .direction{
    margin-left: 5vw;
    position: absolute;
    margin-top: 2.3vw;
    height: 3.3vw;
    width: 2.5vw;
 }

 @media screen and (max-width:768px) {
    .rubrique{
        font-size: 5vw;
    }
    .direction{
    margin-left: 3vw;
    position: absolute;
    margin-top: 5vw;
    height: 4.8vw;
    width: 4.2vw;
 }
 }
    
</style>