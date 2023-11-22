interface CustomButtonProp {
  children: React.ReactNode;
  bgColor: "purple" | "light navy blue" | "red";
  handleClick?: (e: React.MouseEvent) => void
  disabled?:boolean
}

const CustomButton = ({ children, bgColor, handleClick, disabled = false}: CustomButtonProp) => {
  return (
    <button
      className={`rounded-[10px] disabled:cursor-not-allowed ${
        bgColor === "purple"
          ? "bg-purple-#AD1FEA lg:hover:bg-[#C75AF6] disabled:bg-[#C75AF6]"
          : bgColor === "red" ? "bg-[#D73737] lg:hover:bg-[#E98888]"
          : "bg-light-navy-blue-#3A4374 lg:hover:bg-[#656EA3]"
      } px-4 py-[0.6563rem] text-[0.875rem] font-bold text-white md:px-6 md:py-3`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
