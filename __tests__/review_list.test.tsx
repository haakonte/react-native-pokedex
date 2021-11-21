import React from 'react'
import AccessibilityEngine from 'react-native-accessibility-engine';
import { useDispatch } from 'react-redux';
import Filter from '../components/Filter';
import ReviewList from '../components/review-list';
jest.useFakeTimers();


it('should not have accessibility errors', () => {
    const element: JSX.Element = <ReviewList id="id" refresh={true}/>
    expect(() => AccessibilityEngine.check(element)).not.toThrow();
});