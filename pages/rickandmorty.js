import Layout from "../components/Layout/layout";
import styles from "../components/components-styles/rickandmort.module.css";
import Card from "../components/rick-and-morty/card";
import React from "react"

export default class rick extends React.Component {
  render(){

    return (
      <div>
        <h1 className={styles.greet}>Rick And Morty</h1>
        <Layout />
        
        <Card />
        
      </div>
    );  
  }
}

/* export default rick; */
