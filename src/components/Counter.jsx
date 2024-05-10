export default function Counter({ totalPackedItems, totalNumberOfItems }) {
  return (
    <div className="counter">
      {totalPackedItems}/{totalNumberOfItems} packed
    </div>
  );
}
