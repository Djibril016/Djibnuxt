 <template>
    <section >
           <div class="container-fluid">
     
       <div class="nav ">
         <NavbarEn/>
       </div>
     <div  class="phd">
            <PhdEn qsjlink="#qui-suij"/> 
     </div >
         </div>
         
         <div  class="qui-suij" id="qui-suij">
           <Qsjen/>
         </div>
         <div  class="competences" id="competences">
           <SkillEn/>
         </div>
        <div  class="experiences" id="experiences">
         <ExpEn/>
        </div>
        <div  class="formation" id="formation" >
         <FormationEn/>
        </div>
       <div class="leadship" id="leadship">
         <LeadershipEn/>
        </div>
       <div class="Contact" id="Contact">
         <ContactEn/>
       </div>
         
      </section>
     
   </template>
   
   <script>
      
     import SkillEn from '../components/SkillEn.vue'
     import PhdEn from '~/components/PhdEn.vue'
     import ExpEn from '../components/ExpEn.vue'
     import FormationEn from '../components/FormationEn.vue'
     import Qsjen from '../components/Qsjen.vue'
     import LeadershipEn from '../components/LeadershipEn.vue'
     import ContactEn from '../components/ContactEn.vue'
     import NavbarEn from '../components/NavbarEn.vue'
   
     export default {
       components:{
    PhdEn,
    ExpEn,
    SkillEn,
    FormationEn,
    Qsjen,
    LeadershipEn,
    ContactEn,
    NavbarEn,
},
       }
     </script> -->
   
   <!-- <style >
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
    
     .container-fluid{
       height: 230vw;
     }
   }
   </style> -->
   
   