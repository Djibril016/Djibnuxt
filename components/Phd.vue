 <template>
   <div id="section0" >
   
   <div class="degr row">
      <div data-aos="fade-right" data-aos-duration="2000" class="text-part">
        <p class="titre-occ">
          Hydrologue et Expert en ressources naturelles, infrastructures et développement durable 
        </p>
        <p class="annee-exp">
          Plus de 20 ans d’expérience de haut niveau <br> 
        </p>
        <p>
          <span class=" slogan ">
          Je suis un acteur citoyen de développement au service de l’humanité. 
          </span>
        </p>
        <p class="pqsj">
          <span class="qsj-link">
          <a :href="qsjlink" >Lire plus</a>
        </span>
        </p>
        
        <div class="resos">
          <Reseau
            linkedin="width:3vw;height:2.8vw;margin-left:1vw;margin-top:-0.6vw;"
            mail="width:3.3vw;border: 1px solid transparent;height:2.2vw;margin-left:1.3vw"
            call="width:2.8vw;height:2.3vw;margin-left:1.3vw"
            numcol="color:white;font-size:1.9vw;margin-left:1.3vw;font-weight: 600;font-family:Roboto,sans-serif"           
          />
         
        </div>
        <div class="respo">
          <Resmobile numcol="color:white;"  />
        </div>
         
     
      </div>

      <div data-aos="zoom-in" data-aos-duration="2000" class="image-part">
      <img  src="../assets/Avsb.png" class="phd-image" alt="">
       </div>

      </div>
      
    
  

</div>
  </template>
  
  <script>
import Reseau from './Reseau.vue';
import Resmobile from './Resmobile.vue';
// import Mixins from '../pages/Mixins.vue'
export default{
  // mixins: [Mixins],
    name: "Phd",
    props:["qsjlink"],
    components: { Reseau, Resmobile }
}
  
  
  </script>
  
  <style >
  
  /* ********* */
 #section0{
  width: 100%;
  margin-top: 1vw;
  border: 1px solid transparent;
  font-family: 'Roboto',sans-serif;
  align-items: center;
  justify-content: center; 
  background: url('../assets/background.svg');
  background-size: auto;
 }

 .degr{
  width: 85.35vw;
  display: flex;
  height: auto;
  padding-bottom: 5.5vw;
  margin-top: 8.5vw;
  margin-left: 6.4vw;
 
 }
 .text-part{
        margin-top:0vw;
        padding-left:0vw;
        padding-right: 0vw;
        padding-bottom: 0vw;
        margin-left: 0vw;
        width: 44vw;
        height: auto;
      }
 .image-part{
  height: 46vw;
  width: 50.5%;
 }
 .phd-image{
  width: 100%;
  height: 100%;
 }
 .titre-occ{
  text-transform: uppercase;
  font-size: 1.8vw;
  line-height: 4.25vw;
  margin-top: 5vw;
  color: #FFFFFF;
  font-weight: 700;
 }
 .annee-exp{
  margin-top: 2.8vw;
  font-size: 1.6vw;
  font-weight: 400;
  color: #FFFFFF;
  padding-bottom: 1.2vw;
 }
 .slogan{
  color: rgba(232, 96, 48, 1);
  font-size: 1.9vw;
  font-weight: 600;
  line-height: 2.25vw;
  border: 1px solid transparent;
  
 }
 
 .qsj-link{
  padding: 0.6vw 2vw;
  border-radius: 1.43vw;
 
  font-size: 1.5vw;
 
  font-weight: 600;
  list-style: none;
  color: rgba(2, 56, 137, 1);
  background: #FFFFFF;
 }
 .pqsj{
    margin-top: 3.5vw;
 }
 .resos{
  margin-top: 4.2vw;
  margin-left: 7.5vw;
 }
 .respo{
  display: none;
 }
 .resos img{
  margin-left: 0.6vw;
 }

 /* *********RESPONSIVE PART********** */
 @media screen and (max-width:768px) {
  
  #section0{ 
    border: 1px solid black;
  }  
  .degr{
        flex-direction: column;
        width: 100%;
        margin-left: -1vw;
        background: rgba(2, 56, 137, 1);
      }
      .image-part{
      height: 110vw;
      width: 100%;
      position: absolute;
      margin-left: -1.7vw;
      margin-top: 3vw;
     
     
      }
      .text-part{
        margin-top: 116vw;
        padding-left: 12vw;
        padding-right: 12vw;
        padding-top: 3vw;
        padding-bottom: 9vw;
        margin-left: 1vw;
        /* width: 100vw; */
        width: auto;
        background: url('../assets/background.svg');
      }
      .titre-occ{
        font-size: 5.6vw;
        line-height: 7.25vw;
        margin-top: 5vw;
      }
      .annee-exp{
        margin-top: 2.8vw;
        font-size: 4vw;
        padding-bottom: 1.2vw;
      }
      .slogan{
        font-size: 4.9vw;
        line-height: 6vw;
      }
      .qsj-link{
        padding: 1.3vw 2vw;
        border-radius: 2.9vw;
        font-size: 3.5vw;
      }
      .resos{
        display: none;
        margin-top: 9.2vw;
        margin-left: 0vw;
      }
      .resos img{
        margin-left: 4vw;
      }
      .respo{
        display: block;
        margin-top: 14vw;
      }
 }

  </style>
