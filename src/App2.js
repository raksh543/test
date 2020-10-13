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

            <Switch>
                <Route path="/reviews">
                    <CustomerReviewsStyled />
                </Route>
                <Route path="/">
                    <CouponsPageStyled />
                </Route>
                <Route path="/faq">
                    <FAQsStyled />
                </Route>
            </Switch>
        </Router>

    );
}

export default App2;
