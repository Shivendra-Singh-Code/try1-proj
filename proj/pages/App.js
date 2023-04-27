const proabi=[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_proid",
				"type": "uint256"
			},
			{
				"name": "_proname",
				"type": "string"
			},
			{
				"name": "_currentState",
				"type": "string"
			},
			{
				"name": "_souadd",
				"type": "string"
			},
			{
				"name": "_desadd",
				"type": "string"
			},
			{
				"name": "_role",
				"type": "string"
			}
		],
		"name": "create_prod",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_proid",
				"type": "uint256"
			}
		],
		"name": "get_prodata",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_proid",
				"type": "uint256"
			},
			{
				"name": "j",
				"type": "uint256"
			}
		],
		"name": "get_prostates",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_proid",
				"type": "uint256"
			},
			{
				"name": "_currentState",
				"type": "string"
			},
			{
				"name": "_desadd",
				"type": "string"
			},
			{
				"name": "_role",
				"type": "string"
			}
		],
		"name": "updatestate",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "prodata",
		"outputs": [
			{
				"name": "proid",
				"type": "uint256"
			},
			{
				"name": "proname",
				"type": "string"
			},
			{
				"name": "totalStates",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

const address="0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"