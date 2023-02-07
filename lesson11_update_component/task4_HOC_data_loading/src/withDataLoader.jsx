import React from 'react';
import Spinner from './Spinner';

// export const withDataLoader = (url) => {
//   return async function (WrappedComponent) {
//     const data = await fetch(url)
//       .then((response) => response.JSON)
//       .then((data) => data);

//     if (!data) {
//       return <Spinner />;
//     }
//     return <WrappedComponent data={data} />;
//   };
// };

export const withDataLoader = (url) => {
  return function (WrappedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          data: null,
        };
      }
      componentDidMount() {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            this.setState({ data });
          });
      }

      render() {
        // console.log(this.state.data);
        if (!this.state.data) {
          return <Spinner />;
        }
        return <WrappedComponent data={this.state.data} {...this.props} />;
      }
    };
  };
};

// export const withDataLoader = (url) => {
//   return class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         data: '',
//       };
//     }
//     componentDidMount() {
//       fetch(url)
//         .then((response) => response.JSON)
//         .then((data) => this.setState({ data }));
//     }
//     render() {
//       if (!this.state.data) {
//         return <Spinner />;
//       }
//     }
//   };
// };
