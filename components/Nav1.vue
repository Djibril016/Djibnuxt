<template>
    <div  id="navbare">

        <!-- le titre navbar -->
        <div class="nom-dr">
            <a href="#">{{doctor}}</a>
        </div>

        <!-- menu -->
        <div class="menu">
           <ul>
            <li :style="responsive1.valeur ? responsive1.style : sansresponsive" v-for="(menu, index) in menus" :key="index"><a :href="menu.to" class="liste"> {{menu.lien}}</a></li>
           </ul>
        </div>

        <!-- Langue  -->
        <div class="langue">
            <nuxt-link class="eng" to="/English">En</nuxt-link>
        </div>

    </div>

</template>

<script>
export default{
    name:'Nav1',
    data(){
        return{
            
            doctor:'Dr Arnaud Yémalin ZANNOU',
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
    }
}
</script>

<style scoped>
    #navbare{
        width: 100%;
        padding:2vw 0;
        display: flex;
        margin: 0;
        align-items: center;
        position: fixed;
        top: 0px;
        z-index: 14;
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
            margin-left: 4vw;
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
            height: 2vw;
            width: 3vw;
            margin-left: 3vw;
            text-decoration: none;
            color: white;
        }
        .eng{
            text-decoration: none;
            color: white;
            font-size: 1.3vw;
         }
    
    
</style>