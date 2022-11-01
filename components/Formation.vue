<template> 
<section id="formations">
  <Cardtitle titre="FORMATION ET DISTINCTIONS" class="form-title" position="margin-left:-74.5vw;margin-top:5vw;width:63.3%"/>

  <div  data-aos="zoom-in" data-aos-duration="3000"  class="formill">
<img src="../assets/Formationill.svg" alt="" >
  </div>
    

  <div class="row conteneur ">
     
     <div data-aos="fade-right" data-aos-duration="3000" class="col-12 col-md-12 col-lg-12 contex ">
         <TitreRubriq rubrique="FORMATION"/>
     </div>
       <div class="col-11 col-md-12 col-lg-12">
         <ContForm/>
       </div>

       <div class="distinct">
        <Distinction/>

       </div>

     </div>
     <div id="leadership-offset"></div>
</section>

  
</template>

  <script>
  import Point from './Point.vue';
  import Cardtitle from './Cardtitle.vue';
import TitreRubriq from './TitreRubriq.vue';
import PointForm from './PointForm.vue';
import ContForm from './ContForm.vue';
import Distinction from './Distinction.vue';
import Mixins from '../pages/Mixins.vue'
       export default {
        mixins: [Mixins],
        name:"Formation",
          components:{ Point, Cardtitle, TitreRubriq, PointForm, ContForm, Distinction },
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
    margin-top: 1vw;
    margin-left: 44.5vw;
    height: 28vw;
    width: 45vw;
   
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