import React, { createContext, useReducer } from 'react'
import { initialCards } from './constants'

const initialState = {
	cards: initialCards,
	mun: null,
	mus: null,
	nftManager: null,
	amountStaked: 0,
	munBalance: 0,
	musBalance: 0,
	generatedMUS: 0,
	setupComplete: false,
}
const store = createContext(initialState)
const { Provider } = store

const reducer = (state, action) => {
	let newState = {}
	switch (action.type) {
		case 'SET_CARDS':
			console.log('set cards')
			newState = {
				...state,
				cards: action.payload.cards,
			}
			return newState
		case 'SET_CONTRACTS':
			console.log('set contracts')
			newState = {
				...state,
				mun: action.payload.mun,
				mus: action.payload.mus,
				nftManager: action.payload.nftManager,
			}
			return newState
		case 'SET_AMOUNT_STAKED':
			console.log('set amount staked')
			newState = {
				...state,
				amountStaked: action.payload.amountStaked,
			}
			return newState
		case 'SET_MUN_BALANCE':
			console.log('set mun balance')
			newState = {
				...state,
				munBalance: action.payload.munBalance,
			}
			return newState
		case 'SET_MUS_BALANCE':
			console.log('set mus balance')
			newState = {
				...state,
				musBalance: action.payload.musBalance,
			}
			return newState
		case 'SET_SETUP_COMPLETE':
			console.log('set setup complete')
			newState = {
				...state,
				setupComplete: action.payload.setupComplete,
			}
			return newState
		case 'SET_GENERATED_MUS':
			console.log('set generated mus')
			newState = {
				...state,
				generatedMUS: action.payload.generatedMUS,
			}
			return newState
		default:
			return state
	}
}

const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StoreProvider }
