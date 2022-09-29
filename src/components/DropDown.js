import React from 'react'
import { generList } from '../utility/constants'

const DropDown = ({ handleSelectedGener }) => {
  return (
    <div>
      <select onChange={(e) => handleSelectedGener(e.target.value)}>
        {generList.map((d, i) => (
          <option key={i} value={d}>{d}</option>
        ))}
      </select>
    </div>
  )
}

export default DropDown