import { RiLoader4Fill } from "react-icons/ri";

const Spinner = () => {
  return (
    <div className='h-100 bg-transparent pt-5 w-10 m-auto'>
      <RiLoader4Fill className="spinner" size={60} color='#0e7490' />
    </div>
  );
};

export default Spinner;
