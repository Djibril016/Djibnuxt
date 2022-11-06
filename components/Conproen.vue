 <template>
    <div>
         <div class="conteneur">
       
            <div data-aos="fade-right" data-aos-duration="2000" class="  niveau">
        <slot name="date" class="date">la date de debut de formation </slot> <br>
        <slot name="annee" class="mt-2 annee">l'annee de db de formation</slot><br>
    
      </div>
   
        <PointForm class="pointform"/>
    
      <div data-aos="fade-left" data-aos-duration="2000"  class=" serie">
        <div class="niv">
            <slot name="matiere" class="filiere">la matiere</slot> <br>
        <slot name="mention" > la mention</slot>
        </div>
        
            
          
        </div>
    </div>
    </div>
   
    
</template>

<script>
import PointForm from './PointForm.vue';
// import Mixins from '../pages/Mixins.vue';
    export default {
        // mixins:[Mixins],
        name:"Conpro",
        components:{
            PointForm
        },
    }
</script>

<style scoped>
   


 .conteneur{
          color: rgba(1, 52, 128, 1);
          font-weight: 600;
          font-family: "Roboto",sans-serif;
          width: auto;
          flex-direction: row;
          margin-left: -8vw;
          
          
      }
      
      .serie{
         text-transform: uppercase;
          font-size: 1.2vw;
          position: relative;
          line-height: 1.95vw;
          padding-left: 0;
          margin-left: 4vw;
      }
      
      .filiere{
        text-align: left;
       
      }
      .niveau{
    line-height: 1.5vw;
    font-size: 1.3vw;
    position: relative;
    text-align: right;
    padding-left: 0;
    margin-right: 3vw;
    width: 35vw;
      }

      .pointform{
        margin-left: 1.5vw;
      }
      .serie, .niveau, .pointform{
        padding-top: 3vw;
      }

      @media screen and (max-width:768px) {
       .conteneur{
         flex-direction: column;
         width: 80%;
         margin-left: 0;
         padding-top: 8vw;
         margin-top: -9vw;
        
      }
      .niv{
      }
          .niveau{
            width: 90%;
            line-height: 5vw;
            font-size: 3.9vw;
            position: relative;
            text-align: left;
            margin-left: 10vw;
            padding-left: 0;
           
          }
    
        .serie{
          width: 80%;
         font-size: 3.9vw;
         position: relative;
         line-height: 6vw;
         padding-left: 0;
         margin-left: 10vw;
         margin-top: 2vw;
     }
     .pointform{
      position: absolute;
      height: 45vw;
     }
      .niveau, .pointform{
        padding-top: 12vw;
      }
      }
  
</style>
<!-- <template v-slot:title>
    <h3>Donner des noms aux slots est utile</h3>
</template>
<template v-slot:text>
    <p>Maintenant, on peut ajouter ce que l'on veut ici en donnant le nom du slot !</p>
</template>
<template v-slot:action>
    <a href="#">En savoir plus</a>
</template> -->


<!-- <slot name="title">Titre de la carte</slot>
<slot name="text">Texte de la carte</slot>
<slot name="action">Action</slot> -->
