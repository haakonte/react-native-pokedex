import React from 'react'
import AccessibilityEngine from 'react-native-accessibility-engine';
import { useDispatch } from 'react-redux';
import Filter from '../components/Filter';
import Pokelist from '../components/pokelist';
import Search from '../components/search';
jest.useFakeTimers();


it('should not have accessibility errors', () => {
    const element: JSX.Element = <Search/>
    expect(() => AccessibilityEngine.check(element)).not.toThrow();
});