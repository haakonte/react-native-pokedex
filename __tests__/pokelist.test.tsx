import React from 'react'
import AccessibilityEngine from 'react-native-accessibility-engine';
import { useDispatch } from 'react-redux';
import Filter from '../components/Filter';
import Pokelist from '../components/pokelist';
jest.useFakeTimers();


it('should not have accessibility errors', () => {
    const element: JSX.Element = <Pokelist/>
    expect(() => AccessibilityEngine.check(element)).not.toThrow();
});