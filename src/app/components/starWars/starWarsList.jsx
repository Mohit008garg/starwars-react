/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { orderBy } from 'lodash';
import CommonRenderList from '../commonRenderList/commonRenderList';
import Loader from '../Loader/loader';

const StarWarsList = () => {

    const [planetList, setPlanetList] = useState([]);
    const [previousPageUrl, setPreviousPageUrl] = useState('');
    const [nextPageUrl, setNextPageUrl] = useState('');

    async function fetchData(url) {
        const response = await fetch(url)
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        async function getPlanets() {
            const url = 'https://swapi.dev/api/planets/';
            const response = await fetchData(url);
            console.log('response', response)
            setPlanetList(response.results);
            setPreviousPageUrl(response.previous);
            setNextPageUrl(response.next);
        }
        getPlanets();
    }, []);

    useEffect(() => {

    }, [planetList]);

    return (
        <>
            {
                planetList && planetList.length > 0 ? <CommonRenderList list={orderBy(planetList, ['population'])} />
                    : <Loader />
            }
        </>
    );
}


export default StarWarsList;