import Header from './Header';
import Flower from './Flower';
import './App.css';

function App() {
  // סעיף 1: מערך המכיל אובייקטים של פרחים (קוד פרח ותכונות)
  const flowersList = [
    { id: 1, flowerName: "תורמוס", petalColor: "plum", centerColor: "purple" },
    { id: 2, flowerName: "נרקיס", petalColor: "lightgoldenrodyellow", centerColor: "darkorange" },
    { id: 3, flowerName: "כלנית", petalColor: "lightpink", centerColor: "firebrick" },
    { id: 4, flowerName: "חרצית", petalColor: "gold" },
    { id: 5, flowerName: "שושן", centerColor: "darkgreen" },
    { id: 6, flowerName: "רקפת" }
  ];

  return (
    <div dir="rtl">
      <Header />
      <main style={{ padding: "20px" }}>
        <p>ברוכים הבאים לגינה שלי!</p>
        
        {/* סעיף 2 ו-3: מעבר על המערך באמצעות map והצגת קומפוננטת Flower עם key ייחודי */}
        {flowersList.map((flower) => (
          <Flower 
            key={flower.id}
            flowerName={flower.flowerName}
            petalColor={flower.petalColor}
            centerColor={flower.centerColor}
          />
        ))}
      </main>
    </div>
  );
}

export default App;