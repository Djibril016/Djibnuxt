<template>
 <section class="index">
        <div class="container-fluid">
  
    <div class="nav ">
      <!-- <Navbar/> -->
    </div>
  <div  class="phd">
         <Phd qsjlink="#qui-suij"/> 
  </div > 
      </div>
      
      <div  class="qui-suij" id="qui-suij">
        <Qsj/>
      </div>
      <div  class="competences" id="competences">
        <Skill/>
      </div>
     <div class="experiences" id="experiences">
      <Exp/>
     </div>
     <div  class="formation" id="formation" >
      <Formation/>
     </div>
     <div class="leadship"  id="leadship">
      <Leadership/>
     </div>
    <!-- <div  class="Contact"  id="Contact">
      <Contact/> 
    </div>-->
    <div class="copyri">
      <Copyright/>
    </div>

   
    
   </section>
  
</template>

<script>
   
  import Skill from '../components/Skill.vue'
  import Phd from '~/components/Phd.vue'
  import Exp from '../components/Exp.vue'
  import Formation from '../components/Formation.vue'
  import Qsj from '../components/Qsj.vue'
  import Leadership from '../components/Leadership.vue'
  import Contact from '../components/Contact.vue'
  import Navbar from './Navbar.vue'
  import Copyright from '../components/Copyright.vue'
  import Mixins from './Mixins.vue'
import Navrepris from '../components/Navrepris.vue'
  
  export default {
  mixins: [Mixins],
    components:{
    Phd,
    Exp,
    Skill,
    Formation,
    Qsj,
    Leadership,
    Contact,
    Navbar,
    Copyright,
    Navrepris
},
    
      mounted () {
  }
    }
  </script>

<style >
.index{
  border: 1px solid black;
  width: 100vw;
}
  section{
    width: auto;
    font-family: 'Roboto',sans-serif ;
  }
  .container-fluid{
    background: url('../assets/background.svg');
    /* border: 1px solid black; */
    background-color:  rgb(34, 76, 143);
  
  }
  .nav{
    border: 1px solid black;
  }

.experiences{
  margin-top: 4vw;
}
.competences{
  justify-content: center;
  align-items: center;
  align-content: center;
}
.leadship{
  width: auto;
  margin-left: 0vw;
  padding: 0px;
}
@media screen and (max-width:768px) {
  /* section{
    width: 100vw;
    border: 1px solid black;
  }
  img{
    border: 1px solid black;
  } */
  .container-fluid{
    height: 230vw;
  }
}
</style>

