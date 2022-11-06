<template> 
<div id="formations">
  <Cardtitle titre="Education and honors" class="text-center form-title" position="margin-left:-74.5vw;margin-top:5vw;width:63.3%"/>

  <div  data-aos="zoom-in" data-aos-duration="3000"  class="formill">
<img src="../assets/Formationill.svg" alt="" >
  </div>
    

  <div class="conteneur-form ">
     
     <div data-aos="fade-right" data-aos-duration="3000" class=" contex ">
         <TitreRubriq rubrique="EDUCATION"/>
     </div>
       <div class=" formcont">
         <Formconten/>
       </div>

       <div class="distinct">
        <DistinctionEn/>

       </div>

     </div>
     <div id="leadership-offset"></div>
</div>

  
</template>

  <script>
  import Cardtitle from './Cardtitle.vue';
  import TitreRubriq from './TitreRubriq.vue';
  import Formconten from './Formconten.vue';
  import DistinctionEn from './DistinctionEn.vue';
       export default {
        name:"FormationEn",
          components:{ Cardtitle, TitreRubriq, Formconten, DistinctionEn },
        }
</script>
<style scoped>
#leadership-offset{
  padding: 3.5vw;
}
.conteneur-form{
  margin: 0%;
  padding-left: 1%;
}
.contex{
  width: 100%;
  margin-top: 19.5%;
}
.formcont{
  margin-top: 4%;
}
.form-title{
  padding-left: 1vw;
}
  .formill{
    position: absolute;
    margin-top: 1vw;
    margin-left: 46.5vw;
    height: 26vw;
    width: 43vw;
   
  }
  .formill img{
    width: 100%;
    height: 100%;
  }


  @media screen and (max-width:768px){
    #formations{
      margin-top: 7vw;
      width: 100%;
    }
    .form-title{
      width: auto;
    }
    .conteneur-form{
      margin-top: 58vw;
      padding-left: 1%;
    }
    .distinct{
      margin-top: 22vw;
    }
    .formill{
    position: absolute;
    margin-top: 2vw;
    margin-left: 15vw;
    width: 75vw;
    height: 60vw;
  }
  }
</style>