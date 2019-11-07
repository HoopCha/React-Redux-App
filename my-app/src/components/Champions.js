import React, { useEffect, useState  } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import SearchForm from "./SearchForm";

import { fetchFacts } from '../actions';

import ChampionDetails from './Fact';


const Cards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Search = styled.div `
display:flex;
justify-content:center;
margin: 10px;
`

const CatFacts = props => {

  const [query, setQuery] = useState("");
  useEffect(() => {
    props.fetchFacts();
  }, []);

  if (props.isFetching) {
    // usually a spinner (react-loader-spinner)
    return <h2>Loading Champions...</h2>;
  }

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div>
    <Search>
    <SearchForm
    handleInputChange = {handleInputChange}
    query = {query}
    />
    </Search>
    <Cards>
      {props.error && <p>{props.error}</p>}
      {props.champions.map(champion => (
        Object.values(champion).filter(details =>
          details.name.toLowerCase().includes(query.toLowerCase())).map(details => (
          <ChampionDetails key={details.id} 
          name={details.name} 
          title={details.title}
          image={details.image.full}
          blurb={details.blurb}
          tags ={details.tags} />
        ))
      ))}
    </Cards>
    </div>
  );
};

const mapStateToProps = state => {
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