import { Box } from "@mui/material";
import React, { Component } from "react";
import Layout from "../../layout/Layout";
import CompCard from "../../components/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8002/api/v1/components/")
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json });
      });
  }
  render() {
    return (
      <Layout>
        <section class="hero">
          <div class="pixels"></div>
          <div class="gradient"></div>
          <div class="content">
            <h1 class="title">Welcome to the desert of the real</h1>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </section>
        <Grid container justifyContent="space-around" spacing={3}>
          {this.state.data.map(item => (
          <Grid item>
            <CompCard image={item.image} title={item.title} description={item.description} />
          </Grid>
          ))}
        </Grid>
      </Layout>
    );
  }
}

export default Home;
