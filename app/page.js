import Navbar from "./Navbar";
import Header from "./Header";
import Carousel from "./Carousel";
import Postcards from "./Postcards";
import Footer from "@/Footer";


export default function Home() {
  return (
    <main>
    <Navbar>
    </Navbar>
    <Header/>
    <Carousel/>
    <Postcards />
    <Footer />
    </main>
  );
}
