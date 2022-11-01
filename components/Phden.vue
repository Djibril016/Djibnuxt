 <template>
   <section id="section0" >
  
   <div class="degr row">
  
      <div class="col-12 col-lg-6 col-md-6  text-part">
        <p class="titre-occ">
          Hydrologist and Expert in natural resources, infrastructure and sustainable development 
        </p>
        <p class="annee-exp">
          Over 20 years of high-level experience <br>
        </p>
        <p>
          <span class=" slogan ">
            I am an active citizen of development for serving humanity
          </span>
        </p>
        <p class="pqsj">
          <span class="qsj-link">
          <a :href="qsjlink" >Read more</a>
        </span>
        </p>
        
        <div class="resos">
          <Reseau/>
        </div>
        
     
      </div>
      

      <div class="col-12 col-lg-6 col-md-6 image-part">
      <img src="../assets/Avsb.png" class="phd-image" alt="">
       </div>

      </div>
      
    
  

</section>
  </template>
  
  <script>
import Reseau from './Reseau.vue';
export default{
    name: "Phden",
    props:["qsjlink"],
    components: { Reseau }
}
  
  
  </script>
  
  <style >
 #section0{
  width: 100%;
  margin-top: 1vw;
  align-items: center;
  justify-content: center;
 }
 .degr{
  width: 85.35vw;
  height: auto;
  padding-bottom: 5.5vw;
  margin-top: 8.5vw;
  margin-left: 6.4vw;
  background: transparent;
 }
 .text-part{
        margin-top:0vw;
        padding-left:0vw;
        padding-right: 0vw;
        padding-bottom: 0vw;
        margin-left: 0vw;
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
 .resos img{
  margin-left: 0.6vw;
 }

 /* *********RESPONSIVE PART********** */
 @media screen and (max-width:768px) {
    .degr{
        flex-direction: column;
        width: 98vw;
        margin-left: -1vw;
        /* border: 1px solid black; */
      }
      .image-part{
      height: 110vw;
      width: 100vw;
      /* border: 1px solid black; */
      position: absolute;
      margin-left: -1.9vw;
      margin-top: 0vw;
      }
      .text-part{
        margin-top: 102vw;
        padding-left: 12vw;
        padding-right: 12vw;
        padding-bottom: 9vw;
        margin-left: -01.8vw;
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
        line-height: 2.25vw;
      }
      .qsj-link{
        padding: 1.3vw 2vw;
        border-radius: 2.9vw;
        font-size: 3.5vw;
      }
      .resos{
        margin-top: 9.2vw;
        margin-left: 0vw;
      }
      .resos img{
        margin-left: 4vw;
      }
 }

  </style>
