import { useState } from "react";
import * as service from '../../services/firebasesometing.js'
import { useNavigate} from 'react-router-dom'
const AddWork = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        date:'',
        company:'',
        service:'',
        description:'',
        from:'',
        to:''
    });
    const handleChange = (e) =>{
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
        console.log(formData)
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        service.addWork(formData)
    }

    return(
        <div className="card">
            <div className="card-header">Prideti atlikta darba</div>
            <div className="card-body">
                <form className="form" onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="date">Pasirinkite data</label>
                        <input type="date" name='date' className="form-control" onChange={handleChange} value={formData.date} />
                    </div>
                    <div className="mb-3">
                        <select name="service" className="form-control" onChange={handleChange} defaultValue={formData.service}>
                            <option selected value="Pasirinkite paslauga"></option>
                            <option value='dev'>Development</option>
                            <option value="ux">UX Research</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <textarea name="description" className="form-control" onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="from">From</label>
                        <input type="time" name="from" className="form-control" onChange={handleChange} value={formData.from} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="to">To</label>
                        <input type="time" name="to" className="form-control" onChange={handleChange} value={formData.to} />
                    </div>
                    <button type="submit" className="btn btn-primary">Saugoti</button>
                </form>
            </div>
           
        </div>
    )
}
export default AddWork