import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import { setSearchField, reqRobots } from '../actions';

import './App.css';

const mapStateToProps = state => { 
    return {
        searchField: state.searchRobots.searchField,
        robots: state.reqRobots.robots,
        isPending: state.reqRobots.isPending,
        error: state.reqRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: e => dispatch(setSearchField(e.target.value)),
        onReqRobots: () => reqRobots(dispatch)
    }
}

class App extends Component {

    componentDidMount(){
        this.props.onReqRobots();
    }

    render() {
        
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ?
            <h1>Loading...</h1> : 
            (
                <div className="tc">
                    <Header/>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll className="shadow-3">
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                    <Footer />
                </div>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);