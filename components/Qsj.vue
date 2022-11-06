<template>
    <div class="qsj">
        <div class="row prepart">
            <div class="firstp">

                <!-- TITRE QSJ  -->
                <div data-aos="fade-right" data-aos-duration="2000" class="title">

                   <div class=" mots"><h1>Qui <br class="br"><span>suis-je</span> </h1></div> 
                   <div class="col-1 q-tag"><span>?</span> </div>
                </div>

                <!-- debut de para  -->

                <div class="debut">

                    <p > Je suis un acteur citoyen engagé pour le développement et l’épanouissement
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

            </div>

            <!-- l'illustration qsj  -->
            <div data-aos="zoom-in" data-aos-duration="2000" class=" qsimage">
                <img src="../assets/qsjillustre.svg" alt="ce qu'est Dr Zannou">
            </div>
            
        </div>
        <div class="secondp">
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
            </p><div id="qsj-offset"></div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:"Qsj",

    }
</script>

<style scoped>
    
    .qsj{
        padding-left: 8%;
        padding-right: 5%;
        background-color: #E4E3E3;
        width: auto;
        font-family: 'Roboto',sans-serif;
    }
    .qsj p{
        color: rgba(2, 56, 137, 1);
        font-weight: 500;
    }
    .prepart{
        display: flex;
        width: 94%;
    }
    .firstp{
        font-size: 1.4vw;
        margin-top: 9vw;
        width: 50%;
        height: 30vw;
        line-height: 2.2vw;

    }
    .title{
        color: rgba(232, 96, 48, 1);
        display: flex;
        height: 10vw;
        width: 30vw;
    }
    .mots h1{
        font-size: 5vw;
        line-height: 5.3vw;
        margin-top: -4.4vw;
        width: 100%;
    }
    .q-tag{
        height: auto;   
        margin-left: 2.5vw;
    }
   
    .q-tag span{
        font-size: 12.5vw;
        margin-left: -2.5vw;
    }
    .debut{
    }
    .secondp{
        font-size: 1.4vw;
        line-height: 2.2vw;
        padding-right: 6%;
        margin-top: 6.5%;
        text-align: justify;
    }
    .qsimage{
        height: auto;
        margin-top: 6%;
    }
    .qsimage img{
        height: 100%;
        width: 100%;
    }
    #qsj-offset{
        padding: 4vw;
    }

    @media screen and (max-width:768px){
        .qsj{
            margin-top: 0vw;
            padding-top: 10vw;
            padding-right: 4vw;
        }
        .title{
            padding-top: 5vw;
        }
        .mots h1{
        font-size: 10vw;
            line-height: 5.3vw;
            padding-left: 10vw;
            margin-left: 1vw;
            width: 55vw;
    }
    .br{
        display: none;
    }
    .q-tag{
        margin-top: -7.5vw;
        padding-top: 1vw;
        font-weight: 600;
    }
    .q-tag span{
        font-size: 13vw;
        margin-left: -3vw;
    }
    .prepart{
        flex-direction: column;
    }
    .firstp {
        
        margin-top: 22vw;
        width: 84vw;
    }
    .firstp .debut{
        margin-top: 62vw;
        width: 84vw;
    }
    .secondp{
        margin-top: 124vw;
        width: 84vw;
    }
    .firstp, .secondp{
        font-size: 4vw;
        text-align: justify;
        padding-left: 0vw;line-height: 6.5vw;
    }
    .qsimage {
        width: 82vw;
        height: 56vw;
        margin-top: 12vw;
        position: absolute;
    }
    .title{
        margin-top: -23vw;
    }
    }
</style>