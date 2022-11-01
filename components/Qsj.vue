<template>
    <section class="qsj">
        <div class="row prepart">
            <div class="col firstp">
                <div data-aos="fade-right" data-aos-duration="2000" class="row title">
                   <div class="col-lg-5 col-md-6 col-8 mots"><h1>Qui <br class="br"><span>suis-je</span> </h1></div> 
                   <div class="col-1 q-tag"><h1>?</h1> </div>
                </div>
                
        <p class="debut"> Je suis un acteur citoyen engagé pour le développement et l’épanouissement
            de l’humanité. </p>
    
        <p >
            Après mes études primaires et secondaires dominées par la passion des
            sciences notamment des mathématiques, et mes études universitaires dans
            les domaines de l’eau, de l’agriculture et des ressources naturelles, je dirige
            dès le début de ma carrière professionnelle un portefeuille de projets publics
            avec un passage au PNUD, des missions d’expertise avec l’UNESCO et la
            DANIDA, avant d’occuper le poste de Directeur Général des Ressources en
            Eau du Bénin. 
        </p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000" class="col qsimage">
                <img src="../assets/qsjillustre.svg" alt="ce qu'est Dr Zannou">
            </div>
            
        </div>
        <div class="row secondp">
            <p>
                Très engagé sur les enjeux du développement, je suis Chargé de Mission à la
            Présidence de la République du Bénin depuis 2017. A ce titre, je supervise le
            Pôle Développement Durable au Bureau d’Analyse et d’Investigation de la
            Présidence, et j’appuie la gouvernance publique, la gestion des entreprises
            d’Etat, la définition des politiques et stratégies de développement, la
            conception, la mise en œuvre et le suivi du Programme d’Actions du
            Gouvernement, notamment dans les secteurs de l’eau, de l’énergie, de
            l’environnement, de l’assainissement, du cadre de vie, des mines et du
            pétrole. 
            </p>
            <p>
            Hydrologue et Expert Sénior en ressources naturelles, infrastructures et
            développement durable avec plusieurs références à l’international, je suis
            auteur de plusieurs publications et communications scientifiques. 
            </p>
            <p>
            J’enseigne la gestion intégrée des ressources en eau dans des universités du
            Bénin et d’Afrique, et réalise des missions de conseils et d’expertise en
            relation avec mes domaines de compétences. 
            </p>
            <p>
            Acteur citoyen de développement, je reste à l’écoute de tous et demeure très
            engagé dans la vie associative et dans les activités communautaires pour
            l’épanouissement durable de l’humanité.
            </p>
        </div>
        <div id="qsj-offset"></div>
    </section>
</template>

<script>
import Mixins from '../pages/Mixins.vue'
    export default {
        mixins:[Mixins],
        name:"Qsj",

    }
</script>

<style>
    
    .qsj{
        padding-left: 8%;
        padding-top: 7%;
        padding-right: 5%;
        background-color: #E4E3E3;
       width: 100%;
    }
    .qsj p{
        color: rgba(2, 56, 137, 1);
        font-weight: 500;
    }
    .firstp{
        font-size: 1.4vw;

    }
    .title{
        color: rgba(232, 96, 48, 1);
    }
    .mots h1{
        font-size: 5vw;
            line-height: 5.3vw;
    }
    .q-tag{
        height: auto;   
        
    }
    .q-tag h1{
        font-size: 12.5vw;
        margin-top: -2.3vw;
        margin-left: -2.5vw;
        height: 18vw;
    }
    .secondp{
        font-size: 1.4vw;
        padding-right: 6%;
        padding-left: 1%;
        text-align: justify;
    }
    .qsimage{
        height: auto;
        padding-bottom: 2%;
        
    }
    .qsimage img{
        width: 42vw;
        height: 36vw;
    }
    #qsj-offset{
        height: 5vw;
    }

    @media screen and (max-width:768px){
        .qsj{
            margin-top: 0vw;
            padding-top: 10vw;
        }
        .mots h1{
        font-size: 10vw;
            line-height: 5.3vw;
            padding-left: 10vw;
    }
    .br{
        display: none;
    }
    .q-tag h1{
        font-size: 14.5vw;
        margin-top: -7.8vw;
        margin-left: -3.9vw;
    }
    .prepart{
        flex-direction: column;
    }
    .firstp {
        line-height: 6.5vw;
        margin-top: 22vw;
    }
    .firstp .debut{
        margin-top: 62vw;
    }
    .secondp{
        margin-top: 140vw;
    }
    .firstp, .secondp{
        font-size: 4vw;
        text-align: justify;
        padding-left: 0vw;
    }
    .qsimage img{
        width: 82vw;
        height: 56vw;
        margin-top: -12vw;
        position: absolute;
    }
    .title{
        margin-top: -23vw;
    }
    }
</style>