<script setup>
import {ref, computed} from 'vue';

import {coffees} from '../composables/useCoffees';

import useCoffees from '../composables/useCoffees.js';
const { lNum, mNum,mdNum,dNum,avglNum, avgmNum, avgmdNum, avgdNum, obj, minobj } = useCoffees();

</script>
<template>
    <div class="text-center">
        <div class="bg-black text-white mt-10 rounded-full">
            <h1>Roast Count</h1>
        </div>
    <ul class="flex justify-between mt-3">
        <li class="bg-yellow-500 p-4 rounded-2xl"><span class="text-xl">Light Roasts</span><br>{{lNum}}</li>
        <li class="bg-yellow-600 p-4 rounded-2xl"><span class="text-xl">Medium Roasts</span><br>{{mNum}}</li>
        <li class="bg-yellow-800 p-4 rounded-2xl"><span class="text-xl">Medium-Dark Roasts</span><br>{{mdNum}}</li>
        <li class="bg-stone-800 p-4 rounded-2xl text-white"><span class="text-xl">Dark Roasts</span><br>{{dNum}}</li>
    </ul>
    <div class="bg-black text-white mt-10 rounded-full">
            <h1>Roast Averages</h1>
        </div>
    <ul class="flex justify-between mt-3">
        <li class="bg-yellow-500 p-4 rounded-2xl"><span class="text-xl">Light Roasts</span><br>{{ avglNum.toFixed(2) }}</li>
        <li class="bg-yellow-600 p-4 rounded-2xl"><span class="text-xl">Medium Roasts</span><br>{{ avgmNum.toFixed(2) }}</li>
        <li class="bg-yellow-800 p-4 rounded-2xl"><span class="text-xl">Medium-Dark Roasts</span><br>{{ avgmdNum.toFixed(2) }}</li>
        <li class="bg-stone-800 p-4 rounded-2xl text-white"><span class="text-xl">Dark Roasts</span><br>{{ avgdNum.toFixed(2) }}</li>
    </ul>
    <div class="bg-black text-white mt-10 rounded-full">
            <h1>Highest Rated 🏆</h1>
        </div>
        <ul class="flex justify-between mt-3">
        <li class="bg-yellow-400 p-4 rounded-2xl"><span>{{ obj.Brand }} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {{ obj.Name }} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;{{ obj.Roast }} &emsp; &emsp; &emsp; &emsp; &emsp;{{ obj.Rating }}</span></li>
    </ul>

    <div class="bg-black text-white mt-10 rounded-full">
            <h1>Lowest Rated</h1>
        </div>
        <ul class="flex justify-between mt-3">
        <li class="bg-red-400 p-4 rounded-2xl"><span>{{ minobj.Brand }} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {{ minobj.Name }} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;{{ minobj.Roast }} &emsp; &emsp; &emsp; &emsp; &emsp;{{ minobj.Rating }}</span></li>
    </ul>
   </div>
</template>