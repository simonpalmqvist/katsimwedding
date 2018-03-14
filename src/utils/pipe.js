export default (...funs) => x => funs.reduce((updX, f) => f(updX), x)  
