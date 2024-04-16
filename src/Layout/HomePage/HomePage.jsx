import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderItem from './components/HeaderItem';
import ContentItem from './components/ContentItem';
import FooterItem from './components/FooterItem';

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const HomePage = () => {
    const value = "Какие-то карточки с картинками";
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        axios.get(baseUrl)
            .then(res => {
                setLabels(res.data.slice(0, 5));
            });
    });

    return (
        <div className="container col-10">
            <HeaderItem headerText={value} />
            <ContentItem
                setOfLabels={labels}
            />

            <FooterItem />
        </div>
    );
}

export default HomePage;