import React, { Component } from "react";

import FormConverter from "./FormConverter";

export default class USD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      USD: null,
    };
  }

  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async () => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((res) => res.json())
      .then(
        (data) => {
          const { Value } = data.Valute.USD;

          console.log({ USD });
          this.setState({
            isLoaded: true,
            USD: Value,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };
  render() {
    const { error, isLoaded, USD } = this.state;
    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading</p>;
    } else {
      return <FormConverter usd={USD} />;
    }
  }
}
