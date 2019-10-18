let myTodos={
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

}

let addMeeting =function(todo, meet=0){
    todo.meetings=todo.meetings+meet
}

let meetDone=function(todo, meet=0){
    todo.meetDone=todo.meetDone-1
}

let resetDay = function(todo){
    todo.meetings =0
    todo.meetDone=0
}

let getSummaryofDay= function(todo){
    let meetLeft=todo.meetings-todo.meetDone
    return `You Have ${meetLeft} of meetings today!`
}

addMeeting(myTodos,4)

addMeeting(myTodos, 2)

meetDone(myTodos)