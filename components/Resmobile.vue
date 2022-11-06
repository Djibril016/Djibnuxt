<template>
    <div class="reseau ">
            <img src="../assets/Linkedin.png"  class="linkedin" alt="">

            <a href="mailto:contact@arnaudzannou.com"><img src="../assets/gmail.png"  class="mail" alt=""></a>

            <img src="../assets/call.png"  class="call" alt=""><span :style="numcol" class="num" >+229 91 91 66 66 </span>
       </div>
</template>

<script>
   export default{
       name:"Resmobile",
       props:['numcol']
   }
</script>

<style scoped>
 .reseau{
   display:flex;
   flex-direction: row;
   justify-items: flex-start;
}
.linkedin{
 margin-top: -3vw;
 height: 8.5vw;
 width: 8vw;

}
.reseau .mail{
 height: 6vw;
 width:8vw;
 border: 1px solid transparent;
 margin-top: -0.8vw;
 margin-left: 2vw;
}
.call{
 height: 6.3vw;
 width: 6.8vw;
 border: 1px solid transparent;
 margin-top: -0.6vw;
 margin-left: 2vw;
}
.num{
 font-size: 5.3vw;
 font-weight: 600;
 font-family: 'Roboto',sans-serif;
 color: rgba(2, 56, 137, 1);
 margin-top: -0.3vw;
 margin-left: 1vw;
}
/* .reseau{
        display: none;
    } */

@media screen and (width:768px) {
    .reseau{
        display: inline-block;
    }
}

</style>