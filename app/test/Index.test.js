import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../component/Index/Header';
import Footer from '../component/Index/Footer'; 
import FilterBar from '../component/Index/FilterBar';
import Content from '../component/Index/Content';
import renderer from 'react-test-renderer';
import mockdata  from './mock/mockMovies'

describe('components', () => {
    it('render Header', () => {
        const component = renderer.create(
            <Header/>
        );
        let tree = component.toJSON();
        expect(toJson(tree)).toMatchSnapshot();
        
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('render Footer', () => {
        const component = renderer.create(
            <Footer />
        );
        let tree = component.toJSON();
        expect(toJson(tree)).toMatchSnapshot();
    })

    it('render FilterBar', () => {
        const total = mockdata.total;
        const component = renderer.create(
            <FilterBar total={total}/>
        );
        let tree = component.toJSON();
        expect(toJson(tree)).toMatchSnapshot();
    })

    it('render Content', () => {
        const movies = mockdata.data;
        const component = renderer.create(
            <Content movies={movies}/>
        );
        let tree = component.toJSON();
        expect(toJson(tree)).toMatchSnapshot();
    })

});