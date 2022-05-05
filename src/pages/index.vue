<script setup>
import {ref, computed} from 'vue';

import {coffees} from '../composables/useCoffees';

import useCoffees from '../composables/useCoffees.js';

const { buyAgainStatus } = useCoffees();

</script>

<template>
<div class="text-center">
    <div class="bg-red-300 text-center">
        <ul class="flex mx-auto space-x-10 justify-center">
            <li>Brand</li>&emsp; &emsp; &emsp;
            <li>Name</li>&emsp; &emsp; &emsp;
            <li>Roast</li>&emsp; &emsp; &emsp;
            <li>Rating</li>
        </ul>
    </div>
    
    <ul class="flex flex-col">
        <li v-for="coffee in coffees" :key="coffee.id" @click="buyAgainStatus(coffee.id)" class="bg-blue-900 text-white w-full mt-8 p-4 hover:cursor-pointer hover:text-black hover:bg-blue-200">{{ coffee.Brand }} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {{ coffee.Name }} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;{{ coffee.Roast }} &emsp; &emsp; &emsp; &emsp; &emsp;{{ coffee.Rating }}</li>
    </ul>
   </div> 
</template>