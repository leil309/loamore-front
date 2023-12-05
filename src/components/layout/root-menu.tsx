const RootMenu = () => {
  return (
    <div className="sticky top-0 z-50 ml-2 flex max-h-screen flex-1 flex-col justify-between pt-1.5">
      <div className="flex flex-col">
        <span className=" bg-blue-100 p-3 text-xl">메뉴1</span>
        <span className=" p-3 text-xl">메뉴2</span>
        <span className=" p-3 text-xl">메뉴3</span>
        <span className=" p-3 text-xl">메뉴4</span>
        <span className=" p-3 text-xl">메뉴5</span>
      </div>
      <div className="mb-3 flex flex-col">
        <span className=" bg-blue-100 p-3 text-xl">메뉴6</span>
      </div>
    </div>
  );
};

export default RootMenu;
