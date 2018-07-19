function main() {
   let state={title:"a"};
   let b = function () {
       return state;
   }

   function dispatch(parms) {
      if (parms.isTrue) {
         state.title="new content";
      }
   }
   return {b,dispatch}
}

let store = main();

console.log(store.b());

setTimeout(function () {
   store.dispatch({isTrue:1})
   console.log(store.b());
},1000)



