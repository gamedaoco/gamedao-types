import type { RegistryTypes } from '@polkadot/types/types'

export const gamedao: RegistryTypes = {
	Body: {
		id: 'Hash',
		index: 'u128',
		creator: 'AccountId',
		name: 'Vec<u8>',
		cid: 'Vec<u8>',
		body: 'u8',
		created: 'BlockNumber',
		mutated: 'BlockNumber',
	},
	BConfig: {
		fee_model: 'u8',
		fee: 'Balance',
		gov_asset: 'u8',
		pay_asset: 'u8',
		member_limit: 'u64',
		access: 'u8',
	},

	Campaign: {
		id: 'Hash',
		org: 'Hash',
		name: 'Vec<u8>',
		owner: 'AccountId',
		admin: 'AccountId',
		deposit: 'Balance',
		expiry: 'BlockNumber',
		cap: 'Balance',
		protocol: 'u8',
		governance: 'u8',
		cid: 'Vec<u8>',
		token_symbol: 'Vec<u8>',
		token_name: 'Vec<u8>',
		created: 'Timestamp',
	},

	Proposal: {
		proposal_id: 'Hash',
		context_id: 'Hash',
		proposal_type: 'u8',
		voting_type: 'u8',
		status: 'u8',
		start: 'BlockNumber',
		expiry: 'BlockNumber',
	},
	ProposalMetadata: {
		title: 'Vec<u8>',
		cid: 'Vec<u8>',
		amount: 'Balance',
	},

	Timestamp: 'Moment',
	EventMessage: 'Vec<u8>',
	Nonce: 'u64',
	TitleText: 'Vec<u8>',
	CID: 'Vec<u8>',
	ProposalType: 'u8',
	ProposalState: 'u8',
	VotingType: 'u8',
}
