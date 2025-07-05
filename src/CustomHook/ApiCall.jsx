import useFetch from "./useFetch";

const ApiCall = () => {
  let url = "https://jsonplaceholder.typicode.com/users";

  let arr = useFetch(url);
  let colorBox = [
    {
      bgcolor: "bg-red-600",
    },
    {
      bgcolor: "bg-yellow-600",
    },
    {
      bgcolor: "bg-green-600",
    },
    {
      bgcolor: "bg-blue-600",
    },
    {
      bgcolor: "bg-gray-600",
    },
    {
      bgcolor: "bg-zinc-600",
    },
    {
      bgcolor: "bg-rose-600",
    },
    {
      bgcolor: "bg-cyan-600",
    },
    {
      bgcolor: "bg-teal-600",
    },
    {
      bgcolor: "bg-purple-600",
    },
  ];
  let combined = { ...arr, ...colorBox };
  console.log(combined);
  return (
    <div className="space-y-2 m-6">
      {arr &&
        arr.map((data, index) => (
          <div
            className={`border rounded-lg w-1/3 p-4 ${
              index % 2 == 0 ? `bg-cyan-100` : `bg-amber-100`
            }`}
            key={index}
          >
            <div className="text-lg font-medium">User Details</div>
            <div className="flex flex-row">
              <div className="font-medium mr-2">User ID: </div>
              <div className="font-light">{data.id}</div>
            </div>
            <div className="flex flex-row">
              <div className="font-medium mr-2">User Name:</div>
              <div className="font-light">{data.name}</div>
            </div>
            <div className="flex flex-row">
              <div className="font-medium mr-2">User Nickname:</div>
              <div className="font-light">{data.username}</div>
            </div>
            <div className="flex flex-row">
              <div className="font-medium mr-2">User Email:</div>
              <div className="font-light">{data.email}</div>
            </div>
            <div className="text-lg font-medium">User Address:</div>
            <div className="flex flex-row ml-16">
              <div className="font-medium mr-2">Street:</div>
              <div className="font-light">{data.address.street}</div>
            </div>
            <div className="flex flex-row ml-16">
              <div className="font-medium mr-2">Suite:</div>
              <div className="font-light">{data.address.suite}</div>
            </div>
            <div className="flex flex-row ml-16">
              <div className="font-medium mr-2">City:</div>
              <div className="font-light">{data.address.city}</div>
            </div>
            <div className="flex flex-row ml-16">
              <div className="font-medium mr-2">Zip Code:</div>
              <div className="font-light">{data.address.zipcode}</div>
            </div>
            <div className="flex flex-row ml-16">
              <div className="font-medium mr-2">Latitude:</div>
              <div className="font-light">{data.address.geo.lat}</div>
            </div>
            <div className="flex flex-row ml-16">
              <div className="font-medium mr-2">Longitude:</div>
              <div className="font-light">{data.address.geo.lng}</div>
            </div>
            <div className="flex flex-row">
              <div className="font-medium mr-2">Phone:</div>
              <div className="font-light">{data.phone}</div>
            </div>
            <div className="flex flex-row">
              <div className="font-medium mr-2">Website:</div>
              <div className="font-light">{data.website}</div>
            </div>
            <div className="text-lg font-medium">Company Details:</div>
            <div className="flex flex-row ml-24">
              <div className="font-medium mr-2">Company Name:</div>
              <div className="font-light">{data.company.name}</div>
            </div>
            <div className="flex flex-row ml-24">
              <div className="font-medium mr-2">Slogan:</div>
              <div className="font-light">{data.company.catchPhrase}</div>
            </div>
            <div className="flex flex-row ml-24">
              <div className="font-medium mr-2">Business:</div>
              <div className="font-light">{data.company.bs}</div>
            </div>
            <br />
          </div>
        ))}
    </div>
  );
};

export default ApiCall;
