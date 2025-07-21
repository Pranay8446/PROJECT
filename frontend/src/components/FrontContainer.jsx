import React from 'react'
import { Link } from 'react-router-dom'

const FrontContainer = () => {

    const items = [
        {
            "title": "iron door",
            "link": "/iron-doors",
            "image": "https://images.unsplash.com/photo-1518998083755-1a99aadcc419?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "title": "iron window",
            "link": "/iron-windows",
            "image": "https://images.unsplash.com/photo-1518998083755-1a99aadcc419?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "title": "iron stair",
            "link": "/iron-stairs",
            "image": "https://images.unsplash.com/photo-1518998083755-1a99aadcc419?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "title": "iron shade",
            "link": "/iron-shades",
            "image": "https://images.unsplash.com/photo-1518998083755-1a99aadcc419?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]


    return (
        <div>
            <div className="p-6 min-h-screen w-full flex flex-col gap-6">
                {items.map((item, key) => {
                    return (
                        <Link to={item.link} key={key}
                        style={{ backgroundImage: `url(${item.image})` }}
                        className="bg-center bg-cover h-50 w-full"  >
                            <div className="h- w-full">
                                <h2>{item.title}</h2>
                            </div>
                        </Link>
                    )
                })}

            </div>
        </div>
        
    )
}

export default FrontContainer