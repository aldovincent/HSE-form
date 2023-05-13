import React from 'react'
import './grid.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateIcon from '@mui/icons-material/Create';

export default function Grid({handleChange}) {
    return (
        <>
           <table>
                <tr>
                    <th>Actions</th>
                    <th>SL.No</th>
                    <th>Observations</th>
                    <th>Risk Level</th>
                    <th>Action Required</th>
                    <th>Action by</th>
                    <th>Employee code</th>
                    <th>Target date</th>
                </tr>
                <tr>
                    <td><DeleteForeverIcon className='icon1'/><CreateIcon className='icon2'/></td>
                    <td><input type="number" name='SL.No' onChange={handleChange} size={5}/></td>
                    <td><input type="text" name='Observations' onChange={handleChange} /></td>
                    <td><input type="text" name='Risk Level' onChange={handleChange}/></td>
                    <td><input type="text" name='Action Required' onChange={handleChange} /></td>
                    <td><input type="text" name='Action by' onChange={handleChange} /></td>
                    <td><input type="text" name='Employee code' onChange={handleChange}/></td>
                    <td><input type="date" name='Target date' onChange={handleChange}/></td>
                </tr>
                <tr>
                <td><DeleteForeverIcon className='icon1'/><CreateIcon className='icon2'/></td>
                    <td><input type="number" name='SL.No' onChange={handleChange} size={5} /></td>
                    <td><input type="text" name='Observations' onChange={handleChange} /></td>
                    <td><input type="text" name='Risk Level' onChange={handleChange} /></td>
                    <td><input type="text" name='Action Required' onChange={handleChange} /></td>
                    <td><input type="text" name='Action by' onChange={handleChange}/></td>
                    <td><input type="number" name='Employee code' onChange={handleChange} /></td>
                    <td><input type="date" name='Target date' onChange={handleChange}/></td>
                </tr>
            </table>
           
        </>
    )
}
