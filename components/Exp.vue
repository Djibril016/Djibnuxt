<template>
    <div class="expe">
      <!-- *********TITRE CARTE********** -->
      <div>
         <Cardtitle titre="expériences" class="text-center" position="margin-left:-19.5vw;margin-top:5vw;width:59%"/>
      </div>
      <div data-aos="fade-left" data-aos-duration="2000" class=" exp-lum">
        <img src="../assets/explum.svg"  alt="experience de Mr Arnaud">
      </div>
     
       
      <div class="div-conteneur">
        
        <Formexp/>
        <div class="allonge"></div>
      </div>

      <div id="formation-offset"></div>
    

    </div>
    </template>
  
    <script>
    
  import Cardtitle from './Cardtitle.vue';
  import Formexp from './Formexp.vue';
       export default {
        name:"Exp",
          components:{
             Cardtitle,
             Formexp },
        
          }
    </script>
  
    <style >
     #formation-offset{
    padding: 3vw;
    }
    .div-conteneur{
      padding-top: 16.7%;
    }
    .exp-lum{
      margin-left: 58vw;
      margin-top: -12.5vw;
      position: absolute;
    }
    .exp-lum img{
      height: 100%;
      width: 100%;
    }
      .conteneur{
          display: flex;
          flex-direction: row;
          color: rgba(1, 52, 128, 1);
          padding-left: 10%;
          font-weight: 400;
      }
 
      @media screen and (max-width:768px) {
         .div-conteneur{
      /* padding-top: 16.7%;*/
      margin-top: 18vw; 
      width: 98vw;
      padding-bottom: -16vw;

    }
    .exp-lum{
      margin-left: 37vw;
      margin-top: -20.5vw;
      position: absolute;
      height: 70vw;
      width: 60vw;
    }
    .exp-lum img{
      height: 100%;
      width: 100%;
    }
      .conteneur{
          flex-direction: column;
          padding-left: 10%;
      }
    
      .charge{
          font-size: 3.7vw;
          line-height: 6vw;
          margin-left: 0px;
          width: 82vw;
          margin-top: -10vw;
      }
      /* .allonge{
      height: 200vw;
      border: 1px solid black;
      margin: 0 38%;
      top: 0px;
      width: 1px;
      background-color: rgb(177, 174, 174);
  } */
     
      }
 
    </style>
  