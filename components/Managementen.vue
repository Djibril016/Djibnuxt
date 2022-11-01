<template>
     <div class="management">
        
        <!-- *****titre de la carte management***** -->
           <Compname comptitle="MANAGEMENT" class="compcomp"/>


        <div class="img-man">
            <img src="../assets/manillustre.png" alt="Manage-illustration">
        </div>
        
        <div class="manage-liste">
           
            <ul v-for="(manage, index) in manager" :key="index" :style="listyle" class="manliste">
             <img src="../assets/listepara.png" class="li-img" alt="">
              <li  class="li-man">       
               <span>{{manage}}</span> 
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Compname from './Compname.vue';
export default {
    name:"Managementen",
    components:{
        Compname
    },
    data(){
        return{
            listyle:"  ",
            manager:[
                "Public and strategic governance",
                "Business management",
                "Project/program management"
            ]
        }
    }
}
</script>

<style>
.management{
    /* height: 41.5vw; */
    width: 38vw;
    border-radius: 1.5vw;
    padding-top: 4%;
    padding-bottom: 22%;
    margin-top: 8.3vw;
    margin-left: 6.3vw;
    background: rgb(255, 255, 255);
    border: 2px solid #E4E3E3;
    box-shadow: 1vw;
}
.management:hover{
    /* transform: scale(1.2);
    transition: 2s ease-in-out; */

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
    /* border: 1px solid black; */
    letter-spacing: -1px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
   font-weight: 600;
}
.img-man{
    margin-top: 5vw;
    padding-left: 6%;
    height: 22vw;
}
.img-man img{
    height: 100%;
    width: 98%;
}
.li-img{ 
    margin-left: -6%;
   margin-top: -0.3vw;
   padding: 2.4% 4%;
   height: 4vw;
}
@media screen and (min-width:280px) and (max-width:768px) {
   .management{
        width: 80vw;
    }
      .compcomp{
      margin-left: 14vw;
      margin-top: -6vw;
    }
   .li-img{
      height: 9vw;
      margin-top: -1vw;
    }
    .manliste{
      margin-top: 5vw;
      font-size: 3.9vw;

    }
    .man-liste{
      font-size: 3.9vw;
    }  
}
</style>