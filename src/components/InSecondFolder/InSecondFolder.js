import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FoldersMap from '../FoldersMap/FoldersMap'
import PlantsMap from '../PlantsMap/PlantsMap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'




const InSecondFolder = (props) =>{

    const [plants, setPlants] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getPlants(props.match.params.category_id)

    }, [plants])

    const getPlants = () => {
        axios.get(`/api/plants/${props.match.params.category_id}`)
        .then(res => setPlants(res.data))
    }


    return(

        <div>
            <input type="text" name="search" onChange={(e)=> setSearch(e.target.value)}/>
            <button onClick={() => getPlants()}>Search</button>
            

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

export default connect(mapStateToProps)(InSecondFolder)