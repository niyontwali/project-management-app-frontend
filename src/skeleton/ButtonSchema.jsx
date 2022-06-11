import { FaList } from 'react-icons/fa';

const ButtonSchema = () => {
  return (
    <div>
      <button type="button" className="btn button-size" data-bs-toggle="modal" data-bs-target="#addProjectModal">
          <div className="d-flex align-items-center">
            <FaList className='icon' color='#94a3b8' />
            <div className='schema-name'></div>
          </div>
        </button>
    </div>
  )
}

export default ButtonSchema