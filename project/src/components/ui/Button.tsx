interface ButtonProps {
  children: any;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({ children, href, onClick, type = 'button' }: ButtonProps) {
  const className = "bg-accent hover:bg-opacity-90 text-white px-8 py-3 rounded-full text-lg font-semibold inline-block transition duration-300";
  
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}