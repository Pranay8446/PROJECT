import React from 'react'
import { Link } from 'react-router-dom'
import { useContainer } from '../context/ContainerContext'

const FrontContainer = () => {
    const { container } = useContainer()
    return (
        <div>
            <div className="p-6 min-h-screen w-full flex  flex-col gap-6 md:flex flex-row justify-center gap-6 mt-3 w-1/2 flex-wrap mt-10">
                {container.map((container, key) => {
                    return (
                        <Link to={container.link} key={key}
                        style={{ backgroundImage: `url(${container.image})` }}
                        className="bg-center bg-cover bg-black text-white h-50 w-full  md:w-1/3 "  >
                            <div className="h-10 w-full ">
                                <h2>{container.name}</h2>
                            </div>
                        </Link>
                    )
                })}

            </div>
        </div>
        
    )
}

export default FrontContainer