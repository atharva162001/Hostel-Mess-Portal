import React from 'react'
import InventoryMapCard from "../../../components/InventoryMapCard"
import Head from 'next/head'

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