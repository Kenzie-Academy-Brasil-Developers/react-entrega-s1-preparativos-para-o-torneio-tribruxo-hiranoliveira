import Card from "../Card";

const Characters = ({ characters, random }) => {
  const listaFinal = [];

  const char1 = characters[random(characters.length)];

  const listaFilter = characters.filter((char) => char.house !== char1.house);

  const char2 = listaFilter[random(listaFilter.length)];

  const listaFilter2 = listaFilter.filter((char) => char.house !== char2.house);

  const char3 = listaFilter2[random(listaFilter2.length)];

  listaFinal.push(char1, char2, char3);
  return (
    <>
      {listaFinal[0] !== undefined ? (
        <>
          {listaFinal.map((char, index) => (
            <Card key={index} char={char} />
          ))}
        </>
      ) : null}
    </>
  );
};

export default Characters;
