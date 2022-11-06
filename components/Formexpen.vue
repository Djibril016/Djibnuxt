<template>
    <section>
        <Conexp>
        <template v-slot:date>
            <span><b>Since February 2017</b> </span>
        </template>
        <template v-slot:annee>
            <span>Hydrologist and Senior Expert in natural resources, infrastructure and sustainable development</span>
        </template>
        <template v-slot:matiere>
            <span><b>PRESIDENCY OF THE REPUBLIC OF BENIN </b> </span>
        </template>
        <template v-slot:mention>
            <ul id="cascade">
                <li class="charge" id="charge">Advisor and Program Manager at the Presidency of the Republic of Benin:</li>
                <li>Supervisor of the Sustainable Development Pole at the Analysis and Investigation Board</li>
                <li>Chairman/Member of Governing Boards of public companies</li>
                <li>Development and support  to the Government Action Programme</li>
                <li>Expert at the Projects, Programs and Reforms Monitoring Unit</li>

            </ul>
        </template>
    </Conexp>

    <!-- **********ministere de l'eau**** -->
   
    <Conexp>
        <template v-slot:date>
            <span><b>June 2005 – February 2017</b> </span>
        </template>
        <template v-slot:annee>
            <span>Senior technical Executive in <br> water/energy</span>
        </template>
        <template v-slot:matiere>
            <span><b>MINISTRY OF ENERGY, WATER AND MINES OF BENIN </b> </span>
        </template>
        <template v-slot:mention>
            <ul>
                <li>General Manager of Water Resources</li>
            <li>Technical Officer in the Minister's Office</li>
            <li>Projects and Programs Coordinator</li>
            </ul>
            
        </template>
    </Conexp>

    <!-- ***********PNUD********* -->
   
    <Conexp>
        <template v-slot:date>
            <span><b>January 2014 – November 2015</b> </span>
        </template>
        <template v-slot:annee>
            <span>Senior Expert in hydro-climatic information and Early Warning System</span>
        </template>
        <template v-slot:matiere>
            <span><b>UNDP</b> </span>
        </template>
        <template v-slot:mention>
            <ul>
             <li >National Coordinator of the Early Warning Systems Project (EWS-Benin)</li> 
            <li>Implementation of hydro-meteo-oceanological networks and multi-risk EWS flood, drought, strong wind, coastal erosion </li>
            <li>Development of climate products and services</li>
            <li>Modeling and integration of the impacts, including the economic ones, of climate change in strategic, operational and financial development planning </li> 
            </ul>

        </template>
    </Conexp>

    <!-- **********UNESCO***** -->
    <Conexp>
     
        <template v-slot:date>
            <span ><b>February – August 2013</b> </span>
        </template>
        <template v-slot:annee>
            <span>Hydrologist expert and Team leader</span>
        </template>
        <template v-slot:matiere>
            <span><b>UNESCO</b> </span>
        </template>
        <template v-slot:mention>
            <ul>
                 <li>Team leader for the development of Benin's status report on hydrological standards</li>
            </ul>
           
        </template>
    </Conexp>


    <Conexp>
        <template v-slot:date>
            <span><b>August 2007 – March 2009</b> </span>
        </template>
        <template v-slot:annee>
            <span>Regional hydrologist expert</span>
        </template>
        <template v-slot:matiere>
            <span><b>DANIDA</b> </span>
        </template>
        <template v-slot:mention>
            <ul>
                 <li>Expert in charge of hydrological monitoring and hydrometric data management for the Project “Development of a surface water management model in the Nakanbé basin and support for hydrological monitoring” in Burkina Faso</li>
            </ul>
           
        </template>
    </Conexp>
    </section>
   

</template>

<script>
    import Conexp from './Conexp.vue';
    export default{
    name: "Formexpen",
    components: { Conexp }
}
</script>

<style>
     .charge{ 
          list-style: none;
          margin-left: -1vw;
          width: auto;
      }
      /* .mission{
        margin-top: -0.1vw;
      } */
@media screen and (max-width:768px) {
     
      #charge{
        font-size: 4.3vw;
        width: 70vw;margin-left: -4vw;
      }
      #cascade{
        margin-top: 12vw;
      }
}
    
</style>


<!-- <template >
    <section> 
   

      <div id="formation-offset"></div>

    </section>
      </template> -->