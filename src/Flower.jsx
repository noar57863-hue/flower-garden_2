function Flower({ flowerName = "פרח לא ידוע", petalColor, centerColor }) {
  const finalPetalColor = petalColor || "lightgray";
  const finalCenterColor = centerColor || "black";

  const handleClick = () => {
    alert(`אני פרח מסווג ${flowerName}`);
  };

  return (
    <div 
      onClick={handleClick}
      style={{ 
        backgroundColor: finalPetalColor, 
        color: finalCenterColor, 
        padding: "25px", 
        margin: "15px", 
        borderRadius: "10px", 
        display: "inline-block",
        direction: "rtl",
        border: `2px solid ${finalCenterColor}`,
        cursor: "pointer"
      }}
    >
      <h2 style={{ color: finalCenterColor, direction: "rtl" }}>שם הפרח: {flowerName}</h2>
      <p style={{ color: finalCenterColor, direction: "rtl", textAlign: "right" }}>
        צבע עלי הכותרת: <span dir="ltr" style={{ display: "inline-block" }}>{finalPetalColor}</span>
      </p>
      <p style={{ color: finalCenterColor, direction: "rtl", textAlign: "right" }}>
        צבע העלה המרכזי: <span dir="ltr" style={{ display: "inline-block" }}>{finalCenterColor}</span>
      </p>
    </div>
  );
}

export default Flower;