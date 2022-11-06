<template>
    <div>
         <Conexp>
        <template v-slot:date>
            <span><b>Depuis Février 2017</b> </span>
        </template>
        <template v-slot:annee>
            <span>Hydrologue et Expert Sénior en ressources naturelles, infrastructures et développement durable</span>
        </template>
        <template v-slot:matiere>
            <span><b>PRÉSIDENCE DE LA RÉPUBLIQUE DU BÉNIN</b> </span>
        </template>
        <template v-slot:mention>
            <ul class="mission" id="cascade">
                <li class="charge" id="charge">Chargé de Mission à la Présidence de la République du Bénin :</li>
                <li>Superviseur du Pôle Développement durable au Bureau d’Analyse et d’Investigation</li>
                <li>Président/Membre de Conseils d’Administration d’entreprises publiques</li>
                <li>Elaboration et appui du Programme d’Actions du Gouvernement</li>
                <li>Expert à la Cellule de Suivi des Projets, Programmes et Réformes</li>



            </ul>
        </template>
    </Conexp>

    <!-- **********ministere de l'eau**** -->

    <Conexp>
        <template v-slot:date>
            <span><b>Juin 2005 - Février 2017</b> </span>
        </template>
        <template v-slot:annee>
            <span>Cadre technique supérieur <br> Eau/Energie</span>
        </template>
        <template v-slot:matiere>
            <span><b>MINISTÈRE DE L’ENERGIE, DE L’EAU ET DES MINES DU BÉNIN</b> </span>
        </template>
        <template v-slot:mention>
            <ul class="mission">
                <li>Directeur Général des Ressources en Eau</li>
            <li>Assistant Technique au Cabinet du Ministre</li>
            <li>Coordonnateur de Projets et Programmes</li>
            </ul>
            
        </template>
    </Conexp>

    <!-- ***********PNUD********* -->
    <Conexp>
        <template v-slot:date>
            <span><b>Janvier 2014 - Novembre 2015</b> </span>
        </template>
        <template v-slot:annee>
            <span>Expert Sénior en information hydro-climatique et Système d’Alerte Précoce</span>
        </template>
        <template v-slot:matiere>
            <span><b>PNUD</b> </span>
        </template>
        <template v-slot:mention>
            <ul class="mission">
             <li>Coordonnateur National du Projet Systèmes d’Alerte Précoce(SAP-Bénin)</li> 
            <li>Mise en place des réseaux hydro-météo-océanologiques et du SAP multirisques inondation, sécheresse, vent fort, érosion côtière </li>
            <li>Développement des produits et services climatiques</li>
            <li>Modélisation et intégration des impacts y compris économiques du changement  climatique dans la planification stratégique, opérationnelle et financière du développement </li> 
            </ul>

        </template>
    </Conexp>

    <!-- **********UNESCO***** -->
    <Conexp>
        <template v-slot:date>
            <span ><b>Février 2013 – Août 2013</b> </span>
        </template>
        <template v-slot:annee>
            <span>Expert hydrologue Chef d’équipe</span>
        </template>
        <template v-slot:matiere>
            <span><b>UNESCO</b> </span>
        </template>
        <template v-slot:mention>
            <ul class="mission">
                 <li>Chef d’équipe pour l’élaboration du rapport d’état des lieux du Bénin sur les normes hydrologiques</li>
            </ul>
           
        </template>
    </Conexp>


    <Conexp>
        <template v-slot:date>
            <span><b>Août 2007 - Mars 2009</b> </span>
        </template>
        <template v-slot:annee>
            <span>Expert Hydrologue Régional</span>
        </template>
        <template v-slot:matiere>
            <span><b>DANIDA</b> </span>
        </template>
        <template v-slot:mention>
            <ul class="mission">
                 <li>Expert Associé en charge du suivi hydrologique et de la gestion des données hydrométriques pour le Projet « Développement d’un modèle de gestion des eaux de surface dans le bassin du Nakanbé et appui au suivi hydrologique » au Burkina Faso</li>
            </ul>
           
        </template>
    </Conexp>

  
</div>
   

</template>

<script>
    import Conexp from './Conexp.vue';
    export default{
    name: "Formcont",
    components: { Conexp }
}
</script>

<style>
     .charge{ 
          list-style: none;
          margin-left: -1vw;
          width: auto;
      }
      .mission{
        margin-top: -0.1vw;
      }
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

