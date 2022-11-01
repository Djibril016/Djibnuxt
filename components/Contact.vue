<template>
    <section class="section-contact">
      <Cardtitle titre="ME CONTACTER" class="pb-4 text-center" position="margin-left:-22.3vw;margin-top:5vw;width:61.2%"/>
      <div class="coordonne">
         <form action="" class="row form-group ">
                 
                    <div class="col-12  name-mail ">
                      <input type="text" name="nom" class=" nom" placeholder="Nom">
                      <input type="email" v-model="email" name="email" class=" mail " placeholder="Votre addresse email">
                    </div> 

                      <input type="text" name="objet" class=" objet" placeholder="Objet">

                    <textarea name="message" id="" v-model="message" class=" textarea" cols="10" rows="10" placeholder="Message"></textarea>                    
                    
                    <!-- <div > -->
                      <input type="submit" id="button" @click.prevent="send" class="form-control button" name="send" value="Envoyer">
                    <!-- </div>  -->
                </form>

                <div class="col-lg-5 col-md-6 col-12 name-part">
                    <h2 style="color: rgba(2, 56, 137, 1);"> Dr Arnaud Yémalin ZANNOU </h2>
                    <div class="reso">
                      <Reseau numcol="color:rgba(2, 56, 137, 1)"/>
                    </div>
                </div>
      </div>
       
    </section>
     
</template>

<script>
import Reseau from './Reseau.vue';
import Cardtitle from './Cardtitle.vue';
    export default{
        name: "Contact",
        components:{
    Reseau,
    Cardtitle
},
  data(){
    return{
      email:'',
      message:'',
    }
  },
  methods: {
    send() {
      this.$mail.send({
        from:this.email,
        subject: 'Contact form message',
        text: this.message,
      })
    }
  }
 
    }
</script>
<style>
/* .section-contact{
  background-color: rgba(255, 242, 238, 1);
} */
.coordonne{
  padding-left: 2%;
  display: flex;
  width: 100%;
  background-color: rgba(255, 242, 238, 1);
}
  .form-group {
    /* border: 1px solid black; */
    margin-left: 10%;
  }
  .form-group input, textarea ::placeholder{
    font-family: "Montserrat-Regular";
    color: rgb(46, 44, 44);

}

.name-mail{
    display: inline-flex;
    padding-left: 0px;
    padding-right: 0%;
}
/* CASE MAIL  */
.name-mail .mail{
    width: 72%;
    margin-left: 4%;
    margin-top: 0vw;
}
/* NOM  */
.name-mail .nom{
        width: 45%;  
}

textarea, .objet, .name-mail{
  
width: 100%;
}
.textarea, .objet {
    margin-top: 1vw;
}

.button {
    width: 100%;
   background: rgba(232, 96, 48, 1); 
    font-size: 1.5vw;
    
    line-height: 1.4vw;
    letter-spacing: 0px;
    text-align: center;
    margin-top: 1vw;

}
#button{
  font-family: "Montserrat",sans-serif;
  font-weight: 700;
  color: white;
}
.nom, .mail, .objet, .button{
    height: 2.9vw;
    border-radius: 0.4vw;
    border: 1px solid #CCCCCC;

}
.textarea{
  border-radius: 0.4vw;
  border:1px solid  rgb(223, 216, 216);
}
.nom:focus, .mail:focus, .objet:focus, textarea:focus{
    outline: 1px solid rgba(232, 96, 48, 1);
  
}

::placeholder {
    color: #9b9b9b;
    opacity: 1; /* Firefox */
    font-family: "Montserrat";
    padding-top: 0.79vw;
    padding-left: 1vw;
    font-weight: 400;
    font-size: 1.1vw;
    line-height: 1.4vw;
    letter-spacing: 0px;
    text-align: left;
  }
  :-webkit-input-placeholder {
    /* Chrome, Safari, Opera */
    color: #CCCCCC;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #CCCCCC;
  }


form{
    margin-left: auto;
    padding-top: 8vw;
    padding-bottom: 6.4vw;
    width: 36vw;
   
}
/* ******Partie des adresses********** */
.name-part{
  margin-left: 6%;
  
}
.name-part h2{
  margin-top: 35%;
  font-family: "Roboto",sans-serif;
  font-weight: 600;
}
.reso{
  width: 100%;
  height: auto;
  padding-left: 4%;
  padding-top: 01vw;
}
@media screen and (max-width:768px) {
  
  .nom, .mail, .objet, .button{
    height: 8.5vw;
    border-radius: 1vw;
  }
  .textarea{
  border-radius: 1vw;
  height: 32vw;
  }
  .textarea, .objet {
    margin-top: 2vw;
}
  .button{
    margin-top: 2vw;
    font-size: 4.1vw;
  }
  ::placeholder {
    
    font-size: 3.1vw;
    line-height: 1.4vw;
  }
  form{
    width: 78vw;
  }

   .coordonne{
    padding-left: 2%;
    flex-direction: column;
    width: 100%;
}
.reso{
  width: 60vw;
  height: auto;
  padding-left: 4%;
  padding-top: 01vw;
}  
.name-part{
  margin-left: 6%;
  width: 90vw;
  background-color: rgba(255, 242, 238, 1);
  
}
.name-part h2{
  margin-top: 6%;
}
.reso{
  width: 100%;
  height: auto;
  padding-left: 10%;
  padding-top: 3vw;
}
.reso img{
  margin-left: 3vw;
}
}
</style>