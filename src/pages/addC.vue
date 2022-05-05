<script setup>
    import {ref, computed} from 'vue';

    import useCoffees from '../composables/useCoffees.js';

    const { testfun } = useCoffees();

    const brand = ref("");
    const cname = ref("");
    const roast = ref("");
    const rating = ref("");
    
</script>

<template>
<div class="text-xl">
    <p>Here is where you will add a coffee to your list. Enter all the criteria and it will be added to the My Coffees page.</p>
</div>
<div class="container flex  mx-auto items-center mt-10 space-y-4 justify-between">
    <div class="w-1/3 bg-orange-300 rounded-lg">
    <h1 class="text-xl text-center">LEGEND</h1>
    <br>
    <p>The roast will typically be found on the package. There are 4 types of roasts- Light, Medium, Medium-Dark, and Dark.<br>
    Enter:<br>
    L for Light Roast<br>M for Medium Roast<br>MD for Medium Dark Roast<br>D for Dark Roast<br></p>
    </div>
    <div class="w-1/2 flex flex-col">
    <h1>Enter the Brand name: </h1>
    <input placeholder="ex. Starbucks, Cafe Ole, Folgers, Green Mountain" class="ml-4 w-1/2 text-center" v-model="brand" type="text">
    <h1>Enter the Name: </h1>
    <input placeholder="ex. Rush Hour Roast" class="ml-4 w-1/2 text-center" v-model="cname" type="text">
    <h1>Enter the Roast (See LEGEND for instructions): </h1>
    <input placeholder="L,M,MD,D" class="ml-4 w-1/2 text-center" v-model="roast" type="text">
    <h1>Enter Rating: </h1>
    <input placeholder="Rate the coffee on a scale of 1-10" class="ml-4 w-1/2 text-center" v-model="rating" type="text">
    <button class="bg-slate-500 w-1/5 rounded-xl mt-3" @click="testfun(brand, cname, roast, rating)">Add a coffee</button>
    </div>
</div>
</template>