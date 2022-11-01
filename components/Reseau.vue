<template>
     <div class="reseau row">
             <img src="../assets/Linkedin.png" class="linkedin" alt="">
             <a href="mailto:contact@arnaudzannou.com"><img src="../assets/mail.svg" class="mail " alt=""></a>
             <img src="../assets/call.png" class="call" alt=""><span class="num" :style="numcol">+229 91 91 66 66 </span>
        </div>
</template>

<script>
    export default{
        name:"Reseau",
        props:["numcol"],
    }
</script>

<style>
  .reseau{
}
.reseau img{
  padding: 0vw 0.3vw;
}
.linkedin{
  margin-top: -0.6vw;
  height: 2.5vw;
  width: 3vw;
}
.reseau .mail{
  height: 2.7vw;
  width:4vw;
  margin-top: -1%;
}
.call{
  height: 2.3vw;
  width: 2.8vw;
  margin-top: -0.1vw;
}
.num{
  font-size: 1.7vw;
  font-weight: 600;
  color: #FFFFFF;
  margin-top: -1%;
}

@media screen and (max-width:768px) {
  .reseau img{
  padding: 0vw 0.3vw;
}
.linkedin{
  margin-top: -0.8vw;
  height: 6.5vw;
  width: 7vw;
}
.reseau .mail{
  height: 9.7vw;
  width:8vw;
  margin-top: -1%;
  
}
.call{
  height: 6.3vw;
  width: 6.8vw;
  margin-top: -0.1vw;
}
.num{
  font-size: 4.7vw;
  margin-top: -1%;
}
}
</style>