<template>
 <section >
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
     <div   class="experiences" id="experiences">
      <Exp/>
     </div>
     <div  class="formation" id="formation" >
      <Formation/>
     </div>
     <div class="leadship"  id="leadship">
      <Leadership/>
     </div>
    <div  class="Contact"  id="Contact">
      <Contact/>
    </div>
    <div class="copyri">
      <Copyright/>
    </div>
   
    <!-- <English/> -->
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
  // import English from './English.vue'
  import Copyright from '../components/Copyright.vue'
// import Formcont from '../components/Formcont.vue'
  import Mixins from './Mixins.vue'
  
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
    // English
    // Formcont
},
      // data: function (){
      //   return{
      //      menus:[
      //         { 
      //           lien:'COMPÉTENCES',
      //           to:'#competences'
      //         },
      //         {
      //            lien:'EXPÉRIENCES',
      //            to:'#experiences',
      //           },
      //         {
      //           lien:'FORMATION',
      //           to:'#formation'
      //         },
      //         { 
      //           lien:'LEADERSHIP',
      //           to:'#leadship'
      //         },
      //         { lien:'CONTACTS',
      //           to:'#Contact'
      //       }
  
      //      ]
      //   }
      // },
      mounted () {
        // AOS.init({
        //   offset:120,
        //   delay:2,
        //   duration:500,
        //   easing:'ease',
        //   once: false,
        //   anchorPlacement:'top-bottom',
        // })
  }
    }
  </script>

<style >
  section{
    width: 100%;
    font-family: 'Roboto',sans-serif ;
  }
  .container-fluid{
    background: url('../assets/background.svg');
    
    background-color:  rgb(34, 76, 143);
  
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

