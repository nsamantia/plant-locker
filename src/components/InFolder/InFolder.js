import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SecondFoldersMap from '../SecondFoldersMap/SecondFoldersMap'
import PlantsMap from '../PlantsMap/PlantsMap'
import '../../scss/_in-folder.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


const InFolder = (props) =>{

    const [folders, setFolders] = useState([])
    const [plants, setPlants] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getFolders()
        
    }, [folders])

    useEffect(() => {
        getPlants(props.match.params.category_id)

    }, [plants])

    const getFolders = () => {

            axios.get(`/api/folder/second/${props.match.params.category_id}/?search=${search}`)
            .then(res => setFolders(res.data))

    }

    const getPlants = () => {
        axios.get(`/api/plants/${props.match.params.category_id}`)
        .then(res => setPlants(res.data))
    }


    return(

        <div className="in-folder-container">
            <input type="text" name="search" onChange={(e)=> setSearch(e.target.value)}/>
            <button onClick={() => getFolders()}>Search</button>
            <Link to="/SecondNewFolder"><button>New Folder</button></Link>


            <div>
                {folders.map(e => {
                    return(
                        <SecondFoldersMap
                        folder = {e}
                        category = {e.category}
                        category_id = {e.category_id}
                        category_image = {e.category_image}
                        setFolders = {setFolders}
                        />
                    )
                })}
            </div>

            <div>
                {plants.map(e => {
                    return(
                        <PlantsMap 
                        plants = {e}
                        plant_name = {e.plant}
                        plant_id = {e.id}
                        plant_image = {e.plant_image}
                        setPlants = {setPlants}
                        />
                        
                    )
                })}
            </div>

        </div>

    )
}
const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(InFolder)