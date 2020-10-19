const choice = (foods) => {
    const arr = foods[Math.floor(Math.random() * foods.length)] 
    return arr
}

const remove = (foods, item) => {
    const index = foods.indexOf(item)
    if(index !== -1){
        foods.splice(index, 1)
        return foods
    }else{
        return undefined
    }
}

export {choice, remove}