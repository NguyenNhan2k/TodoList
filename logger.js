import reduce from "./reduce.js";

export default function logger (reduce) {
    return (preState, action, args) => {
        console.group('Action',action)
        console.log('Prestate',preState)
        const nextState = reduce(preState,action,args)
        console.log('Next State: ', nextState)
        console.groupEnd()
        return nextState
    }
}