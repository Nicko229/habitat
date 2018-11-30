import React, { Component } from 'react';
import NavComponent from './components/NavComponent';
import Footer from './components/Footer';
import banner from './assets/banner.jpeg'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <img src={banner} className="banner"></img>
        <p>
          Nam eget velit turpis. Phasellus hendrerit purus lacus, id dictum erat pretium maximus. Duis venenatis, quam ut iaculis fringilla, nunc nisi vulputate tellus, vitae pharetra ipsum nisi et massa. Duis ultrices pellentesque nisi, sit amet rhoncus tortor ultricies eu. Suspendisse vel nisi elementum, convallis diam ut, porttitor diam. Nullam rhoncus convallis ipsum, et aliquam magna iaculis quis. Sed vel felis leo. In at dictum risus. Duis sit amet aliquet dolor. Duis dictum tincidunt purus, eget lobortis magna condimentum ac. <br /><br />Sed efficitur lectus fringilla fringilla lobortis. Mauris massa orci, placerat in mattis vel, porttitor ultrices eros. Aliquam pretium, magna sed sollicitudin consectetur, ante massa egestas sapien, at efficitur erat est sed ipsum. Nulla ac sagittis est, id vestibulum tortor. Sed quis tempor felis. Nulla quis quam sodales, ullamcorper odio et, placerat mi. Etiam non porta tellus. Maecenas posuere tempus turpis at volutpat. Etiam maximus velit non felis cursus egestas. Morbi congue, enim eget cursus imperdiet, dolor urna porta libero, eu consequat mi risus sed leo. Sed nec laoreet metus. Aenean rhoncus, nibh in gravida consectetur, mi leo varius est, nec aliquet tortor diam quis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. In sit amet massa lacinia, hendrerit libero et, semper dolor. Quisque rhoncus ante nec metus ornare varius.<br /><br />Integer vel nibh facilisis, tempus orci vitae, rhoncus est. Donec quis ultricies metus, gravida mattis eros. Curabitur accumsan iaculis dui. Quisque eu felis quam. Vestibulum efficitur mauris non elit commodo, ac suscipit tortor ornare. Cras at congue lacus, in feugiat ligula. Cras vitae dui a leo rutrum vehicula. Duis ut blandit ligula. Mauris a ipsum est.</p>
        <Footer />
        <img />
      </div >
    );
  }
}

export default App;
