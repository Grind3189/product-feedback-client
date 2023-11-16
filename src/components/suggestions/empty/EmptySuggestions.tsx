import emptyIllus from "@assets/suggestions/illustration-empty.svg";
import CustomButton from "../../shared/CustomButton";

const EmptySuggestions = () => {
  return (
    <section className="flex h-[460px] flex-col items-center justify-center rounded-[10px] bg-white px-6 md:h-[600px]">
      <img
        src={emptyIllus}
        alt="illustration of a man with a magnifying glass on his eyes"
        className="mb-10 md:mb-[3.3125rem] md:h-[136px] md:w-[129px]"
      />
      <h1 className="mb-[0.875rem] text-[1.125rem] font-bold tracking-[-0.25px] text-light-navy-blue-#3A4374 md:mb-4 md:text-[1.5rem]">
        There is no feedback yet.
      </h1>
      <p className="mb-6 max-w-[300px] text-center text-[0.8125rem] text-dark-gray-#647196 md:mb-12 md:max-w-[410px] md:text-[1rem]">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <CustomButton bgColor="purple">+ Add Feedback</CustomButton>
    </section>
  );
};

export default EmptySuggestions;
