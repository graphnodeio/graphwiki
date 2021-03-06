import React from 'react';
import Navbar from '../components/Navbar';
import GlobalStyle from '../globalStyles';
import Schema from './Schema';
import Guides from './Guides';
import Explorer from './Explorer';
import StyledWrapper from './StyledWrapper';
import {GraphdocConfigContext} from '../providers/GraphdocConfigProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <main className="flex flex-grow">
          <GlobalStyle/>
          <StyledWrapper>
              <Switch>
                <Route exact path="/">
                  {/*<div className="container mx-auto">
                  </div>*/}
                  <Schema />
                </Route>
                <Route exact path="/guides">
                  <GraphdocConfigContext.Consumer>
                    {(config) => (
                      <Guides config={config}/>
                    )}
                  </GraphdocConfigContext.Consumer>
                  
                </Route>
                <Route exact path="/collections">
                  Collections
                </Route>
                <Route exact path="/explorer">
                  <Explorer />
                </Route>
              </Switch>
          </StyledWrapper>
        </main>
       </Router>
    </React.Fragment>
  )
};
export default App;