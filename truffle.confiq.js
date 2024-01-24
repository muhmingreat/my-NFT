// require('babel-register)
// require('babel-polyfill)

require('dotenv').config()
const HDWallet = require('@truffle/hdwallet-provider')

module.exports ={
    networks:{
        deveploment:{
            host: '127.0.0.1',
            port: '8545',
            network_id: '*' //marcth any network
        }
    },
    contracts_directory: './src/contracts',
    contract_build_directory: './src/abi',
    compilers:{
        solc:{
            version: '0.0.11',
            optimizer:{
                enable: true,
                runs200,
            }
        }
    }
    
}