<template>
     <div class="skil">
        
        <!-- *****titre de la carte management***** -->
        <div class="management">
            <Compname comptitle="MANAGEMENT" class="compcomp"/>
            
            <div class="img-man">
                        <img src="../assets/manillustre.png" alt="Manage-illustration">
            </div>
                    
                    <div class="manage-liste">
                    
                        <ul v-for="(manage, index) in manager" :key="index" :style="index" class="manliste">
                        <img src="../assets/listepara.png" class="li-img" alt="">
                        <li  class="li-man">       
                        <span>{{manage}}</span> 
                        </li>
                        </ul>
                    </div>
        </div>

        <!-- titre de la carte technique  -->

        <div class="technique">

            <div class="comptech">
                <Compname comptitle="TECHNIQUE" />
            </div>
            
            
            <div class="img-tech">
                        <img src="../assets/tekillustre.png" alt="tek-illustration">
            </div>
                    
                    <div class="technique-liste">
                    
                        <ul v-for="(technique, index) in techniques" :key="index" :style="index" class="tekliste">
                        <img src="../assets/listepara.png" class="li-img-tek" alt="">
                        <li  class="litek">       
                        <span>{{technique}}</span> 
                        </li>
                        </ul>
                    </div>
        </div>
           

        
    </div>
</template>

<script>
    import Compname from './Compname.vue';
export default {
    name:"Management",
    components:{
        Compname
    },
    data(){
        return{
            manager:[
                "Gouvernance publique et stratégique ",
                "Administration des entreprises",
                "Gestion des projets/programmes"
            ],
            techniques:[
               "Infrastructures de développement\n (eau/énergie/agriculture) ",
               "Aménagement et gestion des ressources naturelles",
               "Hydrologie, climat et développement durable",
               "Formation, recherche et expertise"
           ]
        }
    }
}
</script>

<style scoped>


.management{
    width: 38vw;
    border-radius: 1.5vw;
    padding-top: 2%;
    margin-top: 8.3vw;
    margin-left: 6.3vw;
    background: rgb(255, 255, 255);
    border: 2px solid #E4E3E3;
    box-shadow: 1vw;
    transition: transform 0.5s ease-out;
}
.management:hover{
    transform: scale(1.1);
}
.compcomp{
    margin-left: 9vw;
    margin-top: -3.4vw;
}

.manage-liste{
     margin-top: 2vw;
     padding-top: 4.5%;
}
.manliste{
    display: flex;
    text-align: left;
    font-size: 1.9vw;
    margin-left:0px;
}
.li-man{
    list-style: none;
    letter-spacing: -1px;
    width: 100%;
    font-size: 1.8vw;
    font-family: 'Roboto', sans-serif;
   font-weight: 600;
 
}
.li-img{ 
   margin-left: -6%;
   margin-top: -1vw;
   padding: 2.4% 4%;
   height: 2.5vw;
   width: 2.5vw;
   
}
.img-man{
    margin-top: 6vw;
    padding-left: 6%;
    height: 20vw;
}
.img-man img{
    height: 100%;
    width: 98%;
}
/* **************TECHNIQ********** */
.technique{
   width: 38vw;
   border-radius: 1.5vw;
   padding: 2% 0%;
   margin-top: 8.3vw;
   margin-left: 0.8vw;
   background: rgb(255, 255, 255);
   border: 2px solid #E4E3E3;
    box-shadow: 1vw;
    transition: transform 0.5s ease-out;

}
.technique:hover{
   transform: scale(1.1);
}
.technique .comptech{
   padding-left: 9vw;
    margin-top: -3.2vw;
    width: auto;
}

.technique-liste{
    margin-top: 3vw;
}
.tekliste{
    display: flex;
    text-align: left;
    font-size: 1.9vw;
    margin-left:0px;
}
.litek{
   list-style: none;
   width: 100%;
   font-family: 'Roboto', sans-serif;
   font-weight: 600;
}
.img-tech{
   margin-top: 3%;
   width: 98%;
   height: 39%;
}
.img-tech img{
    width: 98%;
    height: 98%;
}

.li-img-tek{ 
   margin-left: -6%;
   margin-top: -0.8vw;
   padding: 2.4% 4%;
   height: 2.6vw;
   width: 2.6vw;
   
}
.skil{
    display: flex;
}


@media screen  and (max-width:768px) {

    /* **************management style********** */
    .skil{
    display: block;
    align-items: center;
    align-content: center;
    padding-bottom: 12vw;
    padding-top: 10vw;
}
   .management, .technique{
        width: 80vw;
    }
      .compcomp{
      margin-left: 17vw;
      margin-top: -6vw;
    }
   .li-img{
      height: 6vw;
      width: 6vw;
      margin-top: -2vw;
    }
    .li-man{
        font-size: 4.4vw;
        line-height: 6vw;
    }
    .img-man{
    margin-top: 7vw;
    padding-left: 6%;
    height: 38vw;
}

/* *************technique style ********* */
.technique{
 
    
   padding: 2% 0%;
   margin-top: 16.3vw;
   margin-left: 6vw;
}
  

.technique .comptech{
   padding-left: 17vw;
    margin-top: -6.4vw;
}

.technique-liste{
    margin-top: 3vw;
    
}
.tekliste{
    margin-top: 4vw;
}
.litek{
   /*  */
   width: 100%;
   font-size: 4.5vw;
   line-height: 7vw;
}
.img-tech{
   margin-top: 3%;
   width: 98%;
   height: 39%;
}
.img-tech img{
    width: 98%;
    height: 98%;
}

.li-img-tek{ 
   margin-left: -6%;
   margin-top: -0.8vw;
   padding: 2.4% 4%;
   height: 6vw;
   width: 6vw;
   
}
  } 

</style>