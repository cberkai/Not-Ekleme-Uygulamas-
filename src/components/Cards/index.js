import { Card, CloseButton, Image, Text, Button, Group } from "@mantine/core";

const CardComponent = ({ title, par, i, click }) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://www.workflowmax.com/hubfs/6-things-to-do-list.png"
          height={160}
          alt="Not"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        {/* <Badge color="pink" variant="light">
          On Sale
        </Badge> */}
        <CloseButton aria-label="Close modal" onClick={click} />
      </Group>

      <Text size="sm" color="dimmed">
        {par}
      </Text>

      <Button
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
      >
        Notu düzenle
      </Button>
    </Card>
  );
};

export default CardComponent;
