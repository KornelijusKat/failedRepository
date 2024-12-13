const Work = (props) =>{
    const handleDelete= () => {
        props.deleteWork(props.id);
    }
    return(
        <tr>
            <td>{props.date}</td>
            <td>{props.company}</td>
            <td>{props.service}</td>
            <td>{props.description}</td>
            <td>{props.from}</td>
            <td>{props.to}</td>
            <td>Keisti</td>
            <td><button onClick={handleDelete} className="btn btn-primary"></button> </td>
        </tr>

    )
}
export default Work