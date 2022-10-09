import { Container, Grid, Stack, Button, Input, Textarea } from "@mantine/core";
import "./App.css";
import Card from "./components/Cards";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [paragraf, setParagraph] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      title: "Örnek Not 1",
      par: "Açıklama 1",
    },
    {
      id: 2,
      title: "Örnek Not 2",
      par: "Açıklama 2",
    },
    {
      id: 3,
      title: "Örnek Not 3",
      par: "Açıklama 3",
    },
  ]);
  const click = () => {
    setTitle("");
    setParagraph("");
    setList([
      ...list,
      {
        id: 5,
        title,
        par: paragraf,
      },
    ]);
  };
  return (
    <Container>
      <h1 style={{ textAlign: "center", fontFamily: "Poppins, Alfa Slab One" }}>
        Not oluşturma programı
      </h1>
      <Stack>
        <Input.Wrapper label="Başlık">
          <Input
            placeholder="Başlık yazınız"
            width={400}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Input.Wrapper>
        <Textarea
          placeholder="Açıklama yazınız"
          label="Açıklama"
          value={paragraf}
          onChange={(e) => setParagraph(e.target.value)}
        />
        <Button
          variant="gradient"
          gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
          onClick={click}
        >
          Not oluştur
        </Button>
      </Stack>
      <h2 style={{ textAlign: "center", fontFamily: "Poppins, Alfa Slab One" }}>
        Notlar:
      </h2>
      <Grid>
        {list.map(({ par, title }, i) => (
          <Grid.Col span={4} key={`index ${i}`}>
            <Card
              par={par}
              title={title}
              i={i}
              click={() => {
                let copyList = [...list];
                copyList.splice(i, 1);
                setList(copyList);
              }}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
