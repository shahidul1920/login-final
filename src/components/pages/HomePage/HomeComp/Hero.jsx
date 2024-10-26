import React from 'react'

export default function Hero() {
    return (
        <div
            className="hero min-h-[600px]"
            style={{
                backgroundImage: "url(https://images.hdqwalls.com/download/deadpool-and-wolverine-movie-2024-y5-1920x1080.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Find all world class movies</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Explore More</button>
                </div>
            </div>
        </div>
    )
}
