import { ref, computed } from 'vue';

export const coffees = ref([]);
export let lNum = 0;
export let mNum = 0;
export let mdNum = 0;
export let dNum = 0;

let totalL = 0;
let totalM = 0;
let totalMD = 0;
let totalD = 0;

export let avglNum = 0;
export let avgmNum = 0;
export let avgmdNum = 0;
export let avgdNum = 0;

export let obj = {};
export let minobj = {};

const useCoffees = () => {
    const testfun = (brand, cname, roast, rating) => {
        coffees.value.push({
            id: coffees.value.length,
            Brand: brand.toUpperCase(),
            Name: cname,
            Roast: roast.toUpperCase(),
            Rating: parseInt(rating),
            buyAgain: false,
        });
        roastNum(roast.toUpperCase(), parseInt(rating));
        obj = coffees.value.reduce((max, coffee) => max.Rating > coffee.Rating ? max : coffee);
        minobj = coffees.value.reduce((min, coffee) => min.Rating < coffee.Rating ? min : coffee);
    };

    const buyAgainStatus = (id) => {
        const coffee = coffees.value.find((coffee) => coffee.id === id);
        coffee.buyAgain = !coffee.buyAgain;
        console.table(coffees.value);
    };

    const buyAgainF = computed(() => {
        return coffees.value.filter(coffee => !coffee.buyAgain)
      })
    
      const buyAgainT = computed(() => {
        return coffees.value.filter(coffee => coffee.buyAgain)
      })

      const roastNum = (roast, rating) => {
        if (roast == 'L'){
            lNum = lNum + 1;
            totalL = totalL + rating
            avglNum = totalL / lNum
        } 
        if (roast == 'M'){
            mNum = mNum + 1;
            totalM = totalM + rating
            avgmNum = totalM / mNum
        }
        if (roast == 'MD'){
            mdNum = mdNum + 1;
            totalMD = totalMD + rating
            avgmdNum = totalMD / mdNum
        }
        if (roast == 'D'){
            dNum = dNum + 1;
            totalD = totalD + rating
            avgdNum = totalD / dNum
        }
    };
     
    return {
        coffees,
        testfun,
        buyAgainStatus,
        buyAgainT,
        buyAgainF,
        roastNum,
        lNum, mNum, mdNum, dNum,
        avglNum, avgmNum, avgmdNum, avgdNum, obj,
        minobj,
    }
};
export default useCoffees;