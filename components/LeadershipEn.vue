<template>
    <section class="leadership">
        <div class="leadtitre">
            <Cardtitle titre="LEADERSHIP" class="text-center" position="margin-left:-68.3vw;margin-top:5vw;width:62.5%"/>
        </div>
        

        <div class="leader-content">
            <!-- *****Premiere illustration**** -->
            <div class="firstill">
                <img src="../assets/echelle.svg"  alt="">
            </div>

            <!-- *****PREMIERE BOITE******* -->
            <div class="boite" id="org">

                <div class="icon">
                    <img src="../assets/organisation.svg" alt="" >
                </div>
                
                <div class="leadform">
                    <img src="../assets/leadform.svg" alt="">
                </div>
                
                <div class="composition">
                    
                <span class="boite-titre">
                    ORGANIZATIONS
                </span>
                <ul v-for="(org , index) in listeorg" :key="index">
                    <li>{{org}}</li>
                </ul>
                </div>

            </div>
           
            <!-- *****DEUXIEME BOITE******* -->
             
            <div class="boite" id="resp">
                
                <div class="icon"> 
                <img src="../assets/responsabilite.svg" alt="" >
                </div>

                <div class="leadform">
                    <img src="../assets/leadform.svg" alt="">
                </div>
                
                <div class="composition">
                    
                <b class="boite-titre">
                    RESPONSABILITIES
                </b>
                <ul v-for="(org , index) in listeresp" :key="index">
                    <li>{{org}}</li>
                </ul>
                </div>

            </div>
            

             <!-- *****TROISIEME BOITE******* -->
                 
            <div class="boite" id="voc">
                <div class="icon">
                    <img src="../assets/vocation.svg" alt="" >
                </div>
                
                <div class="leadform">
                    <img src="../assets/leadform.svg" alt="">
                </div>
               
                <div class="composition">
                     
                <b class="boite-titre">
                    VOCATION
                </b>
                <ul v-for="(org , index) in listevoc" :key="index">
                    <li>{{org}}</li>
                </ul>
                </div>

            </div>
            
             <!-- *****QUATRIEME BOITE******* -->
            
                 
            <div class="boite" id="dom">
                <div class="icon">
                <img src="../assets/domain.svg" alt="">
                </div>
                <div class="leadform">
                <img src="../assets/leadform.svg" alt="">
                </div>
               
                <div class="composition">
                    
                   <b class="boite-titre">
                    DOMAINES
                </b>
                <ul v-for="(org , index) in listedom" :key="index">
                    <li>{{org}}</li>
                </ul> 
                </div>
                
            </div>
            </div>
           <div class="leadtirage"> 
           <img src="../assets/leadtirage.svg" alt="">
        </div>

        
        <div id="contact-offset"></div>

    </section>
</template>

<script>
import Cardtitle from './Cardtitle.vue';
    export default{
        name:"LeadershipEn",
        components:{ Cardtitle },
        data(){
            return{
                leadcard:[
                    {
                    }
                ],
                listeorg:[
                    "Fondations","Associations","Networks"
                ],
                listeresp:[
                    "Honorary president","Godfather","Founder","Executive leader"
                ],
                listevoc:[
                    "Citizen","Political","Public utility"
                ],
                listedom:[
                    "Support for orphans and vulnerable people",
                    "Academic excellence",
                    "Transformational youth and women leadership",
                    "Environment safeguard",
                    "Promotion of Beninese culture and gastronomy",
                    "Promotion of faith and religious music and theater"
                ]
            }
        }
    }
</script>

<style>
#contact-offset{
    height: 5vw;
}
.leadtitre{
    width: 100%;
}

    .leadership{
        background: url("../assets/nidabeille.svg");
        margin: 0;
        width: auto;
       
       
   }
     .leader-content{
        padding-left: 8%;
        padding-top: 9.8vw;
        display: flex;
        flex-direction: row;
       
    }
    .firstill{
        position: absolute;
        margin-left: 44vw;
    }
    .firstill img{
        width: 100%;
        height: 100%;
    }
    .boite{
        height: auto;
        width: 25.56vw;
        margin-left: 0vw;
        font-family: "Roboto",sans-serif;
        font-weight: 600;
    }
    .boite-titre{
        font-family: "Roboto",sans-serif;
        font-weight: 800;
          width: 100%;
        font-size: 1.76vw;
        margin-left: 3.7vw;
        color: rgba(232, 96, 48, 1);
    }
    .composition{
        margin-top: -9.6vw;
        margin-left: -1.2vw;
    }
    .composition ul li{
        font-size: 1.63vw;
        margin-left: 3.8vw;
        line-height: 2.3vw;
    }
    .leadform{
        width: 22.5vw;
        height: 12.3vw;
    }
    .leadform img{
        width: 100%;
        height: 100%;
    }
    .icon{
        margin-top: 2vw;
        margin-left: -3.5vw;
        width: 5vw;
        height: 5vw;
        position: absolute;
    }
    .icon img{
        width: 100%;
        height: 100%;
    }
    #resp{
        margin-top: 15vw;
    }
    #resp ul li{
        margin-left: 4vw;
    }
    #resp .boite-titre{
        margin-left: 4vw;
    }
    #voc{
        margin-top: 33.5vw;
    }
    #dom{
        margin-top: 48.5vw;
    }
    #resp, #voc, #dom{
        margin-left: -6.8vw;
    }
    .leadtirage{
        position: absolute;
        margin-top: -39vw;width: 60vw;
        margin-left: 1vw;
        height: 38.2vw;
    }
    .leadtirage img{
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width:768px) {
        .leader-content{
        padding-left: 28%;
        padding-top: 9.8vw;
        flex-direction: column; 
    }
    .firstill{
        position: relative;
        margin-left: -25vw;
        width: 92vw;
    }
    .boite{
        width: 70.56vw;
       
    }
    .boite-titre{
        font-size: 4.76vw;
        margin-left: 3.7vw;
    }
    .composition{
        margin-top: -24.6vw;
        margin-left: 1.2vw;
    }
    .composition ul li{
        margin-top: 1.5vw;
        font-size: 4.63vw;
        margin-left: 3.8vw;
        line-height: 6.3vw;
    }
    .leadform{
        width: 49.5vw;
        height: 32.3vw;
    }
    .icon{
        margin-top: 4vw;
        margin-left: -15.5vw;
        width: 15vw;
        height: 12vw;
        position: absolute;
    }
    .icon img{
        width: 100%;
        height: 100%;
    }
    #resp, #voc, #dom{
        margin-left: -6vw;
    }
    #org{
        margin-left: -7vw;
        margin-top: 6vw;
    }
    #voc{
        margin-top: 19.5vw;
    }
    #dom{
        margin-top: 18.5vw;
    }
    .leadtirage{
        position: relative;
        margin-top: -14vw;width: 90vw;
        margin-left: 4vw;
        height: 100.2vw;
    }
    }
</style>