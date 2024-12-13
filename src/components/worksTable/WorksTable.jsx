import Work from "../work/Work";
import * as service from '../../services/WorksCRUDservices'
const WorksTable = (props) =>{
    return(
        <table className="table table-bordered table-striped">
            <thead>
                <th>Data</th>
                <th>Klientas</th>
                <th>Suteikta Paslauga</th>
                <th>Aprasymas</th>
                <th>Nuo</th>
                <th>Iki</th>
                <th>Keisti</th>
                <th>Salinti</th>
            </thead>
            <tbody>
                {props.data?.map(work=><Work
                id = {work.id}
                date = {work.date}
                company = {work.company}
                service = {work.service}4
                description = {work.description}
                from = {work.from}
                to = {work.to}
                deleteWork = {service.deleteWork}
                />)}
            </tbody>
        </table>
    )
}

export default WorksTable;