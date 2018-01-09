/**
 * TODO: get rid of all of this. All account/transaction related data sould be mined and
 * obtained from OUR serverside collections.
 * 
 */

import axios from "axios";
const key ='E9MYVKUN5TNUBH6P4E5IWEUHAXGZCXQSNV'
const baseurl ='https://api.etherscan.io/api?module=account&'
/**
 * get Exchange from cryptocompare the default type is USD
 */
const url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=";
export const GetExchange = (type = "USD") => {
  let final = url + type;

  return axios
    .get(final)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};



const balanceUrl =
  `https://api.etherscan.io/api?module=account&action=balance&tag=latest` +
  `&apikey=${key}`;
/**
 * 
 * @param {*} address 
 */
export const GetBalance = address => {
  let final = balanceUrl + `&address=${address}`;
  return PrivateFetch(address, final);
};


/**
 * 
 * @param {*} address 
 */
export const GetTranactions = address => {
  //let final = tranactionsUrl + `&address=${address}`
  let startblock=1
  let endblock=99999999999
  let tranactionsUrl = baseurl +
		`action=txlist&address=${address}&startblock=${startblock}` +
    `&endblock=${endblock}&sort=asc&apiKey=${key}`;
    console.log('tran'+JSON.stringify(tranactionsUrl))
  return PrivateFetch(address, tranactionsUrl);
};

/**
 * 
 * @param {*} address 
 * @param {*} url 
 */
const PrivateFetch = (address, url) => {
  let final = url ;

  return axios
    .get(final)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error;
    });
};



const QUERY_CURRENT_BLOCK = 'http://api.etherscan.io/api?' +
	'module=proxy&action=eth_blockNumber' +
	`&apikey=${key}`

/**
 * Query API for the current head block.
 *    "base_url": "http://api.etherscan.io/api?",
            "api_key": "E9MYVKUN5TNUBH6P4E5IWEUHAXGZCXQSNV"
 */
const getCurrentBlock = () => {
	return axios
		.get(QUERY_CURRENT_BLOCK)
		.then((response) => {
			response.data.result = parseInt(response.data.result, 16)
			return response
		})
}