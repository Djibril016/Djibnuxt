<template>
    <div>
         <div class="conteneur">
            <div data-aos="fade-right" data-aos-duration="2000" class="niveau">
        <slot name="date" class="date">la date de debut de poste  </slot> <br>
        <slot name="annee" class="mt-2 annee">le titre occupe</slot><br>
    
      </div>
   
        <Point class="pointform"/>
        <!-- col-12 col-md-6 col-lg-7 pt-5 -->
      <div data-aos="fade-left" data-aos-duration="2000"  class=" serie">
        <slot name="matiere" class="filiere">la structure </slot> <br>
        <slot name="mention" class="mission"> la liste des missions</slot>
            
          
        </div>
    </div>
  </div>
   
    
</template>

<script>
import Point from './Point.vue';
    export default {
        name:"Conexp",
        components:{
            Point
        },
    }
</script>

<style scoped>

      .conteneur{
          font-family: 'Roboto', sans-serif;
          color: rgba(1, 52, 128, 1);
          width: 90%;
          flex-direction: row;
          padding-left: -6vw;
          
      }
      
      .serie{
          font-size: 1.2vw;
          position: relative;
          line-height: 1.95vw;
          padding-left: 2vw;
          margin-left: 4vw;
          width: 45vw;
          font-family: "Roboto",sans-serif;
      }
      .filiere{
        text-align: left;
      }
    
      .niveau{
          line-height: 1.9vw;
          font-size: 1.3vw;
          width: 25vw;
          position: relative;
          text-align: right;
          justify-content: left;
          padding-left: 0;
          padding-right: 2vw;
      }
      .pointform{
        margin-left: 4vw;
      }
      .niveau, .serie, .pointform{
        padding-top: 2vw;
      }
      @media screen and (max-width:768px) {
        section{
          width: 100%;
          
        }
       .conteneur{
        display: flex;
         flex-direction: column;
         padding-top: 8vw;
         margin-top: -9vw;
         width: auto;
      }
          .niveau{
            width: 85%;
        line-height: 5.95vw;
        font-size: 4.3vw;
        position: relative;
        text-align: left;
        margin-left: 10vw;
        padding-left: 0;
          }
    
        .serie{
          width: 85%;
         font-size: 4.3vw;
         position: relative;
         line-height: 5.95vw;
         padding-left: 0;
         margin-left: 10vw;
         margin-top: 0vw;
     }
     .pointform{
      position: absolute;
      margin-left: -0vw;
     }
     .niveau, .serie, .pointform{
        padding-top: 5vw;
      }
      
      }
  
</style>

