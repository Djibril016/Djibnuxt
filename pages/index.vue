<template>
  <section>
 
    <Nav/>
    
    <div class="ph">
      <Phd qsjlink="#qui-suij"/>
     
    </div>

    
    
    <div id="qui-suij">
      <Qsj/>
    </div>

    <Skill/>

    <Exp/>

    <Formation />

    <Leadership/>

    <Contact/>

    <Copyright/>
  </section>
  

</template>

<script>
import Nav from '../components/Nav.vue';
import Contact from '../components/Contact.vue';
import Exp from '../components/Exp.vue';
import Formation from '../components/Formation.vue';
import Leadership from '../components/Leadership.vue';
import Phd from '../components/Phd.vue';
import Qsj from '../components/Qsj.vue';
import Skill from '../components/Skill.vue';
import Copyright from '../components/Copyright.vue';


export default {
  components:{
    Qsj,
    Nav,
    Skill,
    Exp,
    Formation,
    Leadership,
    Contact,
    Phd,
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