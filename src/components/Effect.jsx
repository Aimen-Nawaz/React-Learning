import { useEffect, useState } from "react";

const Effect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000);
    },[])

    return (
        <div style={{ minHeight: "100vh" }}>
            <h1>I've rendered {count} times!</h1>
        </div>
    )
}

export default Effect