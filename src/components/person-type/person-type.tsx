import React from "react";
import { Card, Content, Form, Heading } from "react-bulma-components";

interface PersonTypeProps {
  onChange: (personType: string) => void;
}

export const PersonType = (props: PersonTypeProps) => {
  const onChangePersonType = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <Card style={{ width: 700, margin: "auto" }}>
      <Card.Content>
        <Content>
          <Heading size={5}>TIPO</Heading>
          <Form.Control>
            <Form.Radio
              value="pf"
              name="person-type"
              onChange={onChangePersonType}
            >
              Pessoa Física
            </Form.Radio>
            <Form.Radio
              value="pj"
              name="person-type"
              onChange={onChangePersonType}
            >
              Pessoa Jurídica
            </Form.Radio>
          </Form.Control>
        </Content>
      </Card.Content>
    </Card>
  );
};
