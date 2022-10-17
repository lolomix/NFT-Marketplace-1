import React from 'react'
import {FaEthereum} from "react-icons/fa"
import {IoMdArrowDropup, IoMdArrowDropdown} from "react-icons/io"
import {TbEqual} from "react-icons/tb"



export default function Table() {
  return (
    <table className="table text-light table-borderless">
    <thead>
      <tr>
        <th scope="col">Rank</th>
        <th scope="col">Evolution</th>
        <th scope="col">Collection</th>
        <th scope="col">Volume</th>
        <th scope="col">24h%</th>
        <th scope="col">7d%</th>
        <th scope="col">Items</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td style={{color : '#22EE98'}}><IoMdArrowDropup size={20}/>+2</td>
        <td>Alex Perez</td>
        <td><FaEthereum/> 30.000.010</td>
        <td style={{color : '#22EE98'}}><IoMdArrowDropup size={20}/>+24.90%</td>
        <td style={{color : '#22EE98'}}><IoMdArrowDropup size={20}/>+12.67%</td>
        <td>120</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td style={{color : '#22EE98'}}><IoMdArrowDropup size={20}/>+3</td>
        <td>Jane Cooper</td>
        <td><FaEthereum/> 29.232.010</td>
        <td style={{color : '#22EE98'}}><IoMdArrowDropup size={20}/>+24.90%</td>
        <td style={{color : '#FF1515'}}><IoMdArrowDropdown size={20}/>-1.20%</td>
        <td>55</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td style={{color : '#FF1515'}}><IoMdArrowDropdown size={20}/>-2</td>
        <td>Wade Warren</td>
        <td><FaEthereum/> 29.132.000</td>
        <td style={{color : '#FF1515'}}><IoMdArrowDropdown size={20}/>-14.43%</td>
        <td style={{color : '#FF1515'}}><IoMdArrowDropdown size={20}/>-12.20%</td>
        <td>132</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td style={{color : '#FF1515'}}><IoMdArrowDropdown size={20}/>-1</td>
        <td>Camerron Williamson</td>
        <td><FaEthereum/> 28.131.890</td>
        <td style={{color : '#FF1515'}}><IoMdArrowDropdown size={20}/>-1.93%</td>
        <td style={{color : '#FF1515'}}><IoMdArrowDropdown size={20}/>-9.21%</td>
        <td>232</td>
      </tr>
      <tr>
        <th scope="row">5</th>
        <td ><TbEqual size={20}/></td>
        <td>Brookyln Simmons</td>
        <td><FaEthereum/> 28.081.790</td>
        <td style={{color : '#22EE98'}}><IoMdArrowDropdown size={20}/>+2.53%</td>
        <td style={{color : '#FF1515'}}><IoMdArrowDropdown size={20}/>-1.31%</td>
        <td>512</td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td style={{color : '#22EE98'}}><IoMdArrowDropup size={20}/>+2</td>
        <td>Wade Warren</td>
        <td><FaEthereum/> 29.132.000</td>
        <td style={{color : '#22EE98'}}><IoMdArrowDropup size={20}/>+1.43%</td>
        <td style={{color : '#22EE98'}}><IoMdArrowDropup size={20}/>+2.20%</td>
        <td>132</td>
      </tr>
      <tr>
        <th scope="row">7</th>
        <td ><TbEqual size={20}/></td>
        <td>Robert Fox</td>
        <td><FaEthereum/> 28.242.312</td>
        <td style={{color : '#22EE98'}}><IoMdArrowDropup size={20}/>+3.53%</td>
        <td style={{color : '#FF1515'}}><IoMdArrowDropdown size={20}/>-0.31%</td>
        <td>421</td>
      </tr>
      <tr>
        <th scope="row">8</th>
        <td style={{color : '#FF1515'}}><IoMdArrowDropdown size={20}/>-1</td>
        <td>barone LLC</td>
        <td><FaEthereum/> 26.421.890</td>
        <td style={{color : '#FF1515'}}><IoMdArrowDropdown size={20}/>-0.93%</td>
        <td style={{color : '#FF1515'}}><IoMdArrowDropdown size={20}/>-0.21%</td>
        <td>332</td>
      </tr>
    </tbody>
  </table>
  )
}
