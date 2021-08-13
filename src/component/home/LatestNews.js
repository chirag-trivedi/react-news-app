import React from 'react'
import {Link} from 'react-router-dom'

const showLatest = ({latestData}) => { //custom funcational component
    if(latestData){
        return latestData.map((data) => { // map() calls this code iteratively for every recors in "latestData" array
            return(
                <Link key={data.id} to={`/details/${data.id}`} className="item">
                    <div className="image_cover"
                        style={{background:`url(/images/articles/${data.img})`}}>
                        <div className="description">
                            <span>{data.category}</span>
                            <div>{data.title}</div>
                        </div>
                    </div>
                </Link> 
            )
        })
    }
}

const LatestNews = (props) => {
    return(
        <div className='home-latest'>
            {showLatest(props)}
        </div>
    )
}

export default LatestNews