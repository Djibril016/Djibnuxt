<template>
    <div class="tit">
        <span >{{comptitle}}</span> 
    </div>
    
</template>
<script>
    export default{
        name:'Compname',
        props:['comptitle']
    }
</script>

<style>
    .tit{
        background: rgba(232, 96, 48, 1);
        width: 20vw;
        height: 3vw;
        font-size: 2vw;
        border-radius: 0.5vw;
        font-family: 'Roboto',sans-serif;
        text-align: center;
        font-weight: 700;
        color: white;
        padding-top: 0.4rem;
    }
   

@media screen and (max-width:768px) {
    .tit{
        text-align: center;
        font-size: 4.6vw;
        border-radius: 2vw;
        width: 45vw;
        height: 8vw;
        padding-top: 3vw;
    }
  
   
}
</style>