import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
function Covid() {
  const [dataCovid, setDataCovid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getAPI = async () => {
      setTimeout(async () => {
        try {
          let res = await axios.get(
            "https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-30T00:00:00Z"
          );
          console.log(">>>check res: ", res.data);
          let data = res && res.data ? res.data : [];
          if (data && data.length > 0) {
            data.map((item) => {
              item.Date = moment(item.Date).format("DD/MM/YYYY");
              return item;
            });
            data = data.reverse();
          }
          setDataCovid(data);
          setIsLoading(false);
          setIsError(false);
        } catch (error) {
          setIsError(true);
          setIsLoading(false);
          alert(error.message);
        }
      }, 3000);
    };
    getAPI();
  }, []);
  return (
    <>
      <h3>Covid-19 tracking in Viet Nam</h3>
      <table>
        {console.log(">>>check data covid: ", dataCovid)}
        <thead>
          <tr>
            <th>Date</th>
            <th>Active</th>
            <th>Confirmed</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            isLoading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Active}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {isLoading === true && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
          {isError === true && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                Something went wrong...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Covid;
