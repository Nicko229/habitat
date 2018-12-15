import React, { Component } from 'react';
import NavComponent from '../components/NavComponent';
import Footer from '../components/Footer';
import CarouselBanner from '../components/CarouselBanner';
// import banner from '../assets/banner.jpeg';
// import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />

        <CarouselBanner />

        <p>
          Nam eget velit turpis. Phasellus hendrerit purus lacus, id dictum erat pretium maximus. Duis venenatis, quam ut iaculis fringilla, nunc nisi vulputate tellus, vitae pharetra ipsum nisi et massa. Duis ultrices pellentesque nisi, sit amet rhoncus tortor ultricies eu. Suspendisse vel nisi elementum, convallis diam ut, porttitor diam. Nullam rhoncus convallis ipsum, et aliquam magna iaculis quis. Sed vel felis leo. In at dictum risus. Duis sit amet aliquet dolor. Duis dictum tincidunt purus, eget lobortis magna condimentum ac. <br /><br />Integer vel nibh facilisis, tempus orci vitae, rhoncus est. Donec quis ultricies metus, gravida mattis eros. Curabitur accumsan iaculis dui. Quisque eu felis quam. Vestibulum efficitur mauris non elit commodo, ac suscipit tortor ornare. Cras at congue lacus, in feugiat ligula. Cras vitae dui a leo rutrum vehicula. Duis ut blandit ligula. Mauris a ipsum est.</p>

        <Footer />

      </div >
    );
  }
}

export default Home;