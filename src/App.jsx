import "./App.css";
import {
  Header,
  MainContent,
  Footer,
  ProductSection,
  FAQ,
} from "./components/WebSection";

function Button(props) {
  return <button className={props.buttonStyle}>{props.buttonText}</button>;
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
