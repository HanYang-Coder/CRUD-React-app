import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {

  // Adding Company
  const [nameCompany, setNameCompany] = useState("");
  const [isAirline, setIsAirline] = useState(false);
  const [companyList, setCompanyList] = useState([]);

  const addCompany = () => {
    Axios.post("http://223.25.74.82:7103/company/create", {

      nameCompany: nameCompany,
      isAirline: isAirline,
    }).then(() => {
      setCompanyList([
        ...companyList,
        {
          nameCompany: nameCompany,
          isAirline: isAirline,
        },
      ]);
    });
  };

  // Adding Restaurant
  const [nameRestaurant, setNameRestarant] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [companyId, setCompanyId] = useState(0);

  const [restaurantList, setRestaurantList] = useState([]);

  const addRestaurant = () => {
    Axios.post("http://223.25.74.82:7103/restaurant/create", {

      nameRestaurant: nameRestaurant,
      isValid: isValid,
      companyId: companyId,
    }).then(() => {
      setRestaurantList([
        ...restaurantList,
        {
          nameRestaurant: nameRestaurant,
          isValid: isValid,
          companyId: companyId,
        },
      ]);
    });
  };

  // Adding Location
  const [nameLocation, setNameLocation] = useState("");
  const [restaurantId, setRestaurantId] = useState(0);

  const [locationList, setLocationList] = useState([]);

  const addLocation = () => {
    Axios.post("http://223.25.74.82:7103/location/create", {

      nameLocation: nameLocation,
      restaurantId: restaurantId,
    }).then(() => {
      setLocationList([
        ...locationList,
        {
          nameLocation: nameLocation,
          restaurantId: restaurantId,
        },
      ]);
    });
  };

  // Adding Service
  const [nameService, setNameService] = useState("");
  const [locationId, setLocationId] = useState(0);
  const [menuId, setMenuId] = useState(0);
  const [percentageThreshold, setPercentageThreshold] = useState(0.2);
  const [numDays, setNumDays] = useState(30);
  const [remoteTaggingUserLock, setRemoteTaggingUserLock] = useState(0);
  const [inputTag, setInputTag] = useState(0);

  const [serviceList, setServiceList] = useState([]);

  const addService = () => {
    Axios.post("http://223.25.74.82:7103/service/create", {

      nameService: nameService,
      locationId: locationId,
      menuId: menuId,
      percentageThreshold: percentageThreshold,
      numDays: numDays,
      remoteTaggingUserLock: remoteTaggingUserLock,
      inputTag: inputTag,
    }).then(() => {
      setServiceList([
        ...serviceList,
        {
          nameService: nameService,
          locationId: locationId,
          menuId: menuId,
          percentageThreshold: percentageThreshold,
          numDays: numDays,
          remoteTaggingUserLock: remoteTaggingUserLock,
          inputTag: inputTag,
        },
      ]);
    });
  };

  // const getEmployees = () => {
  //   Axios.get("http://localhost:3001/employees").then((response) => {
  //     setEmployeeList(response.data);
  //   });
  // };

  // const updateEmployeeWage = (id) => {
  //   Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
  //     (response) => {
  //       setEmployeeList(
  //         employeeList.map((val) => {
  //           return val.id === id
  //             ? {
  //               id: val.id,
  //               name: val.name,
  //               country: val.country,
  //               age: val.age,
  //               position: val.position,
  //               wage: newWage,
  //             }
  //             : val;
  //         })
  //       );
  //     }
  //   );
  // };

  // const deleteEmployee = (id) => {
  //   Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
  //     setEmployeeList(
  //       employeeList.filter((val) => {
  //         return val.id !== id;
  //       })
  //     );
  //   });
  // };

  //Front end
  return (
    <div className="App">

      <div className="information">
        <h2>Company</h2>
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setNameCompany(event.target.value);
          }}
        />
        <label>Is Airline:</label>
        <input
          type="checkbox"
          isAirline={isAirline}
          onChange={() => setIsAirline(!isAirline)}
        />
        <button onClick={addCompany}>Add Company</button>
      </div>

      <div className="information">
        <h2>Restaurant</h2>
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setNameRestarant(event.target.value);
          }}
        />
        <label>Is Valid:</label>
        <input
          type="checkbox"
          isValid={isValid}
          onChange={() => setIsValid(!isValid)}
          defaultChecked={true}
        />
        <label>Company Id:</label>
        <input
          type="number"
          onChange={(event) => {
            setCompanyId(event.target.value);
          }}
        />
        <button onClick={addRestaurant}>Add Restaurant</button>
      </div>

      <div className="information">
        <h2>Location</h2>
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setNameLocation(event.target.value);
          }}
        />
        <label>Restaurant Id:</label>
        <input
          type="number"
          onChange={(event) => {
            setRestaurantId(event.target.value);
          }}
        />
        <button onClick={addLocation}>Add Location</button>
      </div>

      <div className="information">
        <h2>Service</h2>
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setNameService(event.target.value);
          }}
        />
        <label>Location Id:</label>
        <input
          type="number"
          onChange={(event) => {
            setLocationId(event.target.value);
          }}
        />
        <label>Menu Id:</label>
        <input
          type="number"
          onChange={(event) => {
            setMenuId(event.target.value);
          }}
        />
        <label>Percentage Threshold:</label>
        <input
          type="number"
          onChange={(event) => {
            setPercentageThreshold(event.target.value);
          }}
        />
        <label>Number of Days:</label>
        <input
          type="number"
          onChange={(event) => {
            setNumDays(event.target.value);
          }}
        />
        <label>Remote Tagging User Lock:</label>
        <input
          type="number"
          onChange={(event) => {
            setRemoteTaggingUserLock(event.target.value);
          }}
        />
        <label>Input Tag:</label>
        <input
          type="number"
          onChange={(event) => {
            setInputTag(event.target.value);
          }}
        />
        <button onClick={addService}>Add Service</button>
      </div>


    </div>
  );
}

export default App;
