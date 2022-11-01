<template>
    <div class="tit">
        <span class="man-title">{{comptitle}}</span> 
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
        padding: 0vw 3vw;
    }
    .man-title{
    text-align: center;
    color: white;
    font-family: 'Roboto',sans-serif;
    font-weight: 700;
}

@media screen and (max-width:768px) {
    .tit{
        text-align: center;
        font-size: 4vw;
        width: 45vw;
        height: 8vw;
        padding: 1vw 6vw;
    }
   
}
</style>