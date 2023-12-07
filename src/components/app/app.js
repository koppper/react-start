
import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import Row from "../row/row";
import ErrorIndicator from "../error-indicator";

import './app.css';

import PeoplePage from "../people-page";
import ItemList from "../item-list";
import ItemDetails, {Record} from "../item-details/item-details";
import ErrorBoundry from "../error-boundry";
import {PersonList, PlanetList, StarshipList, PersonDetails, StarshipDetails, PlanetDetails} from "../sw-components";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";



export default class App extends Component{
    swapiService = new DummySwapiService();

    state = {
        showRandomPlanet: true
    };


    toggleRandomPlanet = () => {
        this.setState((state)=> {
            return { showRandomPlanet: !state.showRandomPlanet }
        })
    };


    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className='container-fluid'>
                        <div className="row">
                            <div className="col-12">
                                <Header/>
                            </div>
                        </div>

                        <PersonDetails itemId={11} />
                        <StarshipDetails itemId={5} />
                        <PlanetDetails itemId={9} />

                        <PersonList />
                        <StarshipList />
                        <PlanetList />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};