import React , {useEffect,useState} from 'react'



const UseEffect2 = () => {

    const [widthCount, setWidthCount ] = useState(window.screen.width);

    const actualWidth = () => {
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth)
    }

    useEffect(() => {
        console.log("Add Event")
        window.addEventListener("resize" ,actualWidth);

        return () => {
            console.log();
            window.removeEventListener("resize",actualWidth)
        }
    });

    return (
        <div>
            <p> Size of Window </p>
            <h1>{widthCount}</h1>
        </div>
    )
}

export default UseEffect2
