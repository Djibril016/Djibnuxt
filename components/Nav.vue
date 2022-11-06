<template>
    <div  id="navbare">

        <!-- le titre navbar -->
        <div class="nom-dr">
            <a href="#">{{doctor}}</a>
        </div>

        <!-- menu -->
        <div v-if="!responsive" class="menu">
           <ul>
            <li :style="responsive1.valeur ? responsive1.style : sansresponsive" v-for="(menu, index) in menus" :key="index"><a :href="menu.to" class="liste"> {{menu.lien}}</a></li>
           </ul>

            <!-- Langue  -->
        <div class="langue">
            <nuxt-link class="eng" to="/English">En</nuxt-link>
        </div>

        </div>

       

        <div v-else class="button-responsive">
            <img @click="menuresponsive=!menuresponsive" src="../assets/navb.svg" alt="">
        </div>
     
             <div v-if="menuresponsive" class="menu-responsive">
            <div class="contenu-resp">
                <ul class="resp-menu">
                    <li :style="responsive1.valeur ? responsive1.style : sansresponsive" v-for="(menu, index) in menus" :key="index"><a :href="menu.to" class="liste"> {{menu.lien}}</a></li>
                </ul>

                <div class="langue">
                        <nuxt-link class="eng" to="/English">En</nuxt-link>
                </div>
            </div>
            
        </div>
       


    </div>

</template>

<script>
export default{
    name:'Nav',
    data(){
        return{
            
            doctor:'Dr Arnaud Yémalin ZANNOU',
            responsive:false,
            menuresponsive:false,
            responsive1: {
                valeur: false,
                style: {
                    padding: '4px',
                    margin: '4px'
                }                
            },
            sansresponsive:{
                padding: '0.4vw',
                margin: '0.4vw'
            },
            menus:[
              { 
                lien:'COMPÉTENCES',
                to:'#qsj-offset'
              },
              {
                 lien:'EXPÉRIENCES',
                 to:'#skill-offset',
                },
              {
                lien:'FORMATION',
                to:'#formation-offset'
              },
              { 
                lien:'LEADERSHIP',
                to:'#leadership-offset'
              },
              { lien:'CONTACTS',
                to:'#contact-offset'
            }
  
           ]
            
        }
    },

    mounted(){
        let instance = this

        // Animation de la navbarre au scroll
        window.addEventListener('scroll', function(e) {
            if (window.scrollY > 10)
            {
                document.getElementById('navbare').style.backgroundColor='rgba(2, 56, 137, 1)'
            } else
            {
                document.getElementById('navbare').style.backgroundColor='transparent'
            }
        }),
        // Alerte à la réduction de la largeur de la fenêtre
        window.addEventListener('resize', function (e) {
        if (document.documentElement.clientWidth < 992) {
            instance.responsive1.valeur = true
          
        } else {
            instance.responsive1.valeur = false
        }
        })

        if (document.documentElement.clientWidth < 768){
            instance.responsive = true
        }
        window.addEventListener('resize', function (e) {
        if (document.documentElement.clientWidth < 768) {
            instance.responsive = true
          
        } else {
            instance.responsive= false
        }
        })
    }
}
</script>

<style scoped>

/* ********responsive menu*** */

    .button-responsive{
        margin-left: 20vw;
        margin-top: 1vw;
        width: 5vw;
        height: 5vw;
        z-index: 2;
        /* position: absolute; */
    }
    /* .actif{
        transform: scaleY(1);
    } */
    .menu-responsive{
        position: absolute;
        background-color: blue;
        padding: 3vw 0;
        width: 100%;
        top: 0vw;
        transition: transform 0.5s ease-out;
        right: 12vw;
        z-index: 1;
    }
    .contenu-resp{
        width: auto;
        text-align: center;
    }
    .resp-menu{
        list-style: none; 
    }
    .resp-menu li{
        font-size: 4vw;
        line-height: 6vw;
    }
    .resp-menu li a{
        text-decoration: none;
        color: white;
    }
    
/* ***************** */
    #navbare{
        width: 100%;
        padding:2vw 0;
        display: flex;
        margin: 0;
        align-items: center;
        position: fixed;
        top: 0px;
        z-index: 14;
        /* position: relative; */
        font-family: 'Roboto',sans-serif;
       }
        /* // style du lien de pageup */
        .nom-dr{
            font-size: 2.1vw;
            font-weight: 800;
            letter-spacing: -1px;
            margin-left: 6.25vw;
           } 
            .nom-dr a{
                text-decoration: none;
                color: white;
            }
        
        /* // liste de menu  */
        .menu{
            display: flex;
            margin-left: 5vw;
            padding: 0; 
        }
          .menu ul{
                list-style: none; 
                display: flex;
                padding: 0;
                margin: 0; 
            }
              li{
                text-transform: uppercase;
                font-size: 1.3vw;
                letter-spacing: -1px;
                cursor: pointer;
            }

              .menu a{
                    text-decoration: none;
                    color: white;
                }
            
           
        /* // langue  */
        .langue{
            background: rgb(9, 73, 170);
            border-radius: 0.3vw;
            /* padding: 0.3vw 0.6vw; */
            padding-top: 0.8vw;
            padding-right: 0.8vw;
            padding-left: 0.8vw;
            margin-left: 3vw;
            width: 1.8vw;
            text-decoration: none;
            color: white;
        }
        .eng{
            text-decoration: none;
            color: white;
            font-size: 1.3vw;
         }
    
         @media screen and (max-width:768px) {
            #navbare{
        padding: 5vw 0;
        display: flex;
        margin: 0;
        align-items: center;
        position: fixed;
        top: 0px;
        z-index: 14;
        font-family: 'Roboto',sans-serif;
       }
            .langue{
            border-radius: 2vw;
            padding: 1.5vw 1.7vw;
            width: 7vw;
            margin-left: 46vw;
            }
            .nom-dr{
            font-size: 4vw;
            letter-spacing: -1px;
            margin-left: 4.25vw;
            width: 60vw;
           } 
            .langue a{
                font-size: 4.5vw;
                margin-left: 1vw; 
            }
         }
    
</style>