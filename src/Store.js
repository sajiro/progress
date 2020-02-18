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

    fetchData: action(async () => {
        ob.loading = true;
        ob.progData = [];
        await fetch('http://pb-api.herokuapp.com/bars')
        .then(res => res.json())
        .then((data) => {
            ob.bars = data.bars.map(function(val, i){ 
                //console.log(Math.round((val - ob.min) * 100 / (data.limit - ob.min)));
                return {id:i, value: Math.round(val * 100 / (data.limit))}; 
            })
            ob.selected = ob.bars[0].id;
            ob.max = data.limit;
            ob.progData = data;
            ob.loading = false;
        })
        .catch(console.log)
    }),
}


export default { ob, actions }