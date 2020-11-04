export const createNewArray = (length, maxHeight) => {
    let heightBars = []
    
    for (let index = 0; index < length; index++) {
        heightBars.push(getRandomHeight(maxHeight))
    }

    return heightBars
}

const getRandomHeight = height => {
    const minHeight = Math.floor(height * .10)
    const maxHeight = Math.floor(height - minHeight)
    
    return Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight
}