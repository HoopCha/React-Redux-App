import React from 'react';

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
  <div>
  <p>{props.name} {props.title}</p>
  <p>{props.blurb}</p>
  <img src={`http://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/${test}.png`} alt={props.name} />
  </div> )
};

export default ChampionDetails;
