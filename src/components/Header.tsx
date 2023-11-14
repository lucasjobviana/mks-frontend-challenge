// import React,{ useEffect, useState, useMemo } from 'react';
import { ButtonWrapper, TopMenuWrapper } from '../styles';
import { EnterpriseTitleName } from './';

export const Header = () => {
    return (
        <TopMenuWrapper>
            <EnterpriseTitleName />
            <ButtonWrapper />
        </TopMenuWrapper>
    )
}