import React from 'react'
import {generList} from '../utility/constants'

const DropDown = ({handleSelectedGener}) => {
  return (
    <div>
      <select onChange={(e) => handleSelectedGener(e.target.value)}>
        {generList.map(d => (
          <option value={d}>{d}</option>
        ))}
      </select>
    </div>
  )
}

export default DropDown