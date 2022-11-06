<template> 
<div id="formations">
  <Cardtitle titre="FORMATION ET DISTINCTIONS" class="form-title" position="margin-left:-74.5vw;margin-top:5vw;width:63.3%"/>

  <div  data-aos="zoom-in" data-aos-duration="3000"  class="formill">
<img src="../assets/Formationill.svg" alt="" >
  </div>
    

  <div class="conteneur-form ">
     
     <div data-aos="fade-right" data-aos-duration="3000" class=" contex ">
         <TitreRubriq rubrique="FORMATION"/>
     </div>
       <div class=" formcont">
         <FormCont/>
       </div>

       <div class="distinct">
        <Distinction/>

       </div>

     </div>
     <div id="leadership-offset"></div>
</div>

  
</template>

  <script>
  import Cardtitle from './Cardtitle.vue';
import TitreRubriq from './TitreRubriq.vue';
import PointForm from './PointForm.vue';
import FormCont from './FormCont.vue';
import Distinction from './Distinction.vue';
       export default {
        name:"Formation",
          components:{ Cardtitle, TitreRubriq, PointForm, FormCont, Distinction },
        }
</script>
<style scoped>
#leadership-offset{
  height: 5vw;
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
  padding-left: 2vw;
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