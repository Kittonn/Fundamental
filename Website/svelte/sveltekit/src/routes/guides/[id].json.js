export async function get({ params }) {
  const guilds = [
    { id: 1, title: "some title 1" },
    { id: 2, title: "some title 2" },
    { id: 3, title: "some title 3" },
    { id: 4, title: "some title 4" },
    { id: 5, title: "some title 5" },
  ];
  const guild = guilds.find((g) => g.id == params.id);
  if (guild) {
    return {
      status: 200,
      body: {
        guild,
      },
    };
  }
  return {
    status: 404,
  };
}
