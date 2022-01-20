export default function myProfil() {
  return (
    <div>
      <div className="bg-blue-900 p-10 flex flex-row">
        <div className="">
          {" "}
          <div className="rounded-full bg-white p-3 h-20 w-20 mb-5">
            <Image
              src={avatar}
              width="60px"
              height="60px"
              className="items-end"
            />
          </div>
          <div className=" bg-green-600 ">
            <div className="w-15">
              <p className="text-white p-1 text-center text-xs m-2">
                Modifier votre profil
              </p>
            </div>
          </div>
        </div>
        <div className="pl-5">
          <p className="text-white pt-5 text-sm">Bricoleur.2358455</p>
          <p className="text-white pl-50 text-sm">Membre depuis 25 jours</p>
        </div>
      </div>
    </div>
  );
}
