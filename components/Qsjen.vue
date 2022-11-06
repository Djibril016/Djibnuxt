<template>
    <div class="qsj">
        <div class="row prepart">
            <div class="firstp">

                <!-- TITRE QSJ  -->
                <div data-aos="fade-right" data-aos-duration="2000" class="title">

                   <div class=" mots"><h1>Who <br class="br"><span>I am</span> </h1></div> 
                   <div class="q-tag"><span>?</span> </div>
                </div>

                <!-- debut de para  -->

                <div class="debut">

                    <p >  I am an active citizen committed to the development and fulfillment of humanity.  </p>
                
                    <p >
                        After my primary and secondary studies driven by my passion for science,
            particularly mathematics, and my university studies in the fields of water,
            agriculture and natural resources, I managed a portfolio of projects from
            the start of my professional career, with a stint at the UNDP, expert missions
             with UNESCO and DANIDA, before taking up the position of General Manager of
            Water Resources in Benin.

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
    </div>
</template>

<script>
    export default {
        name:"Qsjen",

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
            width: 48vw;
        }
        .br{
            display: none;
        }
        .q-tag{
            margin-top: -6.9vw;
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
        margin-top: 109vw;
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