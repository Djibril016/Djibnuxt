<template>
    <section class="comp-part">
        <Cardtitle titre="skills" class="text-center" position="margin-left:-70.5vw;margin-top:5vw;width:71%"/>

        <div class="contenu ">
            <div class="man-part">
            <Managementen/>
            </div>
            <div class="tech-part">
            <Techniqueen/>
            </div>  
            
        </div>
        <div id="skill-offset"></div>
            
    </section>
</template>

<script>
import Cardtitle from './Cardtitle.vue';
import Managementen from './Managementen.vue';
import Techniqueen from './Techniqueen.vue';
export default {
    name:"Skill",
    components:{ Cardtitle, Managementen, Techniqueen },
    

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