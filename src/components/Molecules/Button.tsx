
type Props = {
  text: string;
  onClick: () => void;
};

const Button = ({text, onClick}: Props) => {
  return (
    <div className="inline-flex rounded-md shadow">
      <a href="#" onClick={onClick} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 lg:hover:bg-pink-500 lg:hover:opacity-80">
        {text}
      </a>
    </div>
  );
};

export default Button;