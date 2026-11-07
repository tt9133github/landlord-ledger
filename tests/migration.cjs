const fs = require('fs');
const vm = require('vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync('index.html', 'utf8').split('<script>')[1].split('</script>')[0];
const legacy = {name:'101室',tenant:'老租客',rent:1500,startDate:'2026-01-01'};
const storage = new Map([['house_v5_rooms',JSON.stringify([legacy])],['house_v5_records','[]'],['house_v5_bills','[]']]);
let app;
function boot() {
vm.runInNewContext(source, {Vue:function(config){app=config.data;Object.assign(app,config.methods);for(const [key,get] of Object.entries(config.computed))Object.defineProperty(app,key,{get:()=>get.call(app)});app.$set=(obj,key,value)=>obj[key]=value;config.mounted.call(app);},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},alert:()=>{},console,Date,Set});
}
boot();
assert.equal(app.rooms[0].tenant,'老租客');
assert.equal(JSON.parse(storage.get('house_v5_rooms'))[0].tenant,'老租客');
app.switchProperty('whole');
assert.equal(app.rooms.length,1);
app.rooms[0].tenant='新租客';app.records.push({amount:3000,date:'2026-11-07',title:'整租收入'});
app.persistProperties();app.switchProperty('legacy');
assert.equal(app.rooms[0].tenant,'老租客');assert.equal(app.records.length,0);
boot();app.switchProperty('whole');assert.equal(app.rooms[0].tenant,'新租客');assert.equal(app.totalIncome,3000);
assert.throws(()=>app.validateProperties([{id:'bad'}]));
console.log('PASS: legacy migration, original storage preservation, property isolation, reload, validation');
