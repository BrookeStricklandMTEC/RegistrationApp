export const DAYS = ["Sun","Mon","Tue","Thur","Fri","Sat"]

export const range = (end) => {
    const {result} = Array.from({length: end}).reduce(({result, current}) => ({
        result: [...result, current],
        current: current + 1 

    }), {reuslt: [], current:1})

    return result
}