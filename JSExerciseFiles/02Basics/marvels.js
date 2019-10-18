const myTodos=[]

myTodos.push('Buy Bread')
myTodos.push('Record Vedios for Youtube')
myTodos.push('Go Gym')

myTodos.forEach(function(todo, index){
    console.log(`Your Task no. ${index+1} is: ${todo}`);

})
