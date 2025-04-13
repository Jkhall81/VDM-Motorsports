interface StepComponentProps {
  number: number;
  title: string;
  bulletPoints: string[];
}

export const StepComponent = ({
  number,
  title,
  bulletPoints,
}: StepComponentProps) => {
  return (
    <div className="px-10">
      <h3 className="text-2xl pl-10 my-10 font-normal">
        <span className="mr-4">{number}.</span>
        {title}
      </h3>
      <ul className="list-disc px-10 max-w-[700px] py-2">
        {bulletPoints.map((x, index) => (
          <li className="leading-loose" key={index}>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
};
