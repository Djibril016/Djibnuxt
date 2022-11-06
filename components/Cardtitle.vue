<template>
     <div class=" not-nav bg-transparent">
        <div class="card-title ">
          <span> {{titre}} </span>
            <img src="../assets/redline.svg" class="ligne" :style="position" alt="">
          
        </div>
       
        </div>

</template>
 
<script>
    export default{
        name:"Cardtitle",
        props:['titre', 'position'],
    }
</script>

<style>
.card-title{
   font-weight: 700;
    margin-top: 2.0vw;
    position: relative;
    text-align: center;
    font-family: 'Roboto',sans-serif;
    border-radius: 0px;
    color: rgba(2, 56, 137, 1);
    font-size: 2.9vw;
    padding: 0.8vw;
    
}
.ligne{
    position: absolute;
}
.card-title span{
    text-transform: uppercase;
}

@media screen and (max-width:768px){
    .card-title{
        font-size: 7vw;
    }
    .ligne{
        display: none;
    } 
}
</style>

