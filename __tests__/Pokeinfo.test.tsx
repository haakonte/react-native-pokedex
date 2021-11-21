import React from 'react'
import AccessibilityEngine from 'react-native-accessibility-engine';
import Pokeinfo from '../pages/Pokeinfo';
jest.useFakeTimers();


it('should not have accessibility errors', () => {
    const element: JSX.Element = <Pokeinfo/>;
    expect(() => AccessibilityEngine.check(element)).not.toThrow();
});