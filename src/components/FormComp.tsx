import { Card, Button, Form, Input, Space } from "antd";

export const FormComp = () => {
  return (
    <Card title="Afval rapport aanmaken" className="card-popup">
      <Form layout="vertical">
        <Form.Item label="Field A" className="">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <div style={{ textAlign: "right" }}>
            <Space>
              <Button type="default">Sluiten</Button>
              <Button type="primary">Genereer</Button>
            </Space>
          </div>
        </Form.Item>
      </Form>
    </Card>
  );
};
