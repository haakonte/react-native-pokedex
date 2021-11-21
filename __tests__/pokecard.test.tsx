import React from 'react'
import AccessibilityEngine from 'react-native-accessibility-engine';
import { useDispatch } from 'react-redux';
import Filter from '../components/Filter';
import PokeCard from '../components/pokecard';
jest.useFakeTimers();

const data = {
    id: "Test",
    name: "test",
    type: ["Test", "Test"],
    weaknesses: ["Test", "Test"]
}

it('should not have accessibility errors', () => {
    const element: JSX.Element = <PokeCard pokedata={data}/>
    expect(() => AccessibilityEngine.check(element)).not.toThrow();
});