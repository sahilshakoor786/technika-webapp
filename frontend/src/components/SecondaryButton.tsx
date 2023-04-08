type PrimaryButtonProps = {
    text: string;
    onClick?: () => void;
    form_link: any;
  };
  
  export default function SecondaryButton({ text, onClick,form_link }: PrimaryButtonProps) {
    return (
      <button
        onClick={onClick}
        className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 
              duration-300 my-5 px-2 py-2 text-xl font-bold text-white 
              bg-pink-900 shadow-lg rounded"
      >
       <a href={form_link} target='_blank'> {text}</a>
      </button>
    );
  }
  
