import React from 'react'

const ProjectBar = (props) => {
    return (
        <div className='ProjectBar' >
            <h2>{props.name}</h2>
            <button>Subscribe</button>
            <button>Follow</button>
        </div>
    )
}

export default ProjectBar