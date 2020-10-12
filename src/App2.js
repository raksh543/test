import React from 'react';
import CouponsPageStyled from './CouponsPageStyled';
import FAQsStyled from './FAQsStyled';
import CustomerReviewsStyled from './CustomerReviewsStyled';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App2 = () => {
        return (
            <Router>
                <Route path="/">
                    <CustomerReviewsStyled />
                </Route>
                <Route path="/coupons">
                    <CouponsPageStyled />
                </Route>
                <Route path="/faqs">
                    <FAQsStyled />
                </Route>
            </Router>
        );
}

export default App2;
