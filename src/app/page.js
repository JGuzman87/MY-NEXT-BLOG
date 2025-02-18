import '../app/globals.css'
import Form from '../components/Form';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <div className="comp-container">
        <Form />
      </div>
      <Footer />
    </>
  );
}
