<template>
    <section class="expe">

      <!-- *********TITRE CARTE********** -->
      <div>
         <Cardtitle titre="experiences" class="text-center" position="margin-left:-19.5vw;margin-top:5vw;width:59%"/>
      </div>
      <div class=" exp-lum">
        <img src="../assets/explum.svg"  alt="experience de Mr Arnaud">
      </div>
     
       
      <div class="div-conteneur">
          <!-- ***********PRESIDENCE************* -->
      <div class="conteneur">
      
      <div class=" col-11 col-lg-4 col-md-4 pt-5 date">
    
        <b>{{date1}} </b> <br>
        <p class="mt-2">
          {{sousdate1}}
        </p><br>
    
      </div>
  
      <Point class="pointexp"/>
     
      <div  class=" col-11 col-lg-7 col-md-7 pt-5  charge">
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
      
        <div class=" col-11 col-lg-4 col-md-4 pt-5 date">
      
          <b>{{date2}} </b> <br>
          <p class="mt-2">
            {{sousdate2}}
          </p><br>
      
        </div>
    
        <Point class="pointexp"/>
       
        <div  class=" col-11 col-lg-7 col-md-7 pt-5  charge">
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
      
      <div class=" col-11 col-lg-4 col-md-4 pt-5 date">
    
        <b>{{date3}} </b> <br>
        <p class="mt-2">
          {{sousdate3}}
        </p><br>
    
      </div>
  
      <Point class="pointexp"/>
     
      <div  class=" col-11 col-lg-7 col-md-7 pt-5  charge">
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
      
      <div class=" col-11 col-lg-4 col-md-4 pt-5 date">
    
        <b>{{date4}} </b> <br>
        <p class="mt-2">
          {{sousdate4}}
        </p><br>
    
      </div>
  
      <Point class="pointexp" id="pointexpE"/>
     
      <div  class=" col-11 col-lg-7 col-md-7 pt-5  charge">
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
      
      <div class=" col-11 col-lg-4 col-md-4 pt-5 date">
    
        <b>{{date5}} </b> <br>
        <p class="mt-2">
          {{sousdate5}}
        </p><br>
    
      </div>
  
      <Point class="pointexp" id="pointexpD"/>
     
      <div  class=" col-11 col-lg-7 col-md-7 pt-5  charge">
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
  import Point from './point.vue';
  import Cardtitle from './Cardtitle.vue';
       export default {
        name:"Expen",
          // name:"Conteneur",
          // props:{
          //     date:String,
          //     titredate: String,
             
          // },
          components:{ Point, Cardtitle },
          data: function (){
          return{

            // *********PRESIDENCE**************

            date1:"Since February 2017",
            sousdate1:'Hydrologist and Senior Expert in natural resources, infrastructure and sustainable development',
            structure1:"Presidency of the Republic of Benin",
            poste1:[
            {
             li:"Advisor and Program Manager at the Presidency of the Republic of Benin:",
             style:"list-style: none;margin-left: -3%;"
           },
           {
             li:"Supervisor of the Sustainable Development Pole at the Analysis and Investigation Board",
             style:""
           },
           {
             li:"Chairman/Member of Governing Boards of public companies",
             style:""
           },
           {
             li:"Development and support  to the Government Action Programme",
             style:""
           },
           {
             li:"Expert at the Projects, Programs and Reforms Monitoring Unit",
             style:""
           }
         ],

            // *********MINISTERE*************
            date2:"June 2005 – February 2017",
            sousdate2:'Senior technical Executive in water/energy ',
            structure2:"Ministry of Energy, Water and Mines of Benin",
            poste2: [
              {li:"General Manager of Water Resources"},
              {li:"Technical Officer in the Minister's Office"},
              {li:"	Projects and Programs Coordinator"}, 
            ],

            // *********PNUD***************
            date3:" January 2014 – November 2015",
            sousdate3:"Senior Expert in hydro-climatic information and Early Warning System",
            structure3:"UNDP",
            poste3:[
         {li:"National Coordinator of the Early Warning Systems Project (EWS-Benin)"},
         {li:"Implementation of hydro-meteo-oceanological networks and multi-risk EWS flood, drought, strong wind, coastal erosion"},
         {li:"Development of climate products and services"},
         {li:"Modeling and integration of the impacts, including the economic ones, of climate change in strategic, operational and financial development planning"}
         ],

            // *********UNESCO***********
          date4:"  February – August 2013",
          sousdate4:"Hydrologist expert and Team leader",
          structure4:"UNESCO",
          poste4:[
           {
             li:"Team leader for the development of Benin's status report on hydrological standards",
           }
         ],

            // **********DANIDA**************
            date5:"August 2007 – March 2009",
            sousdate5:"Regional hydrologist expert",
            structure5:"DANIDA",
            poste5:[
              {li:"Expert in charge of hydrological monitoring and hydrometric data management for the Project “Development of a surface water management model in the Nakanbé basin and support for hydrological monitoring” in Burkina Faso"}
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
          border: 1px solid black;
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
  