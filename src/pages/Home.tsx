// import React,{ useEffect, useState, useMemo } from 'react';
import { HomeWrapper } from '../styles';
import { Header, Main ,Footer } from '../components';

export const Home = () => {
    return (
        <HomeWrapper>
            <Header />
            <Main />
            <Footer />   
        </HomeWrapper>
    )
}