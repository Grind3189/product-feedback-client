
interface MenuCardProp {
    children: React.ReactNode
}

const MenuCard = ({children}: MenuCardProp) => {
  return (
    <div className="w-[223px] rounded-[0.625rem] bg-white p-6 md:h-full xl:w-full">
      {children}
    </div>
  );
};

export default MenuCard;
