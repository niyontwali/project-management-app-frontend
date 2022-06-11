import React from 'react'
import { FaTrash } from 'react-icons/fa'

const TableSchema = () => {
  return (
    <div>
      <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th><p className='table-head skeleton'></p></th>
              <th><p className='table-head skeleton'></p></th>
              <th><p className='table-head skeleton'></p></th>
              <th><p className='table-head skeleton'></p></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><p className='table-head skeleton'></p></td>
            <td><p className='table-head skeleton'></p></td>
            <td><p className='table-head skeleton'></p></td>
            <td>
              <FaTrash className='mb-1 icon' color='#e2e8f0'/>
            </td>
          </tr>
          <tr>
            <td><p className='table-head skeleton'></p></td>
            <td><p className='table-head skeleton'></p></td>
            <td><p className='table-head skeleton'></p></td>
            <td>
              <FaTrash className='mb-1 icon' color='#e2e8f0'/>
            </td>
          </tr>
          <tr>
            <td><p className='table-head skeleton'></p></td>
            <td><p className='table-head skeleton'></p></td>
            <td><p className='table-head skeleton'></p></td>
            <td>
              <FaTrash className='mb-1 icon' color='#e2e8f0'/>
            </td>
          </tr>
          </tbody>

        </table>
    </div>
  )
}

export default TableSchema