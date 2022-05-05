<script setup>
import {ref, computed} from 'vue';

import {coffees} from '../composables/useCoffees';

import useCoffees from '../composables/useCoffees.js';

const { buyAgainStatus, buyAgainT, buyAgainF } = useCoffees();

</script>
<template>
    <h1 class="text-xl">Here is a list of coffees you would buy again.<br> To add items here, go to My Coffees and click the ones you would buy again.<br>To remove them from here, click on them here.</h1>
    <div class="text-center">
    <ul class="flex flex-col">
        <li v-for="coffee in buyAgainT" :key="coffee.id" @click="buyAgainStatus(coffee.id)" class="bg-blue-900 text-white w-full mt-8 p-4 hover:cursor-pointer hover:text-black hover:bg-blue-200">{{ coffee.Brand }} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {{ coffee.Name }} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;{{ coffee.Roast }} &emsp; &emsp; &emsp; &emsp; &emsp;{{ coffee.Rating }}</li>
    </ul>
   </div>
</template>