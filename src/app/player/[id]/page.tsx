export default async function Page({ params }: any) {
  const response = await fetch(
    `http://localhost:3000/api/players?fullname=${params.id}`
  );
  const player = await response.json();

  if (!player || player.length === 0) {
    return <div>Player not found</div>;
  }
  return (
    <div>
      <div>
        <img src={player[0].image} alt={params.id} />
        <h1>
          {player[0].firstname} {player[0].lastname}
        </h1>
        <p>
          {player[0].team} - {player[0].position}
        </p>
        <p>
          {player[0].height} - {player[0].weight}
        </p>
        <p>{player[0].country}</p>
        <p>{player[0].birthdate}</p>
        <p>{player[0].lastattended}</p>
        <p>{player[0].number}</p>
      </div>
    </div>
  );
}
