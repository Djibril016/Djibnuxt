<template>
     <div class="reseau ">
             <img src="../assets/Linkedin.png" :style="linkedin" class="linkedin" alt="">

             <a href="mailto:contact@arnaudzannou.com"><img src="../assets/gmail.png" :style="mail" class="mail" alt=""></a>

             <img src="../assets/call.png" :style="call" class="call" alt=""><span class="num" :style="numcol">+229 91 91 66 66 </span>
        </div>
</template>

<script>
    export default{
        name:"Reseau",
        props:["linkedin", "mail", "call","numcol" ],
    }
</script>

<style>
  .reseau{
    display:flex;
    flex-direction: row;
    justify-items: flex-start;
}
/* .reseau img{
  padding: 0vw 0.3vw;
}
.linkedin{
  margin-top: -0.6vw;
  height: 2.5vw;
  width: 3vw;
  margin-left: 1vw;

}
.reseau .mail{
  height: 2vw;
  width:3.5vw;
  border: 1px solid transparent;
  margin-top: -3.5vw;
  margin-left: 4vw;
}
.call{
  height: 2.3vw;
  width: 2.8vw;
  margin-top: -3.6vw;
  margin-left: 9vw;
}
.num{
  font-size: 1.7vw;
  font-weight: 600;
  color: #FFFFFF;
  margin-top: -3.7vw;
  margin-left: 12vw;
} */

@media screen and (max-width:768px) {
  /* .reseau{
    display:flex;
    flex-direction: row;
    border: 1px solid black;
    height: 20vw;
    justify-items: flex-start;
  }
  
  .reseau img{
  padding: 0vw 0.8vw;
}
.linkedin{
  margin-top: 8vw;
  height: 16.5vw;
  width: 17vw;
}
.reseau .mail{
  margin-top: 8vw;
  height: 16vw;
  width:18vw;
  
}
.call{
  margin-top: 8vw;
  height: 16.3vw;
  width: 16.8vw;
  border: 1px solid black;
}
.num{
  font-size: 4.7vw;
} */
}
</style>