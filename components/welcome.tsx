import Link from "next/link";
import { FC } from "react";

export type WelcomeProps = {
  /** Title text to display in the welcome */
  title: string;
  /** standard children prop: accepts any valid React Node */
  // children: React.ReactNode;
  /** callback function passed to the onClick handler*/
  onClick?: () => void;
};

const Welcome: FC<WelcomeProps> = ({ title, onClick = () => {} }) => {
  return (
    <div className="welcome-page">
      <h1>{title}</h1>
      <button onClick={onClick}>Click me</button>
      <Link href="products/49">To Product 49</Link>
    </div>
  );
};

export default Welcome;
