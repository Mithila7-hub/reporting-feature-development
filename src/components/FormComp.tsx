import { Form, Input, DatePicker, Modal } from "antd";
// import { ButtonComp } from "./ButtonComp";
import { Dayjs } from "dayjs";

interface FormCompProps {
  reportTitle: string;
  onFormSubmit: (values: { name: string; period: Array<string> }) => void;
  open: boolean;
  onFormCancel: () => void;
  onFormOk: () => void;
}

const { RangePicker } = DatePicker;

export const FormComp: React.FC<FormCompProps> = ({
  reportTitle,
  onFormSubmit,
  open,
  onFormCancel,
  onFormOk,
}) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.submit();
    onFormOk();
  };

  const onFinish = (values: {
    name: string;
    period: [Dayjs, Dayjs] | null;
  }) => {
    const formattedValues = {
      ...values,
      period: values.period
        ? values.period.map((date) => date.format("DD/MM/YYYY"))
        : [],
    };
    // console.log(formattedValues, "formattedValues");
    onFormSubmit(formattedValues);
  };

  const handleCancel = () => {
    onFormCancel();
  };

  return (
    <Modal
      title={`${reportTitle} aanmaken`}
      className="modal-popup"
      open={open}
      okButtonProps={{ className: "primary-btn", htmlType: "submit" }}
      okText={"Genereer"}
      cancelText={"Sluiten"}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Naam"
          name="name"
          rules={[{ required: true, message: "Please input some text" }]}
        >
          <Input placeholder="Naam" />
        </Form.Item>
        <Form.Item
          label="Periode"
          name="period"
          rules={[{ required: true, message: "Please input period" }]}
        >
          <RangePicker style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
