import React from 'react'
import AccessibilityEngine from 'react-native-accessibility-engine';
import Home from '../pages/Pokeinfo';
import * as reactRedux from 'react-redux'
jest.useFakeTimers();

let useDispatchMock: any
let useSelectorMock: any
useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
useSelectorMock.mockClear()
useSelectorMock.mockReturnValue({name: "Joe"})

beforeEach(() => {
    useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    useDispatchMock.mockClear()
})

it('should not have accessibility errors', () => {
    useDispatchMock.mockReturnValue({name: "Mock"})
    const element: JSX.Element = <Home route={{params: "Mock"}}/>;
    expect(() => AccessibilityEngine.check(element)).not.toThrow();
});