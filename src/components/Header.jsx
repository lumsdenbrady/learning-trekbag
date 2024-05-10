import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalPackedItems, totalNumberOfItems }) {
  return (
    <header>
      <Logo />
      <Counter
        totalPackedItems={totalPackedItems}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}
