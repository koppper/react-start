import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from "../error-indicator";
import './random-planet.css';


export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 60000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };


    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17) + 3;

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };


    render() {
        const {planet, loading, error} = this.state;

        const hasData = !(loading || error);


        const PlanetView = ({planet}) => {
            const {id, name, population, rotationPeriod, diameter} = planet;

            return (
                <React.Fragment>
                    <img className="planet-image"
                         src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                    <div>
                        <h4>{name}</h4>
                        <ul className="list-group list-group-flush">
                        </ul>
                    </div>
                </React.Fragment>
            )
        };
    }
}