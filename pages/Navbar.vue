<template>
    <section>
        <nav class="navbar navbar-expand-lg fixed-top   " id="nav">

<a class="navbar-brand" href="#"><b class="name">Dr Arnaud Yémalin ZANNOU</b></a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

<span><img src="../assets/navb.svg" alt=""></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <!-- ***menu*** -->
<ul  v-for="menu in menus" v-bind:key="menu.lien" class="navbar-nav mx-auto">
  <li class="nav-item ">
    <nuxt-link class="nav-link" id="nav-link" :to="menu.to">{{menu.lien}} </nuxt-link>
  </li>
</ul>
</div>

<form class="form-inline my-2 my-lg-0">
  <div class=" langage">
    <button type="button" >
      <nuxt-link class=" text-white" to="/English">En</nuxt-link>
    </button> 
   
  </div>
      
</form> 

</nav>

    </section>
</template>

<script>
    export default{
        name:"Navbar",
        data: function (){
        return{
          showMobileMenu: false,
           menus:[
              { 
                lien:'COMPÉTENCES',
                to:'#qsj-offset'
              },
              {
                 lien:'EXPÉRIENCES',
                 to:'#skill-offset',
                },
              {
                lien:'FORMATION',
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
      methods: {
      showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
      },
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

nav {
  padding: 1rem;
  transition: all 0.5s;
  /* background: transparent; */
  background: rgba(2, 56, 137, 1);
}
nav.shrink {
  padding: 0.3rem;
  width: 99.7%;
  background: rgba(2, 56, 137, 1);
}
    .navbar{
        width: auto;
        height: 6vw;
        padding-top: 2.25vw;
    }
    .navbar-collapse{
    width: 39vw;
    
  }
  .class-menu{
    flex-direction: row;
    display: flex;
    /* width:  70%; */
    width: auto;
    font-size: 1.2vw;
    margin-top: 0.3vw;
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
  

}
nav form{
  margin-left: 6vw;
}
.langage{
  margin-top: -1.5vw;
}
.langage button{
  font-weight: 600;
  border-radius: 0.3vw;
  background: rgba(2, 56, 137, 1);
  border: 0px;
}
@media screen and (max-width:768px){
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
    font-size: 4.5vw;
    margin-left: 1.25vw;
}
}
</style>