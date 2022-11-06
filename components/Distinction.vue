<template>
    <div id="distinctions">
         <div class=" contex ">
            <!-- col-12 col-md-12 col-lg-12 -->
         <TitreRubriq data-aos="fade-right" data-aos-duration="2000" rubrique="DISTINCTIONS" />
     </div>
     <div v-for="(type, index) in typemedaille" :key="index"

      class="div-medaille">
        <img data-aos="fade-up" data-aos-duration="2000" src="../assets/Trophet.png" alt="parcours Zannou">
        <div>
            <div data-aos="flip-down" data-aos-duration="2000" class="nom-prix">
                {{type.nom}}  
                <span class="annees"><i> ( {{type.annee}} )</i> </span>
               
                <br>
                <span class="occas">{{type.occasion}} </span>
            </div>
            
        </div>

     </div>
    </div>
     
</template>

<script>
    // import Mixins from '../pages/Mixins.vue'
    import TitreRubriq from './TitreRubriq.vue';
    export default{
        // mixins:[Mixins],
        name:"Distinction",
        components:{
            TitreRubriq
        },
        data(){
            return{
                typemedaille:[
                    {
                        nom:"PRIX D’HONNEUR MEILLEUR CADRE SECTEUR EAU ",
                        annee:"2017",
                        occasion:"ASSOCIATION BÉNINOISE D’EAU ET D’ÉLECTRICITÉ"
                    },
                    {
                        nom:"MÉDAILLE DE BRONZE ",
                        annee: "1998",
                        occasion:"9ÈMES OLYMPIADES PANAFRICAINES DE MATHÉMATIQUES À RABAT AU MAROC"
                    },
                    {
                        nom:"MÉDAILLE D’ARGENT ",
                        annee:"1998",
                        occasion:"CHAMPIONNAT NATIONAL DE MATHÉMATIQUES AU BÉNIN"
                    },
                    {
                        nom:"MÉDAILLE D’OR ",
                        annee:"1995",
                        occasion:"CHAMPIONNAT NATIONAL DE MATHÉMATIQUES ET DE SCIENCES PHYSIQUES AU BÉNIN"
                    },
                ],
              
            }
        }
    }

</script>

<style>
#distinctions{
    width: auto;
    color:  rgba(1, 52, 128, 1);;
}
.div-medaille{
    display: flex;
    flex-direction: row;
    margin-left: 11vw;
    margin-top: 2.5vw;
}
.div-medaille img{
    height: 3.5vw;
    width: 3vw;
    margin-top: 0.3vw;
}
.nom-prix{
    font-family: 'Poppins',sans-serif;
    font-weight: 600;
    padding-top: 0vw;
    margin-left: 1.2vw;
    font-size: 1.4vw;
}
.annees, .occas{
    font-family: 'Poppins',sans-serif;
    font-weight: 400;
}

@media screen and (max-width:768px) {
    .div-medaille{
            margin-left: 2vw;
        }
    .div-medaille img{
        height: 7.5vw;
        width: 7vw;
        margin-top: 3.3vw;
    }
    .nom-prix{
        font-family: 'Poppins',sans-serif;
        font-weight: 600;
        padding-top: 3vw;
        margin-left: 4.5vw;
        font-size: 3.7vw;
    }
}
</style>