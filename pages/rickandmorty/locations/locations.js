import React from 'react'
import unfetch from "isomorphic-unfetch";

/**
 * Character Detail Sayfasında Gezegeni Belirtecez ve o gezegenden olanların gösterileceği bu sayfaya getiricez.
 * Direk lokasyonlar sayfası olmayacak. Character sayfasından buraya getiricez.
 * 
 */
export default function Locations({locations}) {

    console.log(locations)
    return (
        <div>
            <h1>Locations</h1>
            <div>
                {locations.results.map((location) => (
                    <div key = {location.id} > {location.name } </div>
                ))}
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await unfetch("https://rickandmortyapi.com/api/location");
    const locations = await res.json();
  
    return {
      props: {
        locations,
      },
    };
  };
  