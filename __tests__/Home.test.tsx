import React from 'react'
import Home from '../pages/Home';
import AccessibilityEngine from 'react-native-accessibility-engine';
jest.useFakeTimers();


it('should not have accessibility errors', () => {
    const element: JSX.Element = <Home/>;
    expect(() => AccessibilityEngine.check(element)).not.toThrow();
});