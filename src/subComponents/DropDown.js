import { generList } from '../utility/constants';

const DropDown = ({handleSelectedGener}) => {
  return (
    <div className='w-6/12'>
      <select 
        onChange={(e) => handleSelectedGener(e.target.value)} 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 h-[42px] outline-0"
      >
        {generList.map(d => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
    </div>
  )
}

export default DropDown;
