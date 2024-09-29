import "./App.css";
import { Homepage } from "./pages/homepage/Homepage";
import thumbnail from "./assets/logo.jpg";

function App() {
  return (
    <>
      <Metadata
        title="SERKSA"
        description="SERKSA is an free E-Learning Platform that offer a wide ranges of courses. Take your time and learn from Anywhere. SERKSA was developed by CSTAD Pre-University Scholarship Students Group 3."
        author="CSTAD"
        keywords="free, learning, free courses, khmer, online"
        thumbnail={thumbnail}
      />
      <Homepage />
    </>
  );
}

export default App;
