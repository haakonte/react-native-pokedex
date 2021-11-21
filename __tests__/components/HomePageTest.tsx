import { render, RenderAPI } from '@testing-library/react-native'
import React from 'react'
import Home from '../../pages/Home'
const api = require('../../services/pokemon_api')


const data = [
    {
        id: 1,
        num: "001",
        name: "Bulbasaur",
        img: "http://www.serebii.net/pokemongo/pokemon/001.png",
        type: ["Grass", "Poison"],
        height: "0.71 m",
        weight: "6.9 kg",
        candy: "Bulbasaur Candy",
        candy_count: 25,
        egg: "2 km",
        spawn_chance: 0.69,
        avg_spawns: 69,
        spawn_time: "20:00",
        multipliers: [1.58],
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        next_evolution: [{
            num: "002",
            name: "Ivysaur"
        }, {
            num: "003",
            name: "Venusaur"
        }]
    }
]

const search = {
    data: {
        searchForPokemon: data
    } 
}

const allPokemon = {
    data: {
        allPokemon: data
    }
}
    

describe('testing the Home component', () => {
    
    let component: RenderAPI;

    beforeEach(() => {
        // Cache original functionality
        component = render(<Home/>)
        const realUseState = React.useState

        // Stub the initial state
        const stubInitialState: any = data

        // Mock useState before rendering your component
        jest
        .spyOn(React, 'useState')
        .mockImplementation(() => realUseState(stubInitialState))
    })

    it('makes sure that homepage is rendered correctly', () => {
        expect(component).toBeDefined();
        console.log(component.debug());
    })

    it('loads homepage with dummy data', () => {
        expect(component.getByText('Bulbasaur')).toBeDefined();
    })


})
