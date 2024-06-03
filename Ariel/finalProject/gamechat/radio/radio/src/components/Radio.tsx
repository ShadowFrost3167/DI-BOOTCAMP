//imports
import React, { useState, useEffect } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import defaultImage from "./radioimg.jpg";

//define structure of stations
interface Station {
  favicon: string;
  name: string;
  urlResolved: string;
}

export default function Radio() {
  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");
  const filters = ["all", "country", "jazz", "pop", "rap", "retro", "rock"];

  const setDefaultSrc = (event: { target: { src: string } }) => {
    event.target.src = defaultImage;
  };

  //   when something happens to station filter call function to set up api and pass the new station filter. set stations with data.

  useEffect(() => {
    setupApi(stationFilter).then((data) => {
      setStations(data);
    });
  }, [stationFilter]);

  const setupApi = async (stationFilter: string) => {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");

    const stations = await api
      .searchStations({
        language: "english",
        tag: stationFilter === "all" ? "" : stationFilter,
        limit: 30,
        type: String,
      })
      .then((data: any) => {
        return data;
      });
    return stations;
  };

  return (
    <>
      <div className="radio">
        <div className="filters">
          {filters.map((filter, index) => (
            <span
              key={index}
              className={stationFilter === filter ? "selected" : ""}
              onClick={() => setStationFilter(filter)}
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="stations">
          {stations &&
            stations.map(
              (
                station: { favicon: string | undefined },
                index: React.Key | null | undefined
              ) => {
                return (
                  <div className="station" key={index}>
                    <div className="stationName">
                      <img
                        src={station.favicon}
                        alt="station logo"
                        className="logo"
                        onError={setDefaultSrc}
                      />
                      <div className="name">{station.urlResolved}</div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </>
  );
}
