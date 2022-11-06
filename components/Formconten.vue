<template>
    <div class="contpro">
           
     <!-- DOCTORATE      -->
         <Conproen >
        <template v-slot:date>
            <span>DOCTORATE (PhD)</span>
        </template>
        <template v-slot:annee>
            <span>2011</span>
        </template>
        <template v-slot:matiere>
            <span>In Hydrology and Integrated Water Resources Management</span>
        </template>
        <template v-slot:mention>
            <span>(VERY HONORABLE mention with congratulations from the Jury)</span>
        </template>
    </Conproen>

        <!-- MASTER -->
    <Conproen>
        <template v-slot:date>
            <span>MASTER</span>
        </template>
        <template v-slot:annee>
            <span>2006</span>
        </template>
        <template v-slot:matiere>
            <span>In Water resources and Environment</span>
        </template>
        <template v-slot:mention>
            <span>(MENTION WELL)</span>
        </template>
    </Conproen>

    <!-- DIPLOMA AGRONOMIC -->
    <Conproen>
        <template v-slot:date>
            <span>DIPLOMA OF AGRONOMIC ENGINEER</span>
        </template>
        <template v-slot:annee>
            <span>2004</span>
        </template>
        <template v-slot:matiere>
            <span>Speciality : Hydraulics, Water and Forests, Rural <br> Land planning and Engineering</span>
        </template>
        <template v-slot:mention>
            <span>(Mention VERY WELL with congratulations from the Jury)</span>
        </template>
    </Conproen>

    <!-- BACHELOR’s DEGREE -->
    <Conproen>
        <template v-slot:date>
            <span >BACHELOR’s DEGREE  (DEUPC)</span>
        </template>
        <template v-slot:annee>
            <span>2001</span>
        </template>
        <template v-slot:matiere>
            <span>In Life and Earth Sciences </span>
        </template>
        <template v-slot:mention>
            <span>(Mention well)</span>
        </template>
    </Conproen>

   <!-- BACCALAUREATE -->
    <Conproen>
        <template v-slot:date>
            <span>BACCALAUREATE DEGREE</span>
        </template>
        <template v-slot:annee>
            <span>1998</span>
        </template>
        <template v-slot:matiere>
            <span>“C” SERIES (Mathematics and physical sciences)</span>
        </template>
        <template v-slot:mention>
            <span>(MENTION WELL)</span>
        </template>
    </Conproen>
  
    </div>
   

</template>

<script>
    import Conproen from './Conproen.vue';
    export default{
    name: "Formcont",
    components: { Conproen }
}
</script>

<style>
.contpro{
    width: auto;
}
</style>

