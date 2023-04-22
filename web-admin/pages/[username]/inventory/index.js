import React from 'react'
import InventoryMapCard from "../../../components/Inventory/InventoryMapCard"
import Head from 'next/head'
import SideNavbar from '../../../components/snavbar'

function index() {
  return (
    <div>
      {/* <h1>Inventory</h1> */}
      <Head>Inventory Management</Head>
      <InventoryMapCard></InventoryMapCard>
    </div>
  )
}

export default index