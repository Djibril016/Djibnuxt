<template>
  <section>
 
    <NavEn />
    
    <div class="ph">
      <Phden qsjlink="#qui-suij"/>
     
    </div>

    
    <div id="qui-suij">
      <Qsjen/>
    </div>
    

    <SkillEn/>

    <Expen/>

    <FormationEn />

    <LeadershipEn/>

    <ContactEn/>

    <Copyright/>
  </section>
  

</template>

<script>
import NavEn from '../components/NavEn.vue';
import ContactEn from '../components/ContactEn.vue';
import Expen from '../components/Expen.vue';
import FormationEn from '../components/FormationEn.vue';
import LeadershipEn from '../components/LeadershipEn.vue';
import Phden from '../components/Phden.vue';
import Qsjen from '../components/Qsjen.vue';
import SkillEn from '../components/SkillEn.vue';
import Copyright from '../components/Copyright.vue'


export default {
  components:{
    Qsjen,
    NavEn,
    SkillEn,
    Expen,
    FormationEn,
    LeadershipEn,
    ContactEn,
    Phden,
    Copyright
}
}
</script>

<style>
  section{
    width: 100%;
    display: block;
    margin: 0;
    padding: 0;
  }
  .ph{
    margin-top: -2.5vw;
  }
</style>