import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
  overflow: hidden;
  width: 400px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
  margin: 15px;
  padding: 10px;
  transition: 0.3s;
  :hover {
    box-shadow: 0 0px 40px rgba(0, 0, 0, .2);
    border: 2px solid DIMGREY;
    background: LIGHTSLATEGREY;
  }
`

const Details = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`

const ChampionDetails = props => {
  var test = props.name.replace(/\W/g,"")
if (test === "KaiSa"){
  test = "Kaisa";
} else if (test === "ChoGath"){
  test = "Chogath";
} else if (test === "VelKoz"){
  test = "Velkoz";
} else if (test === "NunuWillump"){
  test = "Nunu";
} else if (test === "Wukong"){
  test = "MonkeyKing";
} else if (test === "LeBlanc"){
  test = "Leblanc";
} else if (test === "KhaZix"){
  test = "Khazix";
}

return (
  <Card>
  <h1>{props.name} {props.title}</h1>
  <p>{props.blurb}</p>
  <Details>
    <p>Tags: {props.tags[0]}    {props.tags[1]}</p>
  <img src={`http://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/${test}.png`} alt={props.name} />
  </Details>
  </Card> )
};

export default ChampionDetails;
