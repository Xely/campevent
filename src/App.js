import React from 'react';
import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

function App() {

  const data = [{
    name: "Soirée Smash Bros",
    place: "Dans la salle de coworking",
    date: "18/10/2019 18h30" 
  },
  {
    name: "Ceuillette de champignon",
    place: "Chez mamie ginette",
    date: "30/10/2019 15h30" 
  },
  {
    name: "Rencontre avec notre dieu Sylvain Durif",
    place: "Dans la forêt de Merlin l'enchanteur",
    date: "31/10/2019 14h30" 
  },
]
  return (
    <div>
      <h1>Evénements du campus</h1>
      
      <ReactTable
          data={data}
          columns={[
            // {
            //   Header: "",
            //   accessor: "icon",
            //   width: 36,
            //   headerStyle: {
            //     backgroundColor: "#003b74",
            //     color: "white"
            //   }
            // },
            {
              Header: "Nom",
              accessor: "name",
            },
            {
              Header: "Lieu",
              accessor: "place",
              style: { overflow: "visible" },
            },
            {
              Header: "Date",
              accessor: "date",
            }
          ]}
          className="-striped -highlight"
          style={{ height: "85vh" }}
          noDataText="Pas d'événements"
          minRows={7}
        />
    </div>
  );
}

export default App;
