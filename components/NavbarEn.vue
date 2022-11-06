<template>
    <section>
        <nav class="navbar navbar-expand-lg fixed-top  navbar-light " id="nav">

<a class="navbar-brand" href="#"><b class="name">Dr Arnaud Yémalin ZANNOU</b></a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

<span><img src="../assets/navb.svg" alt=""></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
<div class="class-menu">
<ul v-for="menu in menus" v-bind:key="menu.lien" class="navbar-nav mr-auto">
  <li class="nav-item ">
    <nuxt-link class="nav-link" id="nav-link" :to="menu.to">{{menu.lien}} </nuxt-link>
  </li>
</ul>
</div>

<form class="form-inline my-2 my-lg-0">
  <div class="dropdown langage">
    <button type="button">
      <nuxt-link to="/" class=" text-white"> Fr </nuxt-link>
    </button> 
    
  </div>
      
               
</form> 

</div>

</nav>
<br>

    </section>
</template>

<script>
    export default{
        name:"NavbarEn",
        data: function (){
        return{
           menus:[
              { 
                lien:'SKILLS',
                to:'#qsj-offset'
              },
              {
                 lien:'EXPERIENCES',
                 to:'#skill-offset',
                },
              {
                lien:'EDUCATION',
                to:'#formation-offset'
              },
              { 
                lien:'LEADERSHIP',
                to:'#leadership-offset'
              },
              { lien:'CONTACTS',
                to:'#contact-offset'
            }
  
           ]
        }
      },
      
      mounted() {
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("nav")
          var nav_classes = navbar.classList
          if(document.documentElement.scrollTop >= 200) {
            if (nav_classes.contains("shrink") === false) {
              nav_classes.toggle("shrink");
            }
          }
          else {
            if (nav_classes.contains("shrink") === true) {
              nav_classes.toggle("shrink");
            }
          }
        })
      })
    },
    }
</script>

<style>

/* nav {
  padding: 1rem;
  transition: all 0.5s;
  background: transparent;
}
nav.shrink {
  padding: 0.3rem;
  width: 99.7%;
  background: rgba(2, 56, 137, 1);
}
    .navbar{
      
        height: 6vw;
        padding-top: 2.25vw;
    }
    .navbar-collapse{
    width: 50vw;
    
  }
  .class-menu{
    flex-direction: row;
    display: flex;
    width:  70%;
    /* padding-left: 2vw; */
    /* margin-top: 0.3vw;
    margin-left: 5vw;
  }
  #nav-link{
    color: #FFFFFF;
    font-weight: 600;
  }
  .navbar-brand .name{
    color: #FFFFFF;
    font-size: 2vw;
    font-weight: 800;
    font-family: 'Roboto',sans-serif;
    margin-left: 6.25vw;
}
.nav-item{
  font-size: 1.2rem;
}
nav form{
  margin-left: 7vw;
}
.langage{
  margin-top: -1.5vw;
}
.langage button{
  font-weight: 600;
  border-radius: 0.3vw;
  background: rgba(2, 56, 137, 1);
  border: 0px; 
} */
/* @media screen and (max-width:768px){
    .navbar-toggler{
    margin-right: 4vw;
    }  
    
    .navbar{
      
      height: 13vw;
      padding-top: 2.25vw;
    }
    nav.shrink {
      padding: 0.7rem;
      background: rgba(2, 56, 137, 1);
    } 
    .navbar-brand .name{
    font-size: 4.7vw;
    margin-left: 1.25vw;
}
} */

</style>