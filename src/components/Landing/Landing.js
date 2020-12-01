import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FoldersMap from '../FoldersMap/FoldersMap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Landing = (props) => {

    const [folders, setFolders] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getFolders()
    }, [folders])


    const getFolders = () => {
        axios.get(`/api/folder/?search=${search}`)
        .then(res => setFolders(res.data))
    }


    return(
        <div>
            
            <input type="text" name="search" onChange={(e)=> setSearch(e.target.value)}/>
            <button onClick={() => getFolders()}>Search</button>
            <Link to="/NewFolder"><button>New Folder</button></Link>

            



        {folders.map(e => {
            return(
                <FoldersMap 
                folder = {e}
                category={e.category}
                category_id={e.category_id}
                setFolders={setFolders}
                
                    
                />
            )
        })}


        </div>
    )


}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Landing)