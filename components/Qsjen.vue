<template>
    <section class="qsj">
        <div class="row prepart">
            <div class="col firstp">
                <div class="row title">
                   <div class="col-lg-7 col-md-6 col-8 mots"><h1>Who am I </h1></div> 
                   <div class="col-1 q-tag"><h1>?</h1> </div>
                </div>
                
        <p class="debut">
            I am an active citizen committed to the development and fulfillment of humanity. 
        </p>
    
        <p >
            After my primary and secondary studies driven by my passion for science,
            particularly mathematics, and my university studies in the fields of water,
            agriculture and natural resources, I managed a portfolio of projects from
            the start of my professional career, with a stint at the UNDP, expert missions
             with UNESCO and DANIDA, before taking up the position of General Manager of
            Water Resources in Benin.

        </p>
            </div>
            <div class="col qsimage">
                <img src="../assets/qsjillustre.svg" alt="ce qu'est Dr Zannou">
            </div>
            
        </div>
        <div class="row secondp">
            <p>
                Very committed to development issues, I have been Advisor and Program Manager
                at the Presidency of the Republic of Benin since 2017. As such, I supervise
                the Sustainable Development Pole at the Analysis and Investigation Board of
                the Presidency, and I support public governance, the management of state
                enterprises, the definition of development policies and strategies, 
                the design, implementation and monitoring of the Government Action Programme,
                particularly in the water, energy, natural environment, sanitation,
                living environment, mines and petroleum sectors.
            </p>
            <p>
                Hydrologist and Senior Expert in natural resources, infrastructure and
                sustainable development with international references, I am author of
                several scientific publications and communications.
            </p>
            <p>
                I teach integrated water resources management in universities in Benin and Africa,
                 and carry out consultancy and expertise assignments related to my expertise areas.
            </p>
            <p>
                As an active development citizen, I remain attentive to everyone and I am very involved
                 in community life and activities for the sustainable development of humanity.
            </p>
        </div>
        <div id="qsj-offset"></div>
    </section>
</template>

<script>
    export default {
        name:"Qsjen",

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
        font-size: 7.1vw;
        margin-top: -2.3vw;
        margin-left: -2.5vw;
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
        width: 39vw;
        height: 26vw;
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