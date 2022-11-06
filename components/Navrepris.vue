<template>
  <section class="container-fluid">
     <nav class="nav-menu">
  
    

 
  <a class="navbar-brand" href="#"><b class="name">Dr Arnaud Yémalin ZANNOU</b></a>
  <span class="fa-bars" @click="showMenu()"><img  src="../assets/navb.svg" alt=""></span>
 <!-- // Hamburger icon with click method -->
<div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"> 

<!-- // Menu content -->
    <ul v-for="menu in menus" v-bind:key="menu.lien" class="navbar-nav mx-auto">
  <li class="nav-item ">
    <nuxt-link class="text-white nav-link" id="nav-link" :to="menu.to">{{menu.lien}} </nuxt-link>
  </li>
</ul>

<div class="langage-button">
    <nuxt-link to="/" class=" text-white"> En </nuxt-link>
</div>
</div>

  </nav>
  </section>
 
</template>

<script>
    export default{
        name:"Navrepris",
        data: function (){
        return{
          showMobileMenu: false,
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
      methods: {
      showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
      },
      },
    }
</script>

<style>
.container-fluid{
  background: rgba(2, 56, 137, 1)
}
.navbar-nav{
    /* border: 1px solid black; */
    margin-left: -3vw;
    padding-right: 2vw;
    height: 5vw;
}

.navbar-brand{
  margin-top: 1.7vw;
}
.navbar-brand .name{
    color: #FFFFFF;
    font-size: 2.1vw;
    font-weight: 800;
    line-height: 3vw;
    border: 1px solid black;
    font-family: 'Roboto',sans-serif;
    margin-left: 7.25vw;
}
.fa-bars{
  display: none;
}
    .nav-menu {
        background-color: transparent;
        border: 1px solid black;
}
.nav-content {
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: 0%;
margin-top: -3.3vw;
margin-left: 44vw;
font-size: 1.3vw;
align-items: center;border: 1px solid black;
}
.nav-items {
display: flex;
justify-content: flex-start;
align-items: flex-start;
list-style: none;

padding: 0;
}
.langage-button{
  margin-left: 5vw;
  margin-top: -2.4vw;
}
li {
padding: 0px;
}

/* // Mobile version - hidden hamburger menu */
@media screen and (max-width: 768px) {
  .reprise{
  height: 14vw;
}
.nav-menu {
padding-top: 1vw;
position: absolute;
width: auto;
}
.navbar-brand .name{
    font-size: 4.7vw;
    margin-left: 3vw;
}
.fa-bars{
  display: block;
  /* float: right; */
  margin-left: 85vw;
  margin-top: -1vw;
}
.open-menu {
opacity: 1;
height: 150px;
}
.closed-menu {
opacity: 0;
height: 0;
padding: 0;
}
.nav-content {
flex-direction: column;
z-index: 100;
font-size: 3vw;
position: relative;
transition: all 0.2s ease-out;
}
.nav-items {
flex-direction: column;
}
i {
display: block;
text-align: right;
padding: 0 10px 10px 0;
}
}
</style>