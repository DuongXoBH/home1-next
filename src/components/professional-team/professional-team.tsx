import TeamCard from "./component/team-card";

function ProfessionalTeamComponent() {
  return (
    <>
      <div className="w-full flex flex-col items-center !mt-[147px] container">
        <div className="w-[848px] flex flex-col items-center font-semibold">
          <p className="w-40 h-5 text-base leading-5 text-center text-custom-pink">
            Professional Teams
          </p>
          <p className="w-[732px] h-[53px] text-4xl font-semibold leading-[45px] !tracking-[0.3px] text-center text-oxford-blue mt-3 mb-0 mx-0">
            The Professional expert
          </p>
          <p className="w-[848px] h-[51px] text-base font-normal leading-6 tracking-widest text-center text-custom-gray mt-3 mb-0 mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </div>
        <div className="w-full h-[700px] flex justify-between px-7 py-0">
          <TeamCard />
        </div>
      </div>
    </>
  );
}

export default ProfessionalTeamComponent;
