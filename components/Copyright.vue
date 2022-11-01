<template>
    <div class="our-names">
              <span class="sign">&copy; 2023 by Likdigit’art.</span>
            </div>
</template>

<script>
  export default {
    name:"Copyright",
  }
</script>

<style>
  .our-names{
    padding: 0.7vw;
    background-color: #E4E3E3;
  }
  .sign{
    font-size: 1.8vw;
    margin-left: 13vw;
  }
  @media screen and (max-width:768px) {
    .our-names{
    padding: 1.4vw;
    background-color: #E4E3E3;
  }
    .sign{
    font-size: 4vw;
    margin-left: 13vw;
  }
  }
</style>