import {useState, useEffect} from "react";

const Timer = () => {
    let [timerId, setTimerId] = useState(-1)
    const [tick, setTick] = useState(0);

    useEffect(()=>{
        let id = setInterval(()=> {
            console.log(tick);
            setTick(tick + 1);
        } , 1000);
        setTimerId(id);
        return clearInterval(timerId)
    }, [])


    return <h3>{tick}</h3>
}

export default Timer;