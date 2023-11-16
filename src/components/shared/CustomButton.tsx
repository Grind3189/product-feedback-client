interface CustomButtonProp {
  children: React.ReactNode;
  bgColor: "purple" | "";
  // handleClick: () => void
}

const CustomButton = ({ children, bgColor }: CustomButtonProp) => {
  return (
    <button
      className={`rounded-[10px] ${
        bgColor === "purple" && "bg-purple-#AD1FEA lg:hover:bg-[#C75AF6]"
      } px-4 py-[0.6563rem] text-[0.875rem] font-bold text-white md:px-6 md:py-3`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
