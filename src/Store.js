import { observable, action } from 'mobx'

const ob = observable({
    loading : true,
    progData: [],
    bars:[],
    selected: null,
    max:null,
    min:0
})


const actions = {
    incDec: action((value) => {
        console.log(value);
    }),


    fetchData: action(async () => {
        ob.loading = true;
        ob.progData = [];
        await fetch('http://pb-api.herokuapp.com/bars')
        .then(res => res.json())
        .then((data) => {
            /* data.bars.map((item, i) => (
                ob.bars.push({id:i, value: item}) 
            ) */
            ob.bars = data.bars.map(function(val, i){ 
                if (i == 0){

                    console.log("Max /Limit ");
                    console.log(data.limit);
                    console.log("percent locaded " );
                    console.log(val / 100);
    
                    console.log(Math.round((val - ob.min) * 100 / (data.limit - ob.min)));
                }
                return {id:i, value: Math.round(val * 100 / (data.limit))}; 
            })
            ob.selected = ob.bars[0].id;

            ob.max = data.limit;
            ob.progData = data;
            ob.loading = false;
            console.log(data);
            console.log('----');
        })
        .catch(console.log)
    }),
}


export default { ob, actions }