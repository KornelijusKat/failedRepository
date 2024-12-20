import WorksTable from "../worksTable/WorksTable"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import * as service from '../../services/WorksCRUDservices'
const Works = ()=>{
    const [works, setWorks] = useState();
    useEffect(()=>{
        service.getAllWorks(works=>{
            setWorks(works)
        })
    },[])
    
    return(
    <div className="container">
        <ul className="nav nav-gills">
            <li className="nav-item">
                <Link to='/add-work' className="nav-item btn btn-primary">Prideti darba</Link>
            </li>
        </ul>
        <h2>Works</h2>
        <WorksTable data={works}></WorksTable>
    </div>
    )
}
export default Works