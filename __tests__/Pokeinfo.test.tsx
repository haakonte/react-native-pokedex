import React from 'react'
import AccessibilityEngine from 'react-native-accessibility-engine';
import Pokeinfo from '../pages/Pokeinfo';
import * as reactRedux from 'react-redux'
jest.useFakeTimers();

let useDispatchMock: any

beforeEach(() => {
    useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    useDispatchMock.mockClear()
})

it('should not have accessibility errors', () => {
    
    useDispatchMock.mockReturnValue({name: "Mock"})
    const element: JSX.Element = <Pokeinfo route={{params: "mock"}}/>;
    expect(() => AccessibilityEngine.check(element)).not.toThrow();
});