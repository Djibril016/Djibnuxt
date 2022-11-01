<template>
    <section class="expe">

      <!-- *********TITRE CARTE********** -->
      <div>
         <Cardtitle titre="expériences" class="text-center" position="margin-left:-19.5vw;margin-top:5vw;width:59%"/>
      </div>
      <div data-aos="fade-left" data-aos-duration="2000" class=" exp-lum">
        <img src="../assets/explum.svg"  alt="experience de Mr Arnaud">
      </div>
     
       
      <div class="div-conteneur">
          <!-- ***********PRESIDENCE************* -->
      <div class="conteneur">
      
      <div data-aos="fade-right" data-aos-duration="2000" class=" col-11 col-lg-4 col-md-4 pt-5 date">
    
        <b>{{date1}} </b> <br>
        <p class="mt-2">
          {{sousdate1}}
        </p><br>
    
      </div>
  
      <Point class="pointexp"/>
     
      <div data-aos="fade-left" data-aos-duration="2000"  class=" col-11 col-lg-7 col-md-7 pt-5  charge">
        <b>{{structure1}}</b> <br>
        <ul class="mt-2 lister">
          <li v-for="(poste, index) in poste1" :key="index" v-bind:style="poste.style" >
            {{poste.li}}
          </li> 
        </ul>
        </div>

      </div>

      <!-- *************MINISTERE******** -->
  <div class="conteneur">
      
        <div data-aos="fade-right" data-aos-duration="2000" class=" col-11 col-lg-4 col-md-4 pt-5 date">
      
          <b>{{date2}} </b> <br>
          <p class="mt-2">
            {{sousdate2}}
          </p><br>
      
        </div>
    
        <Point class="pointexp"/>
       
        <div data-aos="fade-left" data-aos-duration="2000"  class=" col-11 col-lg-7 col-md-7 pt-5  charge">
          <b>{{structure2}}</b> <br>
          <ul class="mt-2 lister">
            <li v-for="(poste, index) in poste2" :key="index" >
              {{poste.li}}
            </li> 
          </ul>
          </div>

        </div>

        <!-- *************PNUD********* -->
        <div class="conteneur">
      
      <div data-aos="fade-right" data-aos-duration="2000" class=" col-11 col-lg-4 col-md-4 pt-5 date">
    
        <b>{{date3}} </b> <br>
        <p class="mt-2">
          {{sousdate3}}
        </p><br>
    
      </div>
  
      <Point class="pointexp"/>
     
      <div data-aos="fade-left" data-aos-duration="2000"  class=" col-11 col-lg-7 col-md-7 pt-5  charge">
        <b>{{structure3}}</b> <br>
        <ul class="mt-2 lister">
          <li v-for="(poste, index) in poste3" :key="index" >
            {{poste.li}}
          </li> 
        </ul>
        </div>

      </div>

      <!-- *************UNESCO************** -->
      <div class="conteneur">
      
      <div data-aos="fade-right" data-aos-duration="2000" class=" col-11 col-lg-4 col-md-4 pt-5 date">
    
        <b>{{date4}} </b> <br>
        <p class="mt-2">
          {{sousdate4}}
        </p><br>
    
      </div>
  
      <Point class="pointexp" id="pointexpE"/>
     
      <div data-aos="fade-left" data-aos-duration="2000" class=" col-11 col-lg-7 col-md-7 pt-5  charge">
        <b>{{structure4}}</b> <br>
        <ul class="mt-2 lister">
          <li v-for="(poste, index) in poste4" :key="index" >
            {{poste.li}}
          </li> 
        </ul>
        </div>

      </div>

      <!-- ***************DANIDA*************** -->
      <div class="conteneur">
      
      <div data-aos="fade-right" data-aos-duration="2000" class=" col-11 col-lg-4 col-md-4 pt-5 date">
    
        <b>{{date5}} </b> <br>
        <p class="mt-2">
          {{sousdate5}}
        </p><br>
    
      </div>
  
      <Point class="pointexp" id="pointexpD"/>
     
      <div data-aos="fade-left" data-aos-duration="2000" class=" col-11 col-lg-7 col-md-7 pt-5  charge">
        <b>{{structure5}}</b> <br>

        <ul class="mt-2 lister">
          <li v-for="(poste, index) in poste5" :key="index" >
            {{poste.li}}
          </li> 
        </ul>
      </div>

      </div>

      </div>
      <div id="formation-offset"></div>
    

    </section>
    </template>
  
    <script>
    import Mixins from '../pages/Mixins.vue';
  import Point from './Point.vue';
  import Cardtitle from './Cardtitle.vue';
       export default {
        mixins:[Mixins],
        name:"Exp",
          // name:"Conteneur",
          // props:{
          //     date:String,
          //     titredate: String,
             
          // },
          components:{ Point, Cardtitle },
          data: function (){
          return{

            // *********PRESIDENCE**************

            date1:"Depuis Février 2017 ",
            sousdate1:'Hydrologue et Expert Sénior en ressources naturelles, infrastructures et développement durable',
            structure1:"PRÉSIDENCE DE LA RÉPUBLIQUE DU BÉNIN",
            poste1:[
            {
             li:"Chargé de Mission à la Présidence de la République du Bénin :",
             style:"list-style: none;margin-left: -3%;"
           },
           {
             li:"Superviseur du Pôle Développement durable au Bureau d’Analyse et d’Investigation",
             style:""
           },
           {
             li:"Président/Membre de Conseils d’Administration d’entreprises publiques",
             style:""
           },
           {
             li:"Elaboration et appui du Programme d’Actions du Gouvernement",
             style:""
           },
           {
             li:"Expert à la Cellule de Suivi des Projets, Programmes et Réformes",
             style:""
           }
         ],

            // *********MINISTERE*************
            date2:"Juin 2005 - Février 2017",
            sousdate2:'Cadre technique supérieur \n\nEau/Energie',
            structure2:"MINISTÈRE DE L’ENERGIE, DE L’EAU ET DES MINES DU BÉNIN",
            poste2: [
              {li:"Directeur Général des Ressources en Eau"},
              {li:"Assistant Technique au Cabinet du Ministre"},
              {li:"Coordonnateur de Projets et Programmes"}, 
            ],

            // *********PNUD***************
            date3:"Janvier 2014 - Novembre 2015",
            sousdate3:"Expert Sénior en information hydro-climatique et Système d’Alerte Précoce",
            structure3:"PNUD",
            poste3:[
         {li:"Coordonnateur National du Projet Systèmes d’Alerte Précoce(SAP-Bénin)"},
         {li:"Mise en place des réseaux hydro-météo-océanologiques et du SAP multirisques inondation, sécheresse, vent fort, érosion côtière"},
         {li:"Développement des produits et services climatiques"},
         {li:"Modélisation et intégration des impacts y compris économiques du changement climatique dans la planification stratégique, opérationnelle et financière du développement"}
         ],

            // *********UNESCO***********
          date4:"Février 2013 – Août 2013",
          sousdate4:"Expert hydrologue Chef d’équipe",
          structure4:"UNESCO",
          poste4:[
           {
             li:"Chef d’équipe pour l’élaboration du rapport d’état des lieux du Bénin sur les normes hydrologiques",
           }
         ],

            // **********DANIDA**************
            date5:"Août 2007 - Mars 2009",
            sousdate5:"Expert Hydrologue Régional ",
            structure5:"DANIDA",
            poste5:[
              {li:"Expert Associé en charge du suivi hydrologique et de la gestion des données hydrométriques pour le Projet « Développement d’un modèle de gestion des eaux de surface dans le bassin du Nakanbé et appui au suivi hydrologique » au Burkina Faso"}
          ]
          }
        },
          
        }
      
    </script>
  
    <style >
     #formation-offset{
    height: 3.5vw;
  }
    .div-conteneur{
      padding-top: 16.7%;
    }
    .exp-lum{
      margin-left: 57vw;
      margin-top: -12.5vw;
      position: absolute;
    }
    .exp-lum img{
      height: 100%;
      width: 100%;
    }
      .conteneur{
          display: flex;
          flex-direction: row;
          color: rgba(1, 52, 128, 1);
          padding-left: 10%;
          font-weight: 400;
      }
      .charge{
          
          font-size: 1.2vw;
          font-weight: 400;
          line-height: 2.1vw;
          letter-spacing: 0em;
          font-family: "Poppins",sans-serif;
      }
      .date-cont{
        display: flex;
        flex-direction: row;
      }
      .date{
          width: 40.7vw;
          font-family: "Montserrat",sans-serif;
          font-weight: 400;
          font-size: 1.2vw;
          position: relative;
          text-align: right;
          line-height: 1.95vw;
      }
  
      @media screen and (max-width:768px) {
         .div-conteneur{
      /* padding-top: 16.7%;*/
      margin-top: 18vw; 
      width: 98vw;

    }
    .exp-lum{
      margin-left: 37vw;
      margin-top: -20.5vw;
      position: absolute;
      height: 70vw;
      width: 60vw;
    }
    .exp-lum img{
      height: 100%;
      width: 100%;
    }
      .conteneur{
          flex-direction: column;
          padding-left: 10%;
      }
      .pointexp{
        position: absolute;
      }
      .pointexp .tiret{
        height: 149%;
      }
      #pointexpD .tiret{
        height: 100%;
      }
    
      .charge{
          font-size: 3.7vw;
          line-height: 6vw;
          margin-left: 0px;
          width: 82vw;
          margin-top: -10vw;
      }
      
      .date{
          width: 96.7vw;
          font-size: 3.7vw;
          position: relative;
          text-align: left;
          line-height: 4.8vw;
      }
      }
 
    </style>
  