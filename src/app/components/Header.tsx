interface Props {
  title: string;
}

function Header({ title = "" }: Props) {
  return (
    <header className="py-14 px-4 mb-12 text-center border-b justify-center flex">
      <h2 className="uppercase text-2xl font-bold w-[80%] text-center">
        {title}
      </h2>
    </header>
  );
}

export default Header;
