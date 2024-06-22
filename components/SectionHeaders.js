export default function SectionHeaders({subHeader,mainHeader}) {
    return (
      <>
        <h3 className="font-semibold leading-4 text-gray-500 uppercase">
          {subHeader}
        </h3>
        <h2 className="pl-5 ml-10 mr-10 text-3xl font-bold text-left bg-gray-200 text-primary">
          {mainHeader}
        </h2>
      </>
    );
  }