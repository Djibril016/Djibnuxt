<template>
    <section id="contform">
        <div v-for="(forme, index) in formation" :key="index" :style="forme.style" class="row content">
            <div data-aos="fade-right" data-aos-duration="2000" class=" col-12 col-md-5 col-lg-5 pt-5 niveau">
        <span>{{forme.date}} </span> <br>
        <p class="mt-2 annee">
          {{forme.sousdate}}
        </p><br>
    
      </div>
   
        <PointForm class="pointform"/>
    
      <div data-aos="fade-left" data-aos-duration="2000"  class="col-12 col-md-6 col-lg-6 pt-5 serie">
        <span class="filiere">{{forme.structure}}</span> <br>
        <div>
            {{forme.mention}}
        </div>
            
          
        </div>
    </div>
  </section>
       
</template>
<script>
import Mixins from '../pages/Mixins.vue'
    import PointForm from './PointForm.vue'
export default {
    mixins:[Mixins],
        name:"ContForm",
          components:{PointForm },
          data: function (){
          return{

            formation:[
            {
            style:"",
            date:'DOCTORAT (Ph.D) ',
            sousdate:'2011',
            structure:'EN HYDROLOGIE ET GESTION\n INTEGRÉE DES RESSOURCES EN EAU',
            mention:"(MENTION TRÈS HONORABLE AVEC FÉLICITATIONS DU JURY)" ,
            },
            {
            style:"",
            date:"MASTER",
            sousdate:'2006',
            structure:"EN EAU ET ENVIRONNEMENT",
            mention: "(MENTION BIEN)" ,
            },
            {
            style:"",  
            date:"DIPLÔME D’INGÉNIEUR AGRONOME",
            sousdate:"2004",
            structure:"SPÉCIALITÉ HYDRAULIQUE, EAUX ET FÔRETS, GÉNIE ET AMÉNAGEMENT RURAL",
            mention:'(TRÈS BIEN AVEC FÉLICITATIONS DU JURY)' ,
            },
            {
            style:"", 
            date:"DIPLÔME D’ÉTUDES UNIVERSITAIRES DU PREMIER CYCLE (DEUPC)",
            sousdate:"2001",
            structure:"EN SCIENCES DE LA VIE ET DE LA TERRE",
            mention:'(MENTION BIEN)',
            },
            {
            style:"", 
            date:"BACCALAURÉAT",
            sousdate:"1998",
            structure:"SÉRIE « C » (MATHÉMATIQUES ET SCIENCES PHYSIQUES)",
            mention:'(MENTION BIEN)'
            }
            
            ]
          }
        },
          
        }
</script>
<style scoped>
#contform{
  width: auto;
}
section{
  margin: 0;
  padding-top: 4%;
}
 .content{
          color: rgba(1, 52, 128, 1);
          font-weight: 600;
          font-family: "Roboto",sans-serif;
          width: 100%;
          flex-direction: row;
      }
      
      .serie{
         /* margin-left: 10vw; */
          font-size: 1.2vw;
          position: relative;
          line-height: 1.95vw;
          padding-left: 0;
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
      }

      @media screen and (max-width:768px) {
       .content{
         flex-direction: column;
         padding-top: 8vw;
         margin-top: -9vw;
      }
          .niveau{
        line-height: 4.4vw;
        font-size: 3.3vw;
        position: relative;
        text-align: left;
        margin-left: 10vw;
        padding-left: 0;
          }
        .annee{
          
        }
        .serie{
         font-size: 3.3vw;
         position: relative;
         line-height: 4.95vw;
         padding-left: 0;
         margin-left: 10vw;
         margin-top: -12vw;
     }
     .pointform{
      position: absolute;
      height: 45vw;
      
      
     }
      
      }
  
</style>
