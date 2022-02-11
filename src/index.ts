import type { OverrideBundleDefinition, RegistryTypes } from '@polkadot/types/types'
import { gamedao } from './gamedao'

export const types: RegistryTypes = {
	...gamedao,
}

export const types45: RegistryTypes = {
	...types,
}

export const typeBundleForPolkadot: OverrideBundleDefinition = {
	types: [
		{
			minmax: [0, 44],
			types: types,
		},
		{
			minmax: [45, undefined],
			types: types45,
		},
	],
}
