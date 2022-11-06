<template>
    <div class="comp-part">
        <Cardtitle titre="skills" class="text-center" position="margin-left:-70.5vw;margin-top:5vw;width:71%"/>

        <div class="contenu ">
            <div data-aos="zoom-in-up" data-aos-duration="2000" class="tech-part">
            <Managementen/>
            </div>
           
        </div>
        <div id="skill-offset"></div>
            
    </div>
</template>

<script>
import Cardtitle from './Cardtitle.vue';
import Managementen from './Managementen.vue';
export default {
    name:"SkillEn",
    components:{ Cardtitle, Managementen},
    

}
</script>
<style>
.contenu{
    display: flex;
    width: 90%;
    margin-left: 5%;
}
.tech-part{
    z-index: 0;
}
.tech-part:hover{
    z-index: 2;
}
.comp-part{
    background-image: url("../assets/africain.png");
    background-position: center;
    padding-bottom: 2vw;
    margin-top: -2vw;
    width: auto;

}
#skill-offset{
    padding: 3vw;
    
}

   
        
@media screen and (max-width:768px) {
      .contenu{
        flex-direction: column;
        
    }
    .comp-part{
        width: auto;
    }
    
   
}
</style>