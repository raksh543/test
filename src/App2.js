import React from 'react';
import CouponsPage from './CouponsPage';
import CouponsPageStyled from './CouponsPageStyled';
import FAQsPage from './FAQsPage';
import FAQsStyled from './FAQsStyled';
import CustomerReviews from './CustomerReviews';
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
                <Route path="/reviews">
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
