import React from 'react'
import './styles.css'
import HeroCities from '../../components/HeroCities';
import Search from '../../components/Search';
import GroupCards from '../../components/GroupCards';
import 'bootstrap/dist/css/bootstrap.min.css';

function index() {
  return (
    <main>
      <div className="containerCity">
        <HeroCities />
        </div>  
        <Search />
        <GroupCards />
    </main>
  )
}

export default index