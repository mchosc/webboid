import { initAccessContext } from 'eos-transit'
import scatter from 'eos-transit-scatter-provider'
import keycat from 'eos-transit-keycat-provider'
import ledger from 'eos-transit-ledger-provider'
import { Keycat } from 'keycatjs'

function err(error){
  console.error(error)
}

import { Api, JsonRpc } from "eosjs"

const rpc = new JsonRpc('https://eos.greymass.com:443');
window.transit = {}

async function getTotalStake(account) {
  try {
    let res = await rpc.get_table_rows({
      json: true,
      code: 'boidcomtoken',
      scope: account,
      table: "staked",
      limit: 10000
    })
    const userTotalStaked = res.rows.reduce((acc,el) => parseFloat(el.quantity) + acc ,0)
    return userTotalStaked
  } catch(error) {
    console.log(error)
    return undefined
  }
}

async function getTotalDelegated(account) {
  try {
    let res = await rpc.get_table_rows({
      json: true,
      code: 'boidcomtoken',
      scope: account,
      table: "delegation",
      limit: 10000
    })
    console.log(res)
    const userTotalStaked = res.rows.reduce((acc,el) => parseFloat(el.quantity) + acc ,0)
    console.log(userTotalStaked)
    return userTotalStaked
  } catch(error) {
    console.log(error)
    return undefined
  }
}



async function init(){
  
  
  window.eosjs = {rpc,getTotalStake,getTotalDelegated}


  // var accessContext
  // try {
  //   accessContext = initAccessContext({
  //     appName: 'app.boid.com',
  //     network: {
  //       blockchain:'eos',
  //       host:'eos.greymass.com',
  //       port:443,
  //       protocol:'https',
  //       chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
  //     },
  //     walletProviders: [
  //       scatter(),
  //       keycat()      ]
  //   })
  // } catch (error) {
  //   err(error)
  // }

  // window.transit.initWallet = async (providerName) => {
  //   try {
  //     providerName = providerName.toLowerCase() 
  //     const providers = accessContext.getWalletProviders()
  //     console.log(providers)
  //     const selected = providers.find(el => el.id.toLowerCase() === providerName)
  //     if (!selected) throw('Invalid Wallet Provider')
  //     const wallet = accessContext.initWallet(selected)

  //     await wallet.connect()
  //     await wallet.login()
  //   } catch (error) {
  //     if (!error.message) error = {message:error}
  //     alert(error.message)
  //   }
  // }

  // window.transit.initWallet('keycat') 

  // const wallet = accessContext.initWallet(window.transit.walletProviders[1])
  // await wallet.connect()
  // let discoveryData = await wallet.discover({ pathIndexList: [ 0,1,2,3 ] })
  // if (discoveryData.keyToAccountMap.length > 0) {
  //   // Let the user choose an account here
  //   // await wallet.login(accountName, authorization) 
  // } else { await wallet.login() }
  // window.transit = {wallet}
  // return wallet
}

// init().catch(err)
module.exports = init