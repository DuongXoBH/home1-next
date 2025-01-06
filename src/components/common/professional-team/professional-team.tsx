import TeamCard from "./component/team-card";
export interface IProfessionalTeamInput {
  maginTop : string;
};
function ProfessionalTeamComponent(props : IProfessionalTeamInput) {
  return (
    <>
      <div className = {`w-full flex flex-col items-center ${props.maginTop} p-4 md:p-0 container`}>
        <div className="w-full md:w-[848px] flex flex-col items-center font-semibold">
          <p className="w-40 h-5 text-xs md:text-base md:leading-5 text-center text-custom-pink">
            Professional Teams
          </p>
          <p className="w-full md:w-[732px] md:h-[53px] text-3xl md:text-4xl font-semibold md:leading-[45px] tracking-[0.3px] text-center text-oxford-blue mt-3 mb-0 mx-0">
            The Professional expert
          </p>
          <p className="w-full md:w-[848px] md:h-[51px] text-xs md:text-base font-normal md:leading-6 tracking-widest text-center text-custom-gray mt-3 mb-0 mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </div>
        <div className="w-full md:h-[700px] flex flex-col items-center md:flex-row md:items-start justify-between px-7 py-0">
          <TeamCard />
        </div>
      </div>
    </>
  );
}

export default ProfessionalTeamComponent;
