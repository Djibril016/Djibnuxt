<template>
    <section class="comp-part">
        <Cardtitle titre="Compétences" class="text-center" position="margin-left:-70.5vw;margin-top:5vw;width:71%"/>

        <div class="contenu ">
            <div data-aos="zoom-in-up" data-aos-duration="2000" class="man-part">
            <Management/>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="2000" class="tech-part">
            <Technique/>
            </div>  
            
        </div>
        <div id="skill-offset"></div>
            
    </section>
</template>

<script>
import Mixins from '../pages/Mixins.vue';
import Cardtitle from './Cardtitle.vue';
import Management from './Management.vue';
import Technique from './Technique.vue';
export default {
    mixins:[Mixins],
    name:"Skill",
    components:{ Cardtitle, Management, Technique },
    

}
</script>
<style>
.contenu{
    display: flex;
    width: 90%;
    margin-left: 4%;
   
   
}
.comp-part{
    background-image: url("../assets/africain.png");
    background-position: center;
    padding-bottom: 2vw;
    margin-top: -2vw;

}
#skill-offset{
    height: 1vw;
}

   
        
@media screen and (min-width:280px) and (max-width:768px) {
      .contenu{
        flex-direction: column;
        
    }
    
   
}
</style>