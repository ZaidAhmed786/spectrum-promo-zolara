import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import CableTv from '../components/service-details';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Cable TV"} />
            <CableTv/>
        </Wrapper>
    );
};

export default index;