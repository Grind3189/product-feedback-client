import React from "react";

interface FormInputDescProp {
  children: React.ReactNode;
  title: string;
  guide: string;
}
const FormInputDesc = ({ children, title, guide }: FormInputDescProp) => {
  return (
    <div className="flex flex-col gap-4 text-[0.8125rem]">
      <div>
        <h2 className="font-bold tracking-[-0.181px] text-light-navy-blue-#3A4374">
          {title}
        </h2>
        <span className="text-dark-gray-#647196">{guide}</span>
      </div>
      {children}
    </div>
  );
};

export default FormInputDesc;
