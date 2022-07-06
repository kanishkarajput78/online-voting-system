import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({foorms,deleteform}) => {
    
    return foorms.map(foorm=>(
        
        <tr >
            <td>{foorm.NAME}</td>
            <td>{foorm.LNAME}</td>
            <td>says</td>
            <td>{foorm.COM}</td>
            <td className='delete-btn' onClick={()=>deleteform(foorm.NAME)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
