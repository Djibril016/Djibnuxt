<template> 
<section id="formations">
  <Cardtitle titre="Education and honors" class="form-title" position="margin-left:-74.5vw;margin-top:5vw;width:63.3%"/>

  <div class="formill">
<img src="../assets/Formationill.svg" alt="" >
  </div>
    

  <div class="row conteneur ">
     
     <div class="col-12 col-md-12 col-lg-12 contex ">
         <TitreRubriq rubrique="EDUCATION"/>
     </div>
       <div class="col-11 col-md-12 col-lg-12">
         <ContFormEn/>
       </div>

       <div class="distinct">
        <DistinctionEn/>

       </div>

     </div>
     <div id="leadership-offset"></div>
</section>

  
</template>

  <script>
  import Point from './point.vue';
  import Cardtitle from './Cardtitle.vue';
import TitreRubriq from './TitreRubriq.vue';
import PointForm from './PointForm.vue';
import ContFormEn from './ContFormEn.vue';
import DistinctionEn from './DistinctionEn.vue';
       export default {
        name:"Formation",
          components:{ Point, Cardtitle, TitreRubriq, PointForm, ContFormEn, DistinctionEn },
        }
</script>
<style scoped>
#leadership-offset{
  height: 3.5vw;
}
.conteneur{
  margin: 0%;
  padding-left: 1%;
}
.contex{
  width: 100%;
  margin-top: 19.5%;
}
.form-title{
  padding-left: 2vw;
}
  .formill{
    position: absolute;
    margin-top: 2vw;
    margin-left: 44.5vw;
   
  }
  .formill img{
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width:768px){
    
    .conteneur{
      margin-top: 30%;
      padding-left: 1%;
    }
    .distinct{
      margin-top: 16vw;
    }
    .formill{
    position: absolute;
    margin-top: 2vw;
    margin-left: 30.5vw;
    width: 65vw;
  }
  }
</style>