// export const incNumber = () => {type: "INCREMENT"}

// export const decNumber = () => { type: "DECREMENT"}

export const incNumber = (num) =>{
    return{
        type: "INCREMENT",
        payload: num
    }
}

export const decNumber = (num) => {
    return{
        type: "DECREMENT",
        payload: num
    }
}