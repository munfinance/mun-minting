// TODO replace this for the mainnet addresses these are ropsten contracts
export default {
	munAddress: '0xE0A27468A58EFE8097952127F632825C0c55316B',
	musAddress: '0xd73E750b855919aeC7D07773e40F52bF45CeB5e8',
	nftManager: '0xD8570298e3F48e2C73C459f68f22f2c0F5b2c1cE',
	lockLiquidity: '0x8BD3a82f24D98418C3176AaA7F2A31059Ad9761d',
	munAbi: [
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'Approval',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'Fee',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'previousOwner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'OwnershipTransferred',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'Transfer',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: '_balances',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
			],
			name: 'allowance',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'approve',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'balanceOf',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'decimals',
			outputs: [
				{
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'subtractedValue',
					type: 'uint256',
				},
			],
			name: 'decreaseAllowance',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'addedValue',
					type: 'uint256',
				},
			],
			name: 'increaseAllowance',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'isFrozen',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'lockLiquidityContract',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'name',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'renounceOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'symbol',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'totalSupply',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'recipient',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'transfer',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'transferFee',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'recipient',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'transferFrom',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'transferOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_lockLiquidityContract',
					type: 'address',
				},
			],
			name: 'setLockLiquidityContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_account',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'burn',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'extractETHIfStuck',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'extractTokenIfStuck',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_of',
					type: 'address',
				},
			],
			name: 'freezeTokens',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_of',
					type: 'address',
				},
			],
			name: 'unFreezeTokens',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_fee',
					type: 'uint256',
				},
			],
			name: 'changeFee',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
	musAbi: [
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'Approval',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'previousOwner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'OwnershipTransferred',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'Transfer',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: '_balances',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
			],
			name: 'allowance',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'approve',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'balanceOf',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'decimals',
			outputs: [
				{
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'subtractedValue',
					type: 'uint256',
				},
			],
			name: 'decreaseAllowance',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'addedValue',
					type: 'uint256',
				},
			],
			name: 'increaseAllowance',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'isFrozen',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'name',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'nftManager',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'renounceOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'symbol',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'totalSupply',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'recipient',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'transfer',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'recipient',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'transferFrom',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'transferOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_nftManager',
					type: 'address',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_nftManager',
					type: 'address',
				},
			],
			name: 'setManager',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'mint',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_account',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'burn',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'extractETHIfStuck',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'extractTokenIfStuck',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_of',
					type: 'address',
				},
			],
			name: 'freezeTokens',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_of',
					type: 'address',
				},
			],
			name: 'unFreezeTokens',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
	nftManagerAbi: [
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'approved',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
			],
			name: 'Approval',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: 'approved',
					type: 'bool',
				},
			],
			name: 'ApprovalForAll',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'previousOwner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'OwnershipTransferred',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
			],
			name: 'Transfer',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'amountStaked',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
			],
			name: 'approve',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
			],
			name: 'balanceOf',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'baseURI',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			name: 'blueprintExists',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'blueprints',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
			],
			name: 'getApproved',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
			],
			name: 'isApprovedForAll',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'lastId',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'mintedTokenIds',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'mun',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'mus',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'myTokenURI',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'name',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'oneDayInBlocks',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
			],
			name: 'ownerOf',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'renounceOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
			],
			name: 'safeTransferFrom',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: '_data',
					type: 'bytes',
				},
			],
			name: 'safeTransferFrom',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					internalType: 'bool',
					name: 'approved',
					type: 'bool',
				},
			],
			name: 'setApprovalForAll',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'interfaceId',
					type: 'bytes4',
				},
			],
			name: 'supportsInterface',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'symbol',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'timeStaked',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'index',
					type: 'uint256',
				},
			],
			name: 'tokenByIndex',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'index',
					type: 'uint256',
				},
			],
			name: 'tokenOfOwnerByIndex',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
			],
			name: 'tokenURI',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'tokenURIs',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'totalSupply',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
			],
			name: 'transferFrom',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'transferOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_mun',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_mus',
					type: 'address',
				},
				{
					internalType: 'string',
					name: 'baseUri_',
					type: 'string',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_mun',
					type: 'address',
				},
			],
			name: 'setMUN',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_mus',
					type: 'address',
				},
			],
			name: 'setMUS',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: 'baseURI_',
					type: 'string',
				},
			],
			name: 'setBaseURI',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: '_tokenURI',
					type: 'string',
				},
				{
					internalType: 'uint256',
					name: '_maxMint',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_munCost',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_musCost',
					type: 'uint256',
				},
			],
			name: 'createBlueprint',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'stakeMUN',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getTokenURIs',
			outputs: [
				{
					internalType: 'string[]',
					name: '',
					type: 'string[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'receiveMUS',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getGeneratedMUS',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'unstakeMUNAndReceiveMUS',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: '_tokenURI',
					type: 'string',
				},
			],
			name: 'safeMint',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_id',
					type: 'uint256',
				},
			],
			name: 'breakCard',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'extractTokensIfStuck',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'extractETHIfStruck',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: '_tokenURI',
					type: 'string',
				},
			],
			name: 'getBlueprint',
			outputs: [
				{
					internalType: 'uint256[4]',
					name: '',
					type: 'uint256[4]',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
	],
}
