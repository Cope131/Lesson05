import React from 'react';
import { Text, View, Image } from 'react-native';

// Exercise 2
const movie = {title: 'Doctor Sleep', year: '2019'};
class Movie extends React.Component {
    render() {
        return (
            <View>
                {/*<Text>{movie.title} {movie.year}</Text>*/}
                <Text>{'\n'} {this.props.title} {'\n'} {this.props.year}</Text>
                <Image source={this.props.poster} />
            </View>
        );
    }
}

// Exercise 3 ,4, 5
let MOVIES_DATA = ['Doctor Sleep', 'Midway'];

MOVIES_DATA = [
    {
        title: 'Doctor Sleep',
        year: '2019',
    },
    {
        title: 'Midway',
        year: '2019',
    },
];

MOVIES_DATA = [
    {
        title: 'Doctor Sleep',
        year: '2019',
        poster: require('./img/doctor-sleep.jpg'),
    },
    {
        title: 'Midway',
        year: '2019',
        poster: require('./img/midway.jpg'),
    },
];

let MovieList = () => {
    return (
        // MOVIES_DATA.map(title => <Text>{title}</Text>)
        //MOVIES_DATA.map(movie => <Movie title={movie.title} year={movie.year} />)
        MOVIES_DATA.map(movie => <Movie title={movie.title} year={movie.year} poster={movie.poster}/>)
    );
}



export { Movie, MovieList }
