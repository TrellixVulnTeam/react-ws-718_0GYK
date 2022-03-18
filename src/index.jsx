import '../assets/stylesheets/application.scss';

import ReactDOM from "react-dom";
import React from "react"; // importing the JSX

import App from './components/App';

const root = document.querySelector("#root");
console.log(root);

ReactDOM.render(<App />, root);

// Functional component
// rsc + tab
// const Hello = ({ name, flag }) => {
// const Hello = (props) => {
//   const { name, flag } = props;
//   return (
//     <div>
//       <h1>Hello {name}!!! {flag}</h1>
//     </div>
//   );
// };

// Class component
// eslint-disable-next-line react/prefer-stateless-function
// class Hello extends React.Component {
//   render() {
//     const { name, flag } = this.props;
//     return (
//       <div>
//         <h1>Hello {name}! {flag}</h1>
//       </div>
//     );
//   }
// }


