import React from 'react'
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import {Link} from "react-router-dom"

const Feed = () => {
  const videoname = "text-md font-semibold w-full px-3"
  const channel = "text-sm w-full px-3"
  const views ='text-[13px] px-3 w-full'
  return (
    <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-3 2xl:grid-cols-3">
        <div  className="min-w-0">
          <Link to={`video/20/152`}>
            <img className="aspect-video w-full rounded-xl object-cover" src={thumbnail1} alt="" />
            <h2 className={videoname}>Best Codiing Tutorial</h2>
            <h3 className={channel}>CodeHash</h3>
            <p className={views}>30k views 2days ago</p> 
            </Link>
        </div>
         <div className="min-w-0">
            <img className="aspect-video w-full rounded-xl object-cover" src={thumbnail2} alt="" />
            <h2 className={videoname}>Best Codiing Tutorial</h2>
            <h3  className={channel}>CodeHash</h3>
            <p className={views}>30k views 2days ago</p>
        </div>
         <div className="min-w-0">
            <img className="aspect-video w-full rounded-xl object-cover" src={thumbnail3} alt="" />
            <h2 className={videoname}>Best Codiing Tutorial</h2>
            <h3 className={channel}>CodeHash</h3>
            <p className={views}>30k views 2days ago</p>
        </div>
         <div className="min-w-0">
            <img className="aspect-video w-full rounded-xl object-cover" src={thumbnail4} alt="" />
            <h2 className={videoname}>Best Codiing Tutorial</h2>
            <h3 className={channel}>CodeHash</h3>
            <p className={views}>30k views 2days ago</p>
        </div>
         <div className="min-w-0">
            <img className="aspect-video w-full rounded-xl object-cover" src={thumbnail5} alt="" />
            <h2 className={videoname}>Best Codiing Tutorial</h2>
            <h3 className={channel}>CodeHash</h3>
            <p className={views}>30k views 2days ago</p>
        </div>
         <div className="min-w-0">
            <img className="aspect-video w-full rounded-xl object-cover" src={thumbnail6} alt="" />
            <h2 className={videoname}>Best Codiing Tutorial</h2>
            <h3 className={channel}>CodeHash</h3>
            <p className={views}>30k views 2days ago</p>
        </div>
         <div className="min-w-0">
            <img className="aspect-video w-full rounded-xl object-cover" src={thumbnail7} alt="" />
            <h2 className={videoname}>Best Codiing Tutorial</h2>
            <h3 className={channel}>CodeHash</h3>
            <p className={views}>30k views 2days ago</p>
        </div>
         <div className="min-w-0">
            <img className="aspect-video w-full rounded-xl object-cover" src={thumbnail8} alt="" />
            <h2 className={videoname}>Best Codiing Tutorial</h2>
            <h3 className={channel}>CodeHash</h3>
            <p className={views}>30k views 2days ago</p>
        </div>
    </div>
  )
}

export default Feed
