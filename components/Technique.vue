<template>
    <div class="technique">
       
       <!-- *****titre de la carte management***** -->
         <Compname comptitle="TECHNIQUE" class="comptech"/>

       <div class="img-tech">
           <img src="../assets/tekillustre.png" alt="tech-illustration">
       </div>
       
       <div class="tech-liste">
          
           <ul v-for="(manage, index) in manager" :key="index" :style="index" class="techliste">
            <img src="../assets/listepara.png" class="li-img" alt="">
             <li  class="li-tech">       
              <span>{{manage}}</span> 
             </li>
           </ul>
       </div>
   </div>
</template>

<script>
   import Compname from './Compname.vue'
export default {
   name:"Technique",
   components:{
      Compname
   },
   data(){
       return{
           listyle:"  ",
           manager:[
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
.comptech{
   margin-left: 9vw;
    margin-top: -2.4vw;
}

.tech-liste{
font-size: 1.9vw;
margin-left:0px;
}
.techliste{
   display: flex;
   text-align: left;
   margin-top: 2vw;

}
.li-tech{
   list-style: none;
   width: 100%;
   font-family: 'Roboto', sans-serif;
   font-weight: 600;
}
.img-tech{
   margin-top: 3%;
}
.img-tech img{
    height: 100%;
    width: 98%;

}
.li-img{ 
   margin-left: -6%;
   margin-top: -0.2vw;
   padding: 2.4% 4%;
   height: 4vw;
   
}

@media screen and (min-width:280px) and (max-width:768px) {
     .technique{
        width: 80vw;
        margin-left: 6.5vw;
    }
    .comptech{
      margin-left: 17vw;
      margin-top: -4.3vw;
    }
    .li-img{
      height: 9vw;
      margin-top: -1vw;
    }
    .techliste{
   margin-top: 5vw;

}
    .tech-liste{
      font-size: 3.9vw;
} 
}
</style>