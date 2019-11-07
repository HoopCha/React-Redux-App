import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchFacts } from '../actions';

import ChampionDetails from './Fact';

const CatFacts = props => {
  useEffect(() => {
    props.fetchFacts();
  }, []);

  if (props.isFetching) {
    // usually a spinner (react-loader-spinner)
    return <h2>Loading Champions...</h2>;
  }

console.log("props", props.champions)
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.champions.map(champion => (
        Object.values(champion).map(details => (
          <ChampionDetails key={details.id} 
          name={details.name} 
          title={details.title}
          image={details.image.full}
          blurb={details.blurb} />
        ))
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("This is state" ,state)
  return {
    champions: state.catFacts,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFacts }
)(CatFacts);