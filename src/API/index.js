const cohortName = "2412-FTB-ET-WEB-FT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${API_URL}/players`);
    const json = await response.json();
    console.log(json.data);
    return json.data;
  } catch (err) {
    console.error("error: fetchAllPlayers", err);
    return [];
  }
};
