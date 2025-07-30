import React from 'react'
import { Link } from 'react-router-dom'
import { useContainer } from '../context/ContainerContext'

const FrontContainer = () => {
    const { container } = useContainer()
    return (
        <div>
            <div className="p-6 min-h-screen w-full flex flex-col gap-6">
                {container.map((container, key) => {
                    return (
                        <Link to={container.link} key={key}
                        style={{ backgroundImage: `url(${container.image})` }}
                        className="bg-center bg-cover h-50 w-full"  >
                            <div className="h- w-full">
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