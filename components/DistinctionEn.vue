<template>
    <section id="distinctions">
         <div class="col-12 col-md-12 col-lg-12 contex ">
         <TitreRubriq rubrique="HONORS"/>
     </div>
     <div v-for="(type, index) in typemedaille" :key="index"

      class="div-medaille">
        <img src="../assets/Trophet.png" alt="parcours Zannou">
        <div>
            <div class="nom-prix">
                {{type.nom}}  
                <span class="annees"><i> ( {{type.annee}} )</i> </span>
               
                <br>
                <span class="occas">{{type.occasion}} </span>
            </div>
            
        </div>

     </div>
    </section>
     
</template>

<script>
    import TitreRubriq from './TitreRubriq.vue';
    export default{
        name:"Distinction",
        components:{
            TitreRubriq
        },
        data(){
            return{
                typemedaille:[
                    {
                        nom:"HONORARY AWARD FOR BEST WATER SECTOR EXECUTIVE ",
                        annee:"2017",
                        occasion:"Benin Water and Electricity Association"
                    },
                    {
                        nom:"BRONZE MEDAL",
                        annee: "1998",
                        occasion:"9TH Pan-African Mathematics Olympiad in Rabat, Morocco"
                    },
                    {
                        nom:"SILVER MEDAL",
                        annee:"1998",
                        occasion:"National Mathematics Championship in Benin"
                    },
                    {
                        nom:"GOLD MEDAL",
                        annee:"1995",
                        occasion:"National Championship of Mathematics and Physical Sciences in Benin"
                    },
                ],
              
            }
        }
    }

</script>

<style>
#distinctions{
    width: auto;
}
.div-medaille{
    display: flex;
    flex-direction: row;
    margin-left: 11vw;
    margin-top: 3.3vw;
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