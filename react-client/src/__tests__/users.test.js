require("isomorphic-fetch");

test("users received from query should be equal to users from database", () => {
  const users = [
    {
      id: "46c38661-a087-4d2c-a9cc-53d4b8f15abc",
      name: "Vishwas Raman",
      email: "vishwas@sigalei.io",
      phone: "(555) 555-5555",
      password: "uw4DhXTnmzz8SJRX",
      avatar: "https://storage.googleapis.com/challenge-sigalei/vishwas.png",
    },
    {
      id: "29cd5658-cced-4fe2-9ed1-70c5b35f36c8",
      name: "Ryan Hamilton",
      email: "ryan.hamilton@sigalei.io",
      phone: "(555) 555-5555",
      password: "hmt2eY2LHDjHMRDw",
      avatar: "https://storage.googleapis.com/challenge-sigalei/ryan.png",
    },
    {
      id: "81d1fd8e-c224-4189-b593-092d9e2430e1",
      name: "Adam Vandover",
      email: "adam@sigalei.io",
      phone: "(555) 555-5555",
      password: "rPPdcaQuQ2QfVKs3",
      avatar: "https://storage.googleapis.com/challenge-sigalei/adam.png",
    },
    {
      id: "0808fd31-4349-4caa-bbda-0831697855aa",
      name: "Kushal Malani",
      email: "kushal@sigalei.io",
      phone: "(555) 555-5555",
      password: "dAdCRcTgkkXeVK33",
      avatar: "https://storage.googleapis.com/challenge-sigalei/kushal.png",
    },
    {
      id: "c91b8dbe-f4cb-47d4-998a-99901d8394b9",
      name: "Andrii Soldatenko",
      email: "andrii@sigalei.io",
      phone: "(555) 555-5555",
      password: "8XBPcBwxJ9Nmb7Ft",
      avatar: "https://storage.googleapis.com/challenge-sigalei/andrii.png",
    },
    {
      id: "da921a0c-3d85-4705-bd0c-11371186d625",
      name: "Sam Black",
      email: "sam@sigalei.io",
      phone: "(555) 555-5555",
      password: "EZz3mv7PU9HV3XLf",
      avatar: "https://storage.googleapis.com/challenge-sigalei/sam.png",
    },
  ];

  const db = {
    users,
  };

  return fetch("http://localhost:4000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query {
          users {
            id
            name
            email
            phone
            password
            avatar
				}
			}`,
    }),
  })
    .then((res) => res.json())
    .then((res) => expect(res.data).toStrictEqual(db));
});
