import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FoldersMap from '../FoldersMap/FoldersMap'
import PlantsMap from '../PlantsMap/PlantsMap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'




const InFolder = () =>{

    const [folders, setFolders] = useState([])
    const [plants, setPlants] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getFolders()
        
    }, [folders])

    useEffect(() => {
        getPlants()

    }, [plants])

    const getFolders = () => {

            axios.get(`/api/folder/second/?search=${search}`)
            .then(res => setFolders(res.data))

    }

    const getPlants = () => {
        axios.get('/api/plants')
        .then(res => setPlants(res.data))
    }


    return(

        <div>
            <input type="text" name="search" onChange={(e)=> setSearch(e.target.value)}/>
            <button onClick={() => getFolders()}>Search</button>
            <Link to="/NewFolder"><button>New Folder</button></Link>


            <div>
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

            <div>
                {plants.map(e => {
                    return(
                        <PlantsMap 
                        plants = {e}
                        plant_name={e.plant}
                        plant_id={e.id}
                        setPlants={setPlants}
                        />
                        
                    )
                })}
            </div>

        </div>

    )
}
const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(InFolder)